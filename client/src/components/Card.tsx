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
                        {typeof item === 'number' ? <span>{item}&deg;F</span> : <span>{item.status === 404 && 'Weather data unavailable.'}</span>}
                    </h1>
                    <h2>{city[index]}</h2>
                </div>
            ))}
        </div>
    );
}

export default Card;
