import { useState } from 'react'
import './Contatos.css'

export const Contato =({categoria}) => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDeafult();

        try {
            alert("Mensagem enviada com sucesso");

            setNome("");
            setEmail("");
            setMensagem("");
        } catch (error) {
            console.error('Erro ao enviar o formulário', error)
        }
    };

    return (
        <div id={categoria}>
            <div id="letreiro">
                <h2>Entre em contato agora!</h2>
                <p>Preencha seus dados e me envie uma mensagem. Ficarei extremamente feliz em ajudar em seus projetos!!</p>
                
            </div>
            <div >
                <form onSubmit={{handleSubmit}}>
                    <div>
                        <label htmlFor="nome">Nome</label> <br />
                        <input type="text" 
                        id="nome"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        />
                    </div> <br />
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" 
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='exemplo@ig.com'
                        />
                    </div><br />
                    <div>
                        <label htmlFor="mensagem">Mensagem</label><br />
                        <textarea 
                        id="mensagem"
                        name="mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit">Enviar</button>

                </form>
            </div>

        </div>
    )

}

export default Contato