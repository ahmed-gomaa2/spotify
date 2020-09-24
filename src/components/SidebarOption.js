import React from 'react';
import './css/SidebarOption.css'
import {Icon} from "@material-ui/core";

const SidebarOption = ({option, Icon}) => {
    return (
        <div className={'sidebarOption'}>
            {Icon && <Icon className={'sidebarOption__icon'} />}
            {Icon ? <h5>{option}</h5> : <p>{option}</p>}

        </div>
    );
};

export default SidebarOption;