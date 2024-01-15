import React from 'react';
import Logo from '../assets/imagens/logo.png';
import "../Topo/style.css";


export default function Topo(){
    return (
    <nav className='limitar-secao'>

    
        
    <div>
   <img src={Logo}/>

   </div>

    <div>
   <a href="#">PRODUTOS</a>
   <a href="#">SOBRE</a>
   <a href="#">CONTATOS</a>
    </div>


    </nav>
    )
}