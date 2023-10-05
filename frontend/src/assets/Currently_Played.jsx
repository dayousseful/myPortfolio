import { Buffer } from 'buffer'
import QueryString from 'query-string'

const client_id = import.meta.env.VITE_CLIENT_ID
const client_secret = import.meta.env.VITE_CLIENT_SECRET
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI
const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT
const refresh_token = import.meta.env.VITE_REFRESH_TOKEN
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const RECENTLY_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`


const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
    Authorization: `Basic ${basic}`,
    "Content-Type": "application/x-www-form-urlencoded",
    },
    body: QueryString.stringify({
    grant_type: "refresh_token",
    refresh_token: refresh_token,}),
  });
  return( response.json())
};

const getRecentlyPlaying = async (client_id, client_secret, refresh_token) => {
  const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);
  return fetch(RECENTLY_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
};

export default async function getCurrentlyPlayedItem(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await getRecentlyPlaying(client_id, client_secret, refresh_token);
  if (response.status === 204 || response.status > 400) {
    return false
  }

  const songsArray = await response.json()
  const albumImageUrl = songsArray.items[0].track.album.images[0].url
  const artist =  songsArray.items[0].track.artists[0].name
  const song = songsArray.items[0].track.name
  const songUrl = songsArray.items[0].track.external_urls.spotify
  const previewUrl = songsArray.items[0].track.preview_url

  // console.log(songsArray)
  // console.log(albumImageUrl)
  // console.log(song)
  // console.log(artist)
  // console.log(songUrl)
  // console.log(previewUrl)
  return {
    songsArray,
    albumImageUrl,
    artist,
    songUrl,
    song,
    previewUrl
  }
}
