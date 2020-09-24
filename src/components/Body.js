import React, {useEffect} from 'react';
import './css/Body.css'
import Header from './Header'
import {connect} from'react-redux'
import * as actions from '../actions'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'

const Body = (props) => {

    useEffect(() => {
        if (props.token){
            props.getDiscoverWeekly()
         }
    }, [props.token])
    return (
        <div className={'body'}>
            <Header />
            <div className="body__info">
                <img src={props.discoverWeekly?.images[0]?.url} alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{props.discoverWeekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className={'body__shuffle'}/>
                    <FavoriteIcon fontSize={'large'} />
                    <MoreHorizIcon />
                </div>
                {props.discoverWeekly?.tracks?.items?.map(item => (
                    <SongRow track={item.track}/>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.token,
        discoverWeekly: state.discoverWeekly
    }
}

export default connect(mapStateToProps, actions) (Body);
