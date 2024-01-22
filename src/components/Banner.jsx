function Banner ({image, texte}) {
    return <>
        <div className="banniere">
            <img src={image} alt={image} className="banner-image"/>
            <span className="banner-text">{texte}</span>
        </div>
    </>
}

export default Banner