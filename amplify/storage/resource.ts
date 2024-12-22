import { defineStorage } from "@aws-amplify/backend";
import { StorageAccessBuilder } from "@aws-amplify/backend-storage";

export const storage = defineStorage({
  name: 'myProjectFiles',
  access: (allow: StorageAccessBuilder) => ({
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'protected/{entity_id}/*': [
      allow.authenticated.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});
