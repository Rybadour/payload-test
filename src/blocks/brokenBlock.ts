import type { Block } from 'payload'
import { Code } from './Code/config'

export const BrokenBlock: Block = {
  slug: 'brokenBlock',
  dbName: 'broke',
  interfaceName: 'BrokenBlock',
  fields: [
    {
      name: 'otherBlock',
      type: 'blocks',
      maxRows: 1,
      blocks: [Code],
    },
  ],
}
