import "./Card.css"

function Card({ titulo, avisos = [''] }) {
    return (
        <article className="card">
            <div className="card-header">
                <h3>{titulo}</h3>
            </div>
            <div className="card-content">
                <ul>
                    {avisos.map((item, index) => (
                        <li key={index + item}>{item}</li>
                    ))}
                </ul>
            </div>
        </article>)
}

export default Card;