import React from "react";

function Test1({ x, y }) {

    console.log(111);
    
    return (
        <div className="Test">
            <h1>Test1</h1>
            <p>{x}</p>
            <p>{y}</p>
        </div>
    );
}

export default Test1;
