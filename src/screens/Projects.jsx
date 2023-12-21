import { Component } from "react";
import ProjectCard from "../components/ProjectCard";

const obj = {
	name: 'Rick and Morty',
	description: 'Lorem ipsum do ammet',
	cover: 'rick-and-morty.png',
	slug: 'rick-and-morty-react',
	link: 'https://rickandmortyj.vercel.app'
}

export default class Projects extends Component {
  render() {
    return (
      <section className="container text-white" id="projects">
        <h3>projects</h3>
        <main className="container">
          <div className="row gx-3">
            <ProjectCard project={{...obj}} />
            <ProjectCard project={{...obj}} />
            <ProjectCard project={{...obj}} />
            <ProjectCard project={{...obj}} />
            <ProjectCard project={{...obj}} />
          </div>
        </main>
      </section>
      )
  }
}
