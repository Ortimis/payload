'use client'
import type { UseListDrawer } from '@payloadcms/ui'
import type { BaseSelection } from 'lexical'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useListDrawer, useModal } from '@payloadcms/ui'
import { $getPreviousSelection, $getSelection, $setSelection } from 'lexical'
import { useCallback, useEffect, useState } from 'react'

/**
 *
 * Wrapper around useListDrawer that restores and saves selection state (cursor position) when opening and closing the drawer.
 * By default, the lexical cursor position may be lost when opening a drawer and clicking somewhere on that drawer.
 */
export const useLexicalListDrawer = (
  args: Parameters<UseListDrawer>[0],
): {
  closeListDrawer: () => void
  isListDrawerOpen: boolean
  ListDrawer: ReturnType<UseListDrawer>[0]
  listDrawerSlug: string
  ListDrawerToggler: ReturnType<UseListDrawer>[1]
  openListDrawer: (selection?: BaseSelection) => void
} => {
  const [editor] = useLexicalComposerContext()
  const [selectionState, setSelectionState] = useState<BaseSelection | null>(null)
  const [wasOpen, setWasOpen] = useState<boolean>(false)

  const [
    BaseListDrawer,
    BaseListDrawerToggler,
    {
      closeDrawer: baseCloseDrawer,
      drawerSlug: listDrawerSlug,
      isDrawerOpen,
      openDrawer: baseOpenDrawer,
    },
  ] = useListDrawer(args)
  const { modalState } = useModal()

  const storeSelection = useCallback(() => {
    editor.read(() => {
      const selection = $getSelection() ?? $getPreviousSelection()
      setSelectionState(selection)
    })
  }, [editor])

  const restoreSelection = useCallback(() => {
    if (selectionState) {
      editor.update(
        () => {
          $setSelection(selectionState.clone())
        },
        { discrete: true, skipTransforms: true },
      )
    }
  }, [editor, selectionState])

  const closeListDrawer = () => {
    //restoreSelection() // Should already be stored by the useEffect below
    baseCloseDrawer()
  }

  // We need to handle drawer closing via a useEffect, as toggleDrawer / closeDrawer will not be triggered if the drawer
  // is closed by clicking outside of the drawer. This useEffect will handle everything.
  useEffect(() => {
    if (!wasOpen) {
      return
    }

    const thisModalState = modalState[listDrawerSlug]
    // Exists in modalState (thus has opened at least once before) and is closed
    if (thisModalState && !thisModalState?.isOpen) {
      setWasOpen(false)
      setTimeout(() => {
        restoreSelection()
      }, 1)
    }
  }, [modalState, listDrawerSlug, restoreSelection, wasOpen])

  return {
    closeListDrawer,
    isListDrawerOpen: isDrawerOpen,
    ListDrawer: BaseListDrawer,
    listDrawerSlug,
    ListDrawerToggler: (props) => (
      <BaseListDrawerToggler
        {...props}
        onClick={() => {
          storeSelection()
        }}
      />
    ),
    openListDrawer: () => {
      storeSelection()
      baseOpenDrawer()
      setWasOpen(true)
    },
  }
}
