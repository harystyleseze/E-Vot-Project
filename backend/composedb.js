// Import ComposeDB client

import { ComposeClient }from '@composedb/client'

// Import your compiled composite

import { definition }from './__generated__/definition.js'

// Create an instance of ComposeClient
// Pass the URL of your Ceramic server
// Pass reference to your compiled composite

export const composeClient = new ComposeClient({ ceramic: 'http://localhost:7007', definition })
