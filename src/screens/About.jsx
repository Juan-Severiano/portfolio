import { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section className="container about" id="about-me">
        <div className="row">
          <aside className="about-text col-12 col-lg-8">
            <h3>about me</h3>
            <p>Olá! 👋 Sou um apaixonado desenvolvedor web frontend, especializado em criar experiências digitais excepcionais utilizando tecnologias modernas. Com um profundo conhecimento em React.js, trago ideias criativas à vida, transformando conceitos em interfaces interativas e responsivas.</p>
            <p>Ao longo da minha jornada, adquiri habilidades sólidas em Git, garantindo colaboração eficaz em equipes de           desenvolvimento e controle de versão eficiente para projetos. Além disso, domino o Node.js, explorando seu potencial para           construir aplicações rápidas e escaláveis.</p>
            <p>Minha jornada no mundo do desenvolvimento não se limita apenas ao frontend. Tive a oportunidade de mergulhar no          backend com Python e Django, onde aprendi a criar robustas APIs e aplicativos web dinâmicos.</p>
            <p>Minha paixão pela tecnologia não se limita apenas ao código. Sou um entusiasta da comunidade de código aberto e estou          constantemente atualizado com as últimas tendências e melhores práticas do setor. Acredito que o aprendizado contínuo é         fundamental para se manter na vanguarda da tecnologia.</p>
            <p>Além do desenvolvimento de software, sou um colaborador entusiasta e um solucionador de problemas por natureza. Adoro          enfrentar desafios complexos e encontrar soluções inovadoras para problemas únicos.</p>
            <p>Estou sempre em busca de novas oportunidades para colaborar, aprender e criar impacto. Seja construindo uma nova           aplicação, contribuindo para projetos de código aberto ou explorando novas tecnologias, estou pronto para enfrentar           qualquer desafio que apareça no meu caminho.</p>
            <p>Vamos criar algo incrível juntos! 🚀</p>
          </aside>
          <aside className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
            <img src="/me.png" className="img-fluid" alt="Uma foto do Francisco Juan" />
          </aside>
        </div>
      </section>
    )
  }
}