import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <div>
                {/*<div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>*/}
                <PageTitle title={"This is APP component"}/>
                Article 1
                <Rating value={3}/>
                <Accordion value={"Меню"}/>
                Article 2
                <Rating value={5}/>
            </div>
        </div>
    );
}

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;