import React from "react";

function Square({squareContent, altContent, squareStyle}) {

    return(

    <div className={squareStyle}>
        <img src={squareContent} alt={altContent} />
    </div>
    );
}

export default Square;