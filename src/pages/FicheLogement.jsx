import { useParams } from "react-router-dom"
import Collapse from "../components/Collapse"
import logementListe from "../datas/LogementListe.json"
import Tag from "../components/Tag"
import SlideShow from "../components/SlideShow"
import star from "../assets/star.png"

function FicheLogement () {

    const {id} = useParams()
    const currentLogement = logementListe.find((logements) => logements.id === id)

    

    return <div className="fiche-logement">
        <SlideShow data={currentLogement.pictures} total={currentLogement.pictures.length} />
        
        <div className="general">
            <div className="info-logement">
                <h2>{currentLogement.title}</h2>
                <p>{currentLogement.location}</p>
                 <div className="tags-logement">
                    {currentLogement.tags.map((item, index) => (
                        <Tag
                            key={index}
                            title={item}
                        />
                    ))}
                </div>
            </div>
            <div>
                <div className="info-host">
                     <p>{currentLogement.host.name}</p>
                        <img src={currentLogement.host.picture} alt="" className="pic-host"/>
                </div>        
                <div className="rating">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
            </div>
        </div>
        <div className="collapses-logement">
            <Collapse name = 'Description'  description={currentLogement.description}/>
            <Collapse name='Équipements' description={currentLogement.equipments}/>
        </div>
    
    </div>
}
export default FicheLogement