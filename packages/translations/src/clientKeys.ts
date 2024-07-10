import type { DefaultTranslationKeys } from './types.js'

function createClientTranslationKeys<T extends DefaultTranslationKeys[]>(keys: T) {
  return keys
}

export const clientTranslationKeys = createClientTranslationKeys([
  'authentication:account',
  'authentication:accountOfCurrentUser',
  'authentication:accountVerified',
  'authentication:alreadyActivated',
  'authentication:alreadyLoggedIn',
  'authentication:apiKey',
  'authentication:authenticated',
  'authentication:backToLogin',
  'authentication:beginCreateFirstUser',
  'authentication:changePassword',
  'authentication:checkYourEmailForPasswordReset',
  'authentication:confirmGeneration',
  'authentication:confirmPassword',
  'authentication:createFirstUser',
  'authentication:emailNotValid',
  'authentication:usernameNotValid',
  'authentication:emailOrUsername',
  'authentication:emailSent',
  'authentication:emailVerified',
  'authentication:enableAPIKey',
  'authentication:failedToUnlock',
  'authentication:forceUnlock',
  'authentication:forgotPassword',
  'authentication:forgotPasswordEmailInstructions',
  'authentication:forgotPasswordUsernameInstructions',
  'authentication:forgotPasswordQuestion',
  'authentication:generate',
  'authentication:generateNewAPIKey',
  'authentication:generatingNewAPIKeyWillInvalidate',
  'authentication:logBackIn',
  'authentication:loggedOutInactivity',
  'authentication:loggedOutSuccessfully',
  'authentication:loggingOut',
  'authentication:login',
  'authentication:logOut',
  'authentication:loggedIn',
  'authentication:loggedInChangePassword',
  'authentication:logout',
  'authentication:logoutUser',
  'authentication:logoutSuccessful',
  'authentication:newAPIKeyGenerated',
  'authentication:newPassword',
  'authentication:passed',
  'authentication:passwordResetSuccessfully',
  'authentication:resetPassword',
  'authentication:stayLoggedIn',
  'authentication:successfullyRegisteredFirstUser',
  'authentication:successfullyUnlocked',
  'authentication:username',
  'authentication:unableToVerify',
  'authentication:tokenRefreshSuccessful',
  'authentication:verified',
  'authentication:verifiedSuccessfully',
  'authentication:verify',
  'authentication:verifyUser',
  'authentication:youAreInactive',

  'error:autosaving',
  'error:correctInvalidFields',
  'error:deletingTitle',
  'error:emailOrPasswordIncorrect',
  'error:usernameOrPasswordIncorrect',
  'error:loadingDocument',
  'error:logoutFailed',
  'error:noMatchedField',
  'error:notAllowedToAccessPage',
  'error:previewing',
  'error:unableToDeleteCount',
  'error:unableToUpdateCount',
  'error:unauthorized',
  'error:unknown',
  'error:unspecific',
  'error:userEmailAlreadyRegistered',
  'error:usernameAlreadyRegistered',
  'error:tokenNotProvided',
  'error:unPublishingDocument',

  'fields:addLabel',
  'fields:addLink',
  'fields:addNew',
  'fields:addNewLabel',
  'fields:addRelationship',
  'fields:addUpload',
  'fields:block',
  'fields:blocks',
  'fields:blockType',
  'fields:chooseBetweenCustomTextOrDocument',
  'fields:customURL',
  'fields:chooseDocumentToLink',
  'fields:openInNewTab',
  'fields:enterURL',
  'fields:internalLink',
  'fields:chooseFromExisting',
  'fields:linkType',
  'fields:textToDisplay',
  'fields:collapseAll',
  'fields:editLink',
  'fields:editRelationship',
  'fields:itemsAndMore',
  'fields:labelRelationship',
  'fields:latitude',
  'fields:linkedTo',
  'fields:longitude',
  'fields:passwordsDoNotMatch',
  'fields:removeRelationship',
  'fields:removeUpload',
  'fields:saveChanges',
  'fields:searchForBlock',
  'fields:selectFieldsToEdit',
  'fields:showAll',
  'fields:swapRelationship',
  'fields:swapUpload',
  'fields:toggleBlock',
  'fields:uploadNewLabel',

  'general:aboutToDeleteCount',
  'general:aboutToDelete',
  'general:addBelow',
  'general:addFilter',
  'general:adminTheme',
  'general:and',
  'general:applyChanges',
  'general:ascending',
  'general:automatic',
  'general:backToDashboard',
  'general:cancel',
  'general:changesNotSaved',
  'general:close',
  'general:collapse',
  'general:collections',
  'general:columns',
  'general:columnToSort',
  'general:confirm',
  'general:confirmDeletion',
  'general:confirmDuplication',
  'general:copied',
  'general:copy',
  'general:create',
  'general:created',
  'general:createdAt',
  'general:createNew',
  'general:createNewLabel',
  'general:creating',
  'general:creatingNewLabel',
  'general:custom',
  'general:dark',
  'general:dashboard',
  'general:delete',
  'general:deletedSuccessfully',
  'general:deletedCountSuccessfully',
  'general:deleting',
  'general:descending',
  'general:depth',
  'general:deselectAllRows',
  'general:document',
  'general:documents',
  'general:duplicate',
  'general:duplicateWithoutSaving',
  'general:edit',
  'general:editing',
  'general:editingLabel',
  'general:editLabel',
  'general:email',
  'general:emailAddress',
  'general:enterAValue',
  'general:error',
  'general:errors',
  'general:fallbackToDefaultLocale',
  'general:false',
  'general:filters',
  'general:filterWhere',
  'general:globals',
  'general:language',
  'general:lastModified',
  'general:leaveAnyway',
  'general:leaveWithoutSaving',
  'general:light',
  'general:livePreview',
  'general:loading',
  'general:locale',
  'general:menu',
  'general:moveDown',
  'general:moveUp',
  'general:noFiltersSet',
  'general:noLabel',
  'general:none',
  'general:noOptions',
  'general:noResults',
  'general:notFound',
  'general:nothingFound',
  'general:noValue',
  'general:of',
  'general:open',
  'general:or',
  'general:order',
  'general:pageNotFound',
  'general:password',
  'general:payloadSettings',
  'general:perPage',
  'general:remove',
  'general:reset',
  'general:row',
  'general:rows',
  'general:save',
  'general:saving',
  'general:searchBy',
  'general:selectAll',
  'general:selectAllRows',
  'general:selectedCount',
  'general:selectValue',
  'general:showAllLabel',
  'general:sorryNotFound',
  'general:sort',
  'general:sortByLabelDirection',
  'general:stayOnThisPage',
  'general:submissionSuccessful',
  'general:submit',
  'general:submitting',
  'general:success',
  'general:successfullyCreated',
  'general:successfullyDuplicated',
  'general:thisLanguage',
  'general:titleDeleted',
  'general:true',
  'general:users',
  'general:user',
  'general:username',
  'general:unauthorized',
  'general:unsavedChangesDuplicate',
  'general:untitled',
  'general:updatedAt',
  'general:updatedCountSuccessfully',
  'general:updatedSuccessfully',
  'general:updating',
  'general:welcome',

  'operators:equals',
  'operators:exists',
  'operators:isNotIn',
  'operators:isIn',
  'operators:contains',
  'operators:isLike',
  'operators:isNotEqualTo',
  'operators:near',
  'operators:isGreaterThan',
  'operators:isLessThan',
  'operators:isGreaterThanOrEqualTo',
  'operators:isLessThanOrEqualTo',
  'operators:within',
  'operators:intersects',

  'upload:crop',
  'upload:cropToolDescription',
  'upload:dragAndDrop',
  'upload:editImage',
  'upload:focalPoint',
  'upload:focalPointDescription',
  'upload:height',
  'upload:previewSizes',
  'upload:selectCollectionToBrowse',
  'upload:selectFile',
  'upload:setCropArea',
  'upload:setFocalPoint',
  'upload:sizesFor',
  'upload:sizes',
  'upload:width',
  'upload:fileName',
  'upload:fileSize',

  'validation:emailAddress',
  'validation:fieldHasNo',
  'validation:limitReached',
  'validation:longerThanMin',
  'validation:required',
  'validation:requiresAtLeast',
  'validation:shorterThanMax',
  'validation:username',

  'version:aboutToPublishSelection',
  'version:aboutToRestore',
  'version:aboutToRestoreGlobal',
  'version:aboutToRevertToPublished',
  'version:aboutToUnpublish',
  'version:aboutToUnpublishSelection',
  'version:autosave',
  'version:autosavedSuccessfully',
  'version:autosavedVersion',
  'version:changed',
  'version:confirmRevertToSaved',
  'version:compareVersion',
  'version:confirmPublish',
  'version:confirmUnpublish',
  'version:confirmVersionRestoration',
  'version:draft',
  'version:draftSavedSuccessfully',
  'version:lastSavedAgo',
  'version:noFurtherVersionsFound',
  'version:noRowsFound',
  'version:preview',
  'version:problemRestoringVersion',
  'version:publish',
  'version:publishChanges',
  'version:published',
  'version:publishing',
  'version:restoredSuccessfully',
  'version:restoreThisVersion',
  'version:restoring',
  'version:reverting',
  'version:revertToPublished',
  'version:saveDraft',
  'version:selectLocales',
  'version:selectVersionToCompare',
  'version:showLocales',
  'version:status',
  'version:type',
  'version:unpublish',
  'version:unpublishing',
  'version:versionCreatedOn',
  'version:versionID',
  'version:version',
  'version:versions',
  'version:viewingVersion',
  'version:viewingVersionGlobal',
  'version:viewingVersions',
  'version:viewingVersionsGlobal',
])
