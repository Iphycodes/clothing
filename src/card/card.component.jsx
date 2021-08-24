import './card.styles.css';

export const Card = ({monster}) => (

    <div className="card-container">
        <h1 key={monster.id}>{monster.name}</h1>
        <span>{monster.email}</span>
    </div>
            

)