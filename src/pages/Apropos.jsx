import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import imageAbout from '../assets/ImageAbout.png'

const txt = ['Fiabilité', 'Respect', 'Service', 'Sécurité']
function Apropos() {
    return <>
        <Banner image ={imageAbout}/>
        <Collapse name ="Fiabilité"/>
        <Collapse name ="Respect"/>
        <Collapse name ="Service"/>
        <Collapse name ="Sécurité"/>
    </>
}

export default Apropos