
import React from  "react"
import ReactDOM from "react-dom/client"

let heading= React.createElement("h1", {id:'heading', xyz:"ABC"}, 'Hello Aniket');
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);