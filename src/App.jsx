import './App.css'
import instagram from "./Componentes/img/instagram.svg"
import twitter from "./Componentes/img/twitter.svg"
import behance from "./Componentes/img/behance.svg"
import github from "./Componentes/img/github.svg"
import dream from "./Componentes/img/dream-boy.png"

function App() {

  return (
    <main>
      <section id="infos">

      <h1><span style={{color:"rgb(246, 161, 59)"}}>Olá,</span> bem vindo!</h1>
      <h1>Eu sou o <span style={{color:"rgb(0, 159, 227)"}}>Ds!</span></h1>
      <h2><span style={{color:"rgb(35, 189, 228)"}}>Designer Gráfico</span>, <span style={{color:"rgb(0, 195, 73)"}}>Desenvolvedor</span> e 
      <span style={{color:"rgb(183, 23, 200)"}}> Artista</span> do Rio de Janeiro com <span style={{color:"rgb(246, 161, 59)"}}>5 anos</span> de experiência.</h2>

      <div id="redes-sociais">
        <a href="#sobreMim">
          <button>Saiba Mais!</button> 
        </a>
        <br/>

        <a href="https://www.instagram.com/allann.ds07/" target="_blank">
            <img src={instagram} alt="Instagram-AllannDs"/>
        </a>
        <a href="https://twitter.com/allannds07" target="_blank">
            <img src={twitter} alt="Twitter-AllannDs"/>
        </a>
        <a href="https://www.behance.net/allannds07?log_shim_removal=1" target="_blank">
            <img src={behance} alt="Behance-AllannDs"/>
        </a>
        <a href="https://github.com/AllannDs" target="_blank">
            <img src={github} alt="Github-AllannDs"/>
        </a>


      </div>

      </section>
      

      <section>
      <img id="dream" src={dream}/>
      </section>
    </main>
  )
}

export default App
