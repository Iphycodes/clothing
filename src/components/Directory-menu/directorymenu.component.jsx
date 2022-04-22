import React, {useEffect} from 'react';
import { MenuItem } from '../Menu-item/menuitem.component';
import { useSelector } from 'react-redux';
import '../Directory-menu/directorymenu.style.scss'


export const DirectoryMenu = () => {
   const sections = useSelector(state => state.directory.section)



   return (
    <div className="directory-menu">
        {sections.map(({id, ...rest}) => (
        <MenuItem key={id} {...rest}/>
        ))}
    </div>
    )
}

export default DirectoryMenu;
