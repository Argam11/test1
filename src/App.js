import React from "react";
import "./App.css";

import getComponents from "./getComponents";

let Component = getComponents(2, 1);

if (!Component) Component = () => <div>11</div>;
function App() {
    return (
        <div className="App">
            <Component x={111} y={222} />
        </div>
    );
}

export default App;
