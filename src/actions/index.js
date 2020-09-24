import SpotifyWebApi from 'spotify-web-api-js'


const spotify = new SpotifyWebApi()


export const getTokenFromResponse = () => async dispatch => {
     const token = await window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
         return initial
    }, {})

    dispatch({
        type: 'PULL_OUT_TOKEN',
        payload: token
    })
}


export const getUser = accessToken => async dispatch => {
    spotify.setAccessToken(accessToken)
    const user = await spotify.getMe()

    dispatch({
        type:'GET_USER',
        payload: user
    })
}


export const getPlaylists = () => async dispatch => {
    const playLists = await spotify.getUserPlaylists()

    dispatch({
        type:'GET_PLAYLISTS',
        payload: playLists
    })
}

export const getDiscoverWeekly = () => async dispatch => {
    const discoverWeekly = await spotify.getPlaylist("4ilkYdbsc1x2HepcGxxFtU")
    dispatch({
        type:'GET_DISCOVER_WEEKLY',
        payload: discoverWeekly
    })
}