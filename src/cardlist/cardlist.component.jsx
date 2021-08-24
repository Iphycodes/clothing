import React from "react"
import { Card } from "../card/card.component";

import './cardlist.styles.css';

export const Cardlist = ({monsters}) => (
    <div className='card-list'>
        {monsters.map(monster => (
            // <h1 key={monster.id}>{monster.name}</h1>
            <Card key={monster.email} monster={monster}></Card>
        ))}
    </div>
)