import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import imageAbout from '../assets/ImageAbout.png'
import "../styles/about.scss"

function About() {
    return <>
        <Banner image ={imageAbout}/>
        <div className='collapses'>
            <Collapse 
            name ="Fiabilité" 
            description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
            />
            <Collapse 
            name ="Respect"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme.."
            />
            <Collapse 
            name ="Service"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse 
            name ="Sécurité"
            description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </div>
        
    </>
}

export default About