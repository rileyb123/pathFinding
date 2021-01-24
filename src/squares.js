import React, {useState} from 'react';
import "./squares.css";

function Squares({start,row,col}) {

    //Get the id of the button so we can set it
    //This will make dealing wi th the buttons styles etc
    // Later much easier as the id is the row+col
    let id = "" + row + "-" + col + "";

    
    
    const [b_color,setColor] = useState(0);

    function buttonHandler(){
     
        setColor(1-b_color);
    }

    let b_class = b_color ? "blackb" : "whiteb";
    
    return (
        <button id={id}  className={b_class} onClick={() => buttonHandler()}></button>
    );
}

export default Squares;