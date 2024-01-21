import { Link, useParams } from 'react-router-dom'
import LogementListe from '../datas/LogementListe'
import Card from './Card'
import { useState } from 'react'

function CardsList () {
    return  <div className='liste-logement'>
                {LogementListe.map(({id, title, cover}) => (
                    <Link key={id} to={`../ficheLogement/${id}`}>
                        <Card 
                            key = {id}
                            title = {title}
                            cover = {cover}
                        />
                    </Link>
                ))}    
        </div>
}

export default CardsList