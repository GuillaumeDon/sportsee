import React from "react";

function Square({squareContent, altContent}) {

    return(

    <div className="square">
        <img src={squareContent} alt={altContent} />
    </div>
    );
}

export default Square;