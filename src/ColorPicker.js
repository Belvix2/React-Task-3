import {useState} from "react";

function ColorPicker({ colors }) {
    const [isVisible, setIsVisible] = useState(false);

    function colorPickButton(){
        let colorList = document.querySelector(".Colors");
        if (!isVisible) {
            colorList.classList.remove("hidden");
            setIsVisible(true);
        }
    }

    function colorButton(event){
        let colorPickButton = document.querySelector(".ColorPickButton");
        colorPickButton.style.backgroundColor = event.target.style.backgroundColor;
        let colorList = document.querySelector(".Colors");
        if (isVisible) {
            colorList.classList.add("hidden");
            setIsVisible(false);
        }
    }

    return (
        <div className="ColorPicker">
            <div className="Colors hidden">
                {colors.map((color) => (
                    <div key={color} className="Color" 
                    style={{ backgroundColor: color, width: 50 + "px", height: 50 + "px"}}
                    onClick={colorButton}></div>
                ))}
            </div>
            <button className="ColorPickButton" onClick={colorPickButton}>Pick a color</button>
        </div>
    );
}

export default ColorPicker;