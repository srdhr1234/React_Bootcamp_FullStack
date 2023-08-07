// function handleClick(){
//     console.log("Clicked the Button")
// }

// function handleHover(){
//     console.log("Hovered the Mouse")
// }

export default function Clicker({buttonText,message}){
    const handleClick = ()=>{
        alert(message)
    }
    return <button onClick={handleClick}>{buttonText}</button>
}

