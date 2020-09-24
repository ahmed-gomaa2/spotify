import React, {useEffect} from 'react';
import './css/App.css'
import Login from "./Login";
import {connect} from 'react-redux'
import * as actions from '../actions'
import Player from "./Player";


const App = (props) => {

    const [token, setToken] = React.useState(null)

    useEffect(() => {
        props.getTokenFromResponse()
        window.location.hash = ''
    },[])

    useEffect(() => {
        if(props.token){
            const accessToken = props.token?.access_token
            if(accessToken) {
                setToken(accessToken)
                props.getUser(accessToken)
            }
        }
    },[props.token])

    return (
        <div className={'app'}>
            {
                token? (
                    <Player />
                ): (
                    <Login />
                )
            }
        </div>
    );
};

const mapStateToProps = state => {
     return {
        token: state.token,
        user:state.user
    }
}

export default connect(mapStateToProps, actions) (App);