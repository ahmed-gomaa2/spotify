export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = 'https://spotify-b41cc.web.app/'

const clientId = "c4f9bf6f9c0b4acfb44b57ae782ce0f2"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`