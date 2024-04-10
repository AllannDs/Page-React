import './Sobre.css'
import exposed from "../img/exposed.png"
import accept from "../img/accept.svg"
import cancel from "../img/cancel.svg"

export const Sobre = ({categoria}) => {
    return (
        <div id={categoria}>
            <div id="esquerdo">
                <h1 id="sobre">Sobre <span style={{color: "rgb(0, 159, 227)"}}>mim!</span></h1>
                <img src={exposed} alt=""/>
                <h3 id="allann" style={{color: "rgb(0, 159, 227)"}}>Allann "Ds" Rocha</h3>
                <h3 id="sonhador"style={{color: "rgb(246, 161, 59)"}}>"O Lendário Sonhador"</h3>
                <h3 id="signo">Canceriano - <span style={{color: "rgb(0, 195, 73)"}}>Brasileiro</span> - 26 anos</h3>
            </div>

            <div id="direito">
                <div id="fullinfo">
                    <div id="info">
                        <h1 style={{color: "rgb(183, 23, 200)"}}>Informações</h1>
                        <h3>Cor favorita: <span style={{color: "rgb(0, 159, 227)"}}>Azul</span></h3>
                        <h3>Sabor favorito: <span style={{color: "rgb(0, 195, 73)"}}>Menta</span></h3>
                        <h3>Estação: <span style={{color: "rgb(246, 161, 59)"}}>Verão</span></h3>
                        <h3>Aniversário: <span style={{color: "rgb(0, 159, 227)"}}>20/07</span></h3>
                    </div>

                    <div id="conh">
                        <h1 style={{color: "rgb(0, 159, 227)"}}>Conhecimentos</h1>
                        <h3>Photoshop - <span style={{color: "rgb(246, 161, 59)"}}>Illustrator</span></h3>
                        <h3><span style={{color: "rgb(183, 23, 200)"}}>Indesign</span> - Javascript</h3>
                        <h3>HTML - <span style={{color: "rgb(0, 195, 73)"}}>CSS</span></h3>
                        <h3><span style={{color: "rgb(0, 159, 227)"}}>UI</span> - UX</h3>
                    </div>
                </div>
                

                <br />

                <div id="like">
                    <img src={accept} alt="like"/>
                    <h3>Chocolate | Anime | Cozinhar | Jogos | Praia <br/>
                    Livros | História | Correr | Natação</h3>
                </div>
                <div id="notlike">
                    <h3>
                        Friagem | Banco | Filas | Confusão | Altura <br/>
                        Fígado | Inseto | Bregafunk | Whisky
                    </h3>
                    <img src={cancel} alt="don't like"/>
                </div>

                <br/>
                 <h2>"A felicidade pode ser encontrada mesmo nas horas <br/> mais difícies, se você lembrar de acender a <span style={{color: "rgb(246, 161, 59)"}}>luz</span>."</h2> <br/>
                 
                <div id="descricao">
                <h3>Olá, me chamo Allann <span style={{color: "rgb(0, 159, 227)"}}>D</span>os <span style={{color: "rgb(0, 159, 227)"}}>S</span>antos Rocha, mas <br/>você pode me chamar de só de "<span style={{color: "rgb(0, 159, 227)"}}>Ds</span>". Um <br/> Designer Gráfico que vive na cidade do Rio <br/>de Janeiro, com experiência em Design 
                    de <br/>Embalagens, Editoração, Design Digital e artes <br/> em geral, além de Desenvolvimento Web.
                    <br/>Tenho paixão por usar cores bem saturadas e <br/>
                    que gerem contrastes altos entre si.
                </h3>
            </div>
            </div>

        </div>
    )
}

export default Sobre