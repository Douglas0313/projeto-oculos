import React from "react";
import loja from '../assets/imagens/loja.png';
import atendimento from '../assets/imagens/atendimento.png';
import "../SecaoSobre/estilo.css";




export default function SecaoSobre(){
    return (

        <section className="secao-sobre">

       <div className="sobre">

     <h2>QUEM SOMOS NÓS? </h2>
     <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focadas no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preços baixo.</p>


     </div>



       <div className="card-sobre">

      <div className="card-so"> 
        <img src={loja}/>
        
        </div>

      <div className="card-so">
        <h2>NOSSAS FILIAIS</h2>
        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
      </div>

    

       <div className="card-so">
        <h2>ATEDIMENTO FLEXIVEL</h2>
        <p>Nossa equipe é treinada para te atender</p>
       </div>

       <div className="card-so"><img src={atendimento}/></div>

     </div>


        </section>
    )
}