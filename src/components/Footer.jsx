export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="container-fluid bg-black pt-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6" id="contact">
                        <h3>contact me</h3>
                        <p className="fw-light">Este é o portfólio online de Francisco Juan, um desenvolvedor apaixonado por criar experiências digitais incríveis. Explore meu trabalho, confira meus projetos e entre em contato para colaborações ou oportunidades profissionais. Obrigado por visitar!</p>
                    </div>
                    <div className="col-12 col-md-2">
                        <h6>Links importantes</h6>
                        <ul className="list-unstyled fw-light" style={{ fontSize: 12 }}>
                            <li><a href="#home" className="text-reset text-decoration-none">Home</a></li>
                            <li><a href="#about-me" className="text-reset text-decoration-none">About</a></li>
                            <li><a href="#skills" className="text-reset text-decoration-none">Skills</a></li>
                            <li><a href="#projects" className="text-reset text-decoration-none">Projects</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <h6>Informações de contato</h6>
                        <ul className="list-unstyled fw-light" style={{ fontSize: 12 }}>
                            <li><a href="https://wa.me/+5588988586931" className="text-reset text-decoration-none"><i className="bi bi-telephone-fill me-2"></i> +55 88 98858-6931</a></li>
                            <li><a href="#" className="text-reset text-decoration-none"><i className="bi bi-envelope-fill me-2"></i> juansev.dev@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-1">
                        <h6 className="d-none d-lg-block">Mídias Sociais</h6>
                        <div className="ms-md-auto me-md-0 mx-auto d-flex flex-lg-column justify-content-center align-items-center">
                            <a rel="noreferrer" target="_blank" href="https:/instagram.com/_juan.sev_/" className="me-4 text-reset text-decoration-none"><i className="bi bi-instagram"></i></a>
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/francisco-juan-severiano-a939b9241/" className="me-4 text-reset text-decoration-none"><i className="bi bi-linkedin"></i></a>
                            <a rel="noreferrer" target="_blank" href="https://github.com/Juan-Severiano/" className="me-4 text-reset text-decoration-none"><i className="bi bi-github"></i></a>
                            <a rel="noreferrer" target="_blank" href="https://wa.me/+5588988586931" className="me-4 text-reset text-decoration-none"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className="col-12 p-3">
                        <p className="text-center fw-light" style={{ fontSize: 12 }}>{year} Todos os direitos reservados &copy; Francisco Juan <span className="font-monospace">>_</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}