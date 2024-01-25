import './Card.css'

export interface CardProps {
    city: string[];
}

function Card({ city }: CardProps) {
    return (
        <div className="cards">
            {city.map((name, index) => (
                <h1 key={index}>{name}</h1>
            ))}
        </div>
    );
}

export default Card;
