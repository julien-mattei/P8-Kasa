import { useState } from "react";
import left from "../assets/arrow-left.png"
import right from "../assets/arrow-right.png"


function SlideShow ({data, total}) {
    const [click, setClick] = useState(0)
    function rightClick () {
        setClick(click === data.length - 1 ? 0 : click +1)
    }
    function leftClick () {
        setClick(click === 0 ? data.length - 1 : click -1)
    }

    return <div className="slideshow">
        <button onClick={leftClick} className="left-button"><img src={left} alt={left} className="left" /></button>
        {data.map((picture, index) => (
            <img 
            src={picture} 
            alt={picture} 
            key={index}
            className={click === index ? "slide" : "slide slide-hidden"}
            />
        ))}
        <button onClick={rightClick} className="right-button"><img src={right} alt={right} className="right" /></button>
        <span className="number">{click +1}/{total}</span>
    </div>
}
export default SlideShow