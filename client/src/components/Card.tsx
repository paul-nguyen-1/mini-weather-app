import './Card.css';

export interface CardProps {
    city: string[];
    weather?: (number | { status: number })[] | undefined;
}

function Card({ city, weather }: CardProps) {
    console.log(weather);

    return (
        <div className="cards">
            {weather?.map((item, index) => (
                <div className='card' key={index}>
                    <h1>
                        {typeof item === 'number' ? <h2>{item}</h2> : <h2>{item.status === 404 && 'Weather data unavailable.'}</h2>}
                    </h1>
                </div>
            ))}
            {city.map((name, index) => (
                <div className='card' key={index}>
                    <h2>{name}</h2>
                </div>
            ))}
        </div>
    );
}

export default Card;
