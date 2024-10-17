import type { JSONSchema4 } from 'json-schema'

import type { SanitizedConfig } from '../../config/types.js'
import type { JobsConfig } from './types/index.js'

import { fieldsToJSONSchema } from '../../utilities/configToJSONSchema.js'

export function generateJobsJSONSchemas(
  config: SanitizedConfig,
  jobsConfig: JobsConfig,
  interfaceNameDefinitions: Map<string, JSONSchema4>,
  /**
   * Used for relationship fields, to determine whether to use a string or number type for the ID.
   * While there is a default ID field type set by the db adapter, they can differ on a collection-level
   * if they have custom ID fields.
   */
  collectionIDFieldTypes: { [key: string]: 'number' | 'string' },
): {
  definitions?: Map<string, JSONSchema4>
  properties?: { tasks: JSONSchema4 }
} {
  const properties: { tasks: JSONSchema4; workflows: JSONSchema4 } = {
    tasks: {},
    workflows: {},
  }
  const definitions: Map<string, JSONSchema4> = new Map()

  if (jobsConfig?.tasks?.length) {
    for (const task of jobsConfig.tasks) {
      const fullTaskJsonSchema: JSONSchema4 = {
        type: 'object',
        additionalProperties: false,
        properties: {
          input: {},
          output: {},
        },
        required: [],
      }
      if (task?.inputSchema?.length) {
        const inputJsonSchema = fieldsToJSONSchema(
          collectionIDFieldTypes,
          task.inputSchema,
          interfaceNameDefinitions,
          config,
        )

        const fullInputJsonSchema: JSONSchema4 = {
          type: 'object',
          additionalProperties: false,
          properties: inputJsonSchema.properties,
          required: inputJsonSchema.required,
        }

        fullTaskJsonSchema.properties.input = fullInputJsonSchema
        ;(fullTaskJsonSchema.required as string[]).push('input')
      }
      if (task?.outputSchema?.length) {
        const outputJsonSchema = fieldsToJSONSchema(
          collectionIDFieldTypes,
          task.outputSchema,
          interfaceNameDefinitions,
          config,
        )

        const fullOutputJsonSchema: JSONSchema4 = {
          type: 'object',
          additionalProperties: false,
          properties: outputJsonSchema.properties,
          required: outputJsonSchema.required,
        }

        fullTaskJsonSchema.properties.output = fullOutputJsonSchema
        ;(fullTaskJsonSchema.required as string[]).push('output')
      }

      const normalizedTaskSlug = task.slug[0].toUpperCase() + task.slug.slice(1)

      definitions.set(`Task${normalizedTaskSlug}`, fullTaskJsonSchema)
    }
    // Now add properties.tasks definition that references the types in definitions keyed by task slug:
    properties.tasks = {
      type: 'object',
      additionalProperties: false,
      properties: {
        ...Object.fromEntries(
          jobsConfig.tasks.map((task) => {
            const normalizedTaskSlug = task.slug[0].toUpperCase() + task.slug.slice(1)

            const toReturn: JSONSchema4 = {
              $ref: `#/definitions/Task${normalizedTaskSlug}`,
            }

            return [task.slug, toReturn]
          }),
        ),
        inline: {
          type: 'object',
          additionalProperties: false,
          properties: {
            input: {},
            output: {},
          },
          required: ['input', 'output'],
        },
      },
      required: jobsConfig.tasks.map((task) => task.slug),
    }
  }

  if (jobsConfig?.workflows?.length) {
    for (const workflow of jobsConfig.workflows) {
      if (workflow?.inputSchema?.length) {
        const inputJsonSchema = fieldsToJSONSchema(
          collectionIDFieldTypes,
          workflow.inputSchema,
          interfaceNameDefinitions,
          config,
        )

        const fullInputJsonSchema: JSONSchema4 = {
          type: 'object',
          additionalProperties: false,
          properties: inputJsonSchema.properties,
          required: inputJsonSchema.required,
        }
        const normalizedWorkflowSlug = workflow.slug[0].toUpperCase() + workflow.slug.slice(1)

        definitions.set(`Workflow${normalizedWorkflowSlug}Input`, fullInputJsonSchema)
      }

      properties.workflows = {
        type: 'object',
        additionalProperties: false,
        properties: Object.fromEntries(
          jobsConfig.workflows.map((workflow) => {
            const toReturn: JSONSchema4 = {
              type: 'object',
              additionalProperties: false,
              properties: {
                input: {},
              },
              required: ['input'],
            }

            if (workflow.inputSchema?.length) {
              ;(toReturn.required as string[]).push('input')
              const normalizedWorkflowSlug = workflow.slug[0].toUpperCase() + workflow.slug.slice(1)

              toReturn.properties.input = {
                $ref: `#/definitions/Workflow${normalizedWorkflowSlug}Input`,
              }
            }

            return [workflow.slug, toReturn]
          }),
        ),
        required: jobsConfig.tasks.map((task) => task.slug),
      }
    }
  }

  return {
    definitions,
    properties,
  }
}
