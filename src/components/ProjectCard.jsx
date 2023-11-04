import { Component } from "react";

export default class ProjectCard extends Component {
    render () {
		if (this.props.project) {
			return(
			<article className="projects-card">
				<img src={`/projects-img/${this.props.project.cover}`} alt={this.props.project.name} />
				<div className="info">
				<h4>{this.props.project.name}</h4>
				<p>{this.props.project.description}</p>
				<div className="links">
					<a href={`https://github.com/Juan-Severiano/${this.props.project.slug}`} rel="noreferrer" target="_blank"><i className="bi bi-github"></i></a>
					<a href={this.props.project.link} rel="noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>
				</div>
				</div>
			</article>
			)
		}
        
    }
}