import pkceChallenge from 'react-native-pkce-challenge';
import { generateRandomString } from './actions';
import { base64UrlEncode } from 'react-native-pkce-challenge/lib/typescript/utils';

const client_id = '0310e97b325d4f189e1323d8316b8ee7';
const redirect_uri = 'http://localhost:8080';

async function generateCodeChallenge() {
  const challenge = pkceChallenge();
  return base64UrlEncode(challenge.codeChallenge);
}

export default () => {
  generateCodeChallenge().then((code_challenge: string) => {
    let state = generateRandomString(16);
    let scope = 'user-read-private user-read-email';

    let args = new URLSearchParams({
      response_type: 'code',
      client_id,
      redirect_uri,
      scope,
      state,
      code_challenge_method: 'S256',
      code_challenge,
    });

    // TODO: Redirect to Auth Screen with `args`
    // window.location = 'https://accounts.spotify.com/authorize?' + args;
  });

  // TODO: Request body
  // let codeVerifier = localStorage.getItem('code_verifier');

  // let body = new URLSearchParams({
  //   grant_type: 'authorization_code',
  //   code: code,
  //   redirect_uri: redirectUri,
  //   client_id: clientId,
  //   code_verifier: codeVerifier,
  // });

  /**
   * TODO:
   * Grab access token generated after auth and store it
   * Once it expires, bring the app back to auth flow
   * More info @https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
   */
  // const response = fetch('https://accounts.spotify.com/api/token', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: body,
  // })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('HTTP status ' + response.status);
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     localStorage.setItem('access_token', data.access_token);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
};
