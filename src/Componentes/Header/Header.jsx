import './Header.css'

function Header() {
    return (
        <header>
            <a href="#ds"><h1>Ds!</h1></a>
        
        <nav>
            <ul>
                <a href="#sobreMim">Sobre Mim</a>
                {/* <a href="#pixel_art">Pixel Art</a>
                <a href="#design">Design</a> */}
                <a href="#contatos">Contato</a>
            </ul>
        </nav>
        </header>
    )
}

export default Header