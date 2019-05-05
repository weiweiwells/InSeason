import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Produce extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Eat local it's good!!!</h1>
                <ButtonToolbar/>
                <div className="Buttons">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-city">
                        City
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Seattle</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Vancouver</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Router>
                <div className="Months">
                    <nav>
                        <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-month">
                        Month
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Link to ="/jan">January</Link>
                        <Link to ="/feb">February</Link>
                        <Link to ="/mar">March</Link>
                        <Link to ="/apr">April</Link>
                        <Link to ="/may">May</Link>
                        <Link to ="/jun">June</Link>
                        <Link to ="/jul">July</Link>
                        <Link to ="/aug">August</Link>
                        <Link to ="/sep">September</Link>
                        <Link to ="/oct">October</Link>
                        <Link to ="/nov">November</Link>
                        <Link to ="/dec">December</Link>
                    </Dropdown.Menu>
                        </Dropdown>
                    </nav>

                    <Route path="/jan" component={Jan} />
                    <Route path="/feb" component={Feb} />
                    <Route path="/mar" component={Mar} />
                    <Route path="/apr" component={Apr} />
                    <Route path="/may" component={May} />
                    <Route path="/jun" component={Jun} />
                    <Route path="/jul" component={Jul} />
                    <Route path="/aug" component={Aug} />
                    <Route path="/sep" component={Sep} />
                    <Route path="/oct" component={Oct} />
                    <Route path="/nov" component={Nov} />
                    <Route path="/dec" component={Dec} />



                </div>
                </Router>

                </div>
                <ButtonToolbar/>

    </div>
        );
    }
}

function Jan() {
    return <h1>Seattle</h1>;
}

function Feb() {
    // todo
}

function Mar() {
    // todo
}

function Apr() {
    // todo
}

function May() {
        // todo
}

function Jun() {
    // todo
}

function Jul() {
        // todo
}

function Aug() {
    // todo
}

function Sep() {
    // todo
}

function Oct() {
   // todo
}

function Nov() {
    // todo
}

function Dec() {
    // todo
}

export default Produce;
