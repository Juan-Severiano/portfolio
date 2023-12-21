import { Component } from "react";

export default class Skills extends Component {
    state = {
        text: 'clique sobre uma skill'
    }

    changeDescription = (description) => {
        this.setState({ text: description })
    }

    render() {
        return (
            <section className="container py-5 text-white" id="skills">
                <div className="row py-5">
                    <aside className="col-12 col-lg-6">
                        <h3 className="mb-2">skills</h3>
                        <div className="row g-2">
                            <div className="col-6 col-md-4 col-lg-3">
                                <img className="img-fluid" onClick={() => this.changeDescription('Conhecimento avançado na criação de componentes interativos e reutilizáveis usando React. Proficiência em React Hooks para gerenciar estados e efeitos de forma eficiente, proporcionando uma experiência de usuário dinâmica e responsiva. Experiência sólida no uso do React Router para facilitar a navegação entre páginas em aplicações de página única (SPAs).')}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <img className="img-fluid" onClick={() => this.changeDescription('Experiência abrangente na utilização de HTML5 para estruturar conteúdo web de forma semântica e acessível. Profundo entendimento das tags e atributos mais recentes do HTML5 para criar interfaces modernas e amigáveis para dispositivos móveis e desktop.')}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <img className="img-fluid" onClick={() => this.changeDescription('Habilidade avançada em estilização de interfaces usando CSS3, incluindo a aplicação de transições e animações para criar experiências interativas. Especialização em CSS modules para encapsular estilos de forma modular, garantindo a consistência e facilitando a manutenção em projetos complexos.')}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">

                                <img className="img-fluid" onClick={() => this.changeDescription('Domínio em JavaScript para manipulação eficaz do DOM, interações de usuário e validação de dados em formulários. Experiência em requisições de API assíncronas usando fetch ou outras técnicas modernas, proporcionando uma integração suave com serviços web e atualizações em tempo real.')}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">

                                <img className="img-fluid" onClick={() => this.changeDescription('Profundo conhecimento em Git para controle de versão colaborativo. Habilidade em trabalhar com branches, realizar merges, resolver conflitos e utilizar comandos avançados como rebase. Experiência em integrar repositórios Git com plataformas de hospedagem, como GitHub e GitLab, para colaboração eficiente.')}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">

                                <img className="img-fluid" onClick={() => this.changeDescription('Especialização em Sass para criação de estilos reutilizáveis e organizados. Proficiência em variáveis, mixins e seletores aninhados para simplificar a escrita do CSS e melhorar a manutenibilidade do código. Experiência em importação e modularização de estilos para facilitar a escalabilidade em projetos grandes.')}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">

                                <img className="img-fluid" onClick={() => this.changeDescription('Experiência sólida no uso do sistema operacional Ubuntu para ambientes de desenvolvimento web. Proficiência em linha de comando para execução eficiente de tarefas, instalação de pacotes e gerenciamento de arquivos. Conhecimento avançado na configuração de ambientes de desenvolvimento, incluindo servidores web locais e bancos de dados, proporcionando um fluxo de trabalho suave e produtivo. Familiaridade com ferramentas de automação e scripts para simplificar processos repetitivos.')}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg" />
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">

                                <img className="img-fluid" onClick={() => this.changeDescription('Especialização em programação de microcontroladores utilizando a plataforma Arduino. Profundo entendimento da linguagem de programação do Arduino e sua aplicação em projetos eletrônicos interativos. Experiência em desenvolver desde projetos simples, como sensores de temperatura, até dispositivos mais complexos, como robôs e sistemas de automação residencial. Habilidade em integrar uma variedade de sensores, atuadores e módulos para criar soluções inovadoras e funcionais.')}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
                            </div>

                        </div>
                    </aside>
                    <aside className="col-12 col-lg-6 text-center text-lg-start d-flex justify-content-center">
                        <p className="w-75">{this.state.text}</p>
                    </aside>
                </div>
            </section>
        )
    }
}
