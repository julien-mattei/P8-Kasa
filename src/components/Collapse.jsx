import { useState } from 'react'
import down from '../assets/down.png'
import logementListe from "../datas/LogementListe.json"


function Collapse ({name, description}){
    const [open, setOpen] = useState(true)
    const handleClick = () => {
        setOpen((o) => !o)
    }
   
    return  <div className="collapse">
            <div className="collapse-title">{name}
                <button onClick={handleClick}><img src={down} alt="chevron-down" className='down' /></button>
            </div>
            <div  className={open ? "info" : "infoplus" }>{open ? '' : <p>{description}</p>}</div>
            
            
        </div>
        
}

export default Collapse