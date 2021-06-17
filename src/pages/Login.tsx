import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function Login() {
  return (
    <div className="App">
      <header>
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Login);
