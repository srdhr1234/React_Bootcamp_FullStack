function handleClick(){
    console.log("Clicked the Button")
}

function handleHover(){
    console.log("Hovered the Mouse")
}

export default function Clicker(){
    return (
        <div>
            <p onMouseOver={handleHover}>Hover Over Me</p>
            <button onClick={handleClick}>Click </button>
            <button
                onClick={() =>
                console.log("CLICKED THE INLINE ARROW VERSION !")
                }
            > Inline Function (Click Me)
            </button>
        </div>
    )
}
