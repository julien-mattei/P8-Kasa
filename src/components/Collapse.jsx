import { useState } from 'react'
import down from '../assets/down.png'
import up from '../assets/up-arrow.png'


function Collapse ({name, description}){
    const [close, setClose] = useState(true)
    const handleClick = () => {
        setClose((o) => !o)
    }
   
    return  <div className="collapse">
            <div className="collapse-title">{name}
                <button onClick={handleClick}> {close ? <img src={up} alt="chevron-up" className='up' />:<img src={down} alt="chevron-down" className='down' />  } </button>
            </div>
            <div  className={close ? "info" : "infoplus" }>{close ? '' : <p>{description}</p>}</div>
            
            
        </div>
        
}

export default Collapse