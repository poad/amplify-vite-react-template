import { Authenticator } from "@aws-amplify/ui-react";
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "./App.css";
import "@aws-amplify/ui-react-storage/styles.css";

function App() {
  const { StorageBrowser } = createStorageBrowser({
    config: createAmplifyAuthAdapter(),
  });
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <StorageBrowser />
        </main>
      )}
    </Authenticator>
  );
}

export default App;
