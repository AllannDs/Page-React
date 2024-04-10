import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Componentes/Header/Header.jsx'
import Sobre  from './Componentes/Sobre/Sobre.jsx'
import  Contato  from './Componentes/Contatos/Contatos.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App />
    <Sobre categoria="sobreMim"/>
    <Contato categoria="contatos"/>
  </React.StrictMode>,
)
