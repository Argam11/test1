import React from "react";

function Test2({ x, y }) {
    console.log(999999);

    return (
        <div className="Test flex flex-col items-center font-bold text-red">
            <h1>Test2</h1>
            <p>{x}</p>
            <p>{y}</p>
        </div>
    );
}

export default Test2;
