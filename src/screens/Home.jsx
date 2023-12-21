import { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="banner container-fluid d-block d-lg-none">

        </div>
        <section className="container home text-white align-items-start align-items-lg-center d-flex flex-wrap" id="home">
          <div className="row row-cols-2">
            <aside className="col-12 col-lg-7 pt-lg-5">
              <img src="/img-code.jpg" className="img-fluid d-none d-lg-block rounded-3" alt="Imagem de um computador aberto" />
            </aside>
            <aside className="col-12 col-lg-5 p-lg-5 pt-3">
              <p>Hello there 🖖, eu sou</p>
              <h2 className="display-4">Juan Severiano</h2>
              <p className="typewriter">I build accessible, inclusive products and digital experiences for the web.</p>
            </aside>
          </div>
        </section>
      </>
    )
  }
}