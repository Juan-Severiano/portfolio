import { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <header>
                <section className="bg-black text-white">
                    <div className="container p-2 d-flex align-items-center" >
                        <div className="d-none d-md-block" style={{ fontSize: 10 }}>
                            <i className="bi bi-envelope-fill me-2"></i>
                            juansev.dev@gmail.com
                        </div>
                        <div className="ms-md-auto me-md-0 mx-auto">
                            <a rel="noreferrer" target="_blank" href="https:/instagram.com/_juan.sev_/" className="me-4 text-reset text-decoration-none"><i className="bi bi-instagram"></i></a>
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/francisco-juan-severiano-a939b9241/" className="me-4 text-reset text-decoration-none"><i className="bi bi-linkedin"></i></a>
                            <a rel="noreferrer" target="_blank" href="https://github.com/Juan-Severiano/" className="me-4 text-reset text-decoration-none"><i className="bi bi-github"></i></a>
                            <a rel="noreferrer" target="_blank" href="https://wa.me/+5588988586931" className="me-4 text-reset text-decoration-none"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </section>
                <nav className="navbar navbar-expand-lg text-white">
                    <div className="container align-items-center">
                        <a className="text-white navbar-brand text-reset" href="#home">@juansev.dev</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link text-reset" href="#about-me">about</a></li>
                                <li className="nav-item"><a className="nav-link text-reset" href="#skills">skills</a></li>
                                <li className="nav-item"><a className="nav-link text-reset" href="#projects">projects</a></li>
                                <li className="nav-item"><a className="nav-link text-reset" href="#contact">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </header>
        )
    }
}