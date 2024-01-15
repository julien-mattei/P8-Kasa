function Card ({ title, cover}) {
    return <div className="card">
            <img src={cover}></img>
            <span>{title}</span>
        </div>
}

export default Card

