import React from "react";

function Test2({ x, y }) {
    console.log(33);

    return (
        <div className="Test">
            <h1>Test2</h1>
            <p>{x}</p>
            <p>{y}</p>
        </div>
    );
}

export default Test2;
