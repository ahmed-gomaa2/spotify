import React, {useEffect} from 'react';
import './css/Sidebar.css'
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import {connect} from 'react-redux'
import * as actions from '../actions'

const Sidebar = (props) => {

    useEffect(() => {
        if(props.token) {
            props.getPlaylists()
        }
    }, [props.token])


    return (
        <div className={'sidebar'}>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>

            <SidebarOption Icon={HomeIcon} option={'Home'}/>
            <SidebarOption Icon={SearchIcon} option={'Search'}/>
            <SidebarOption Icon={LibraryMusicIcon} option={'Your Library'}/>

            <br />
            <strong className={'sidebar__title'}>PLAYLISTS</strong>
            <hr/>

            {props.playlists?.items?.map(playlist => {
                console.log(playlist)
                return < SidebarOption
                option = {playlist.name}
                />
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token:state.token,
        playlists: state.playLists
    }
}

export default connect(mapStateToProps, actions) (Sidebar);