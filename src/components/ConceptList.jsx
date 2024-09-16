import Concept from "./Concept"


export default function ConceptList({ concepts }) {
    return (
        <ul id="concepts">
            {concepts.map((concept) => {
                return <Concept key={concept.title} title={concept.title} imgSrc={concept.image} description={concept.description} />
            })}
        </ul>
    )
}

