function Card ({id, title, cover}) {
    return <li key={id}>
            <img src={cover}/>{title}
        </li>
}

export default Card

