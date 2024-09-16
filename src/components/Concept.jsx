

export default function Concept({ imgSrc, title, description }) {
    return (
        <li className="concept">
            <img src={imgSrc} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}
