import { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <header className="container d-flex">
                    <aside className="logo-name">
                        <h2 className="title">@juansev.dev</h2>
                    </aside>
                    <nav className="navbar">
                        <ul>
                            <li><a href="#about-me">about</a></li>
                            <li><a href="#skills">skills</a></li>
                            <li><a href="#projects">projects</a></li>
                            <li><a href="#contact">contact</a></li>
                        </ul>
                    </nav>
                </header>
            </header>
        )
    }
}