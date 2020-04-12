import React from 'react';

import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
import Sections from './sections';
class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: Sections
        }
    }

    render(){
        return (
            <div className= 'directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key = {id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;