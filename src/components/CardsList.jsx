import {logementList} from '../datas/LogementListe'
import Card from './Card'

function CardsList () {
    return  <div className='liste-logement'>
                <ul className='liste'>
                    {logementList.map(({id, title, cover}) => (
                    <Card 
                         id = {id}
                        title = {title}
                        cover = {cover}
                    />
                    ))}
                </ul>
        </div>
}

export default CardsList