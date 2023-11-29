import React from "react";
import Formulario from "./components/Formulario/Formulario";
import AppNavBar from "./components/AppNavBar";
import './index.css'

function App(){
    return(         
        // <Formulario/>
        <div className='App'>
            <AppNavBar/>
            <Formulario/>
        
             <div className='container-botao'>
                <button className= 'botao' type='submit'>Enviar</button>
            </div>
        </div>
    )
}
export default App;