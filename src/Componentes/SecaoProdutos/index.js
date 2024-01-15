import React from "react";
import oculos01 from '../assets/imagens/oculos01.png';
import oculos02 from '../assets/imagens/oculos02.png';
import oculos03 from '../assets/imagens/oculos03.png';
import oculos04 from '../assets/imagens/oculos04.png';
import '../SecaoProdutos/estilo.css';



export default function SecaoProdutos(){
    return (
        <section className="secao-produtos">


      <div className="limitar-secao-produtos">
        <h2>NOSSOS PRODUTOS</h2>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculinos, feminino e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

        </div>


      <div className="secao-card">

    <div className="card">

    <h2>Óculos de grau</h2>
    <img src={oculos01}/>
    <p>R$: 500,00</p>

    </div>

    <div className="card">

    <h2>Óculos transition</h2>
    <img src={oculos02}/>
    <p>R$: 750,00</p>

    </div>

    <div className="card">

    <h2>Óculos de sol</h2>
    <img src={oculos03}/>
    <p>R$: 700,00</p>

    </div>

    <div className="card">

    <h2>Óculos de infantil</h2>
    <img src={oculos04}/>
    <p>R$: 500,00</p>


     </div>
    </div>

     
     <div className="lista">

      <h2>Todos os nossos produtos incluem: </h2>
      
    <ul>
     <li>Garantia de 1 ano</li>
     <li>Manutenção preventiva</li>
     <li>Descontos especiais na compra da segunda unidade</li>
     <li>Flexibilidade de pagamento</li>

      </ul>

      </div>

        </section>
    )
} 