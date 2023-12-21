import { Component } from "react";

export default class Header extends Component {
    render() {
        return (
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
        )
    }
}