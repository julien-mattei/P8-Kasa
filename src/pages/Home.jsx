import Banner from '../components/Banner'
import CardsList from '../components/CardsList'
import imageHome from '../assets/ImageHome.png'
import "../styles/home.scss"

const txtHome = 'Chez vous, partout et ailleurs'

function Home() {
    return <>
        <Banner 
        image={imageHome}
        texte = {txtHome}
        />
        <CardsList />
    </>
        
}

export default Home