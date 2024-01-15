function Banner ({image, texte}) {
    return <>
        <div className="banniere">
            <img src={image}/>
            <span>{texte}</span>
        </div>
    </>
}

export default Banner