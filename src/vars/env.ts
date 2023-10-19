import {Buffer} from 'buffer';

const client_id = process.env.SPOTIFY_API_ID; // Your client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
const auth_token = Buffer.from(
  `${client_id}:${client_secret}`,
  'utf-8',
).toString('base64');

export {client_id, client_secret, auth_token};
