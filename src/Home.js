import React from 'react';
import AppRouter from './AppRouter';
import logo from './logo.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                {/*<div className="App-router">*/}
                {/*    <AppRouter/>*/}
                {/*</div>*/}
                <header className="App-header">
                    <h1>Eat Seasonally</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Eat locally and in season to reduce your carbon footprint!
                        Eating locally reduces the carbon emissions of travel while eating in
                        season reduces the use of pesticides and is usually less expensive!</h2>
                </header>
            </div>
        );
    }

}


export default Home;


