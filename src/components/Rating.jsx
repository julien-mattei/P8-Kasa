import starEmpty from "../assets/star-empty.png"
import starFilled from "../assets/star-filled.png"
function Rating ({rating}) {
    const  stars = []

    for(let i =1; i <= 5; i++){
        const isFilled = i <= rating
        const star = isFilled ? starFilled : starEmpty
        stars.push(<img src={star} key={i} className="star"/>);
    }
    
    return <>
        <div className="rating">{stars}</div>
    </>
}

export default Rating