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
      <section className="container projects" id="projects">
        <h3>projects</h3>
        <main className="projects-container">
          <ProjectCard project={{...obj}} />
        </main>
      </section>
      )
  }
}
