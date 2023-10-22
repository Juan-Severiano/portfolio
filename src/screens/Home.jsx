import { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <section className="container home" id="home">
                <aside className="img-card">
                  <img src="/img-code.jpg" alt="Imagem de um computador aberto" />
                </aside>
                <aside className="home-text-description">
                  <p>Hello there 🖖, eu sou</p>
                  <h2>Juan Severiano</h2>
                  <p className="typewriter">I build accessible, inclusive products and digital experiences for the web.</p>
                </aside>
            </section>
        )
    }
}