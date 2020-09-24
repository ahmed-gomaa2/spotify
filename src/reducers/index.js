import {combineReducers} from "redux";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";
import playlistsReducer from "./playlistsReducer";
import discoverWeeklyReducer from "./discoverWeeklyReducer";

export default combineReducers({
    token: tokenReducer,
    user: userReducer,
    playLists: playlistsReducer,
    discoverWeekly: discoverWeeklyReducer
})