import React from 'react';
import ProductTable from "./Classes/ProductTable";
import './App.css';

class App extends React.Component {


    render() {

        return (

            <div className={'wrapper'}>

                <div className={"main"}>
                    
                    <ProductTable/>
                </div>



            </div>

        );
    }
}

export default App;