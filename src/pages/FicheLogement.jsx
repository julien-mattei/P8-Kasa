import { useParams } from "react-router-dom"
import Collapse from "../components/Collapse"
import logementListe from "../datas/LogementListe.json"
import Tag from "../components/Tag"

function FicheLogement () {

    const {id} = useParams()
    const currentLogement = logementListe.find((logement) => logement.id === id)
    console.log(currentLogement)
    
    return <>
        <div className="general">
            <div className="info-logement">
                <h2>{currentLogement.title}</h2>
                <p>{currentLogement.location}</p>
            </div>
            <div className="info-host">
                <p>{currentLogement.host.name}</p>
                <img src={currentLogement.host.picture} alt="" className="pic-host"/>
            </div>
        </div>
        <div>
            
        </div>
        
        <div className="collapses-logement">
            <Collapse name='Équipements' className="collapse-logement"/>
            <Collapse name = 'Description'  description={currentLogement.description}/>
        </div>
    
    </>
}
export default FicheLogement