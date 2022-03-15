import React, {useEffect, useState} from 'react';
import { MenuItem } from '../Menu-item/menuitem.component';

import '../Directory-menu/directorymenu.style.scss'



export const DirectoryMenu = () => {
   const [sections, setSections] = useState([])

   useEffect(() => {
     setSections([
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
        //size: 'normal'
      },
      {
        title: 'suits',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
        //size: 'normal'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
       // size: 'normal'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
       
      }
     ])
   }, [])

   return (
    <div className="directory-menu">
        {sections.map(({id, ...rest}) => (
        <MenuItem key={id} {...rest}/>
        ))}
    </div>
    )

}

export default DirectoryMenu;