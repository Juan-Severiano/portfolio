import { Component } from "react";

export default class ProjectCard extends Component {
	render() {
		if (this.props.project) {
			return (
				<figure className="col-12 col-md-6 col-lg-4 col-xl-3">
					<div className="card bg-black text-white">
						<img src={`/projects-img/${this.props.project.cover}`} className="img-fluid img-card-top" alt={this.props.project.name} />
						<div className="card-body">
							<h4 className="card-title fw-bold">{this.props.project.name}</h4>
							<p className="card-text fw-light">{this.props.project.description}</p>
							<div className="d-flex justify-content-between">
								<a className="btn bg-white h-25 me-3" style={{ borderRadius: '100%' }} href={`https://github.com/Juan-Severiano/${this.props.project.slug}`} rel="noreferrer" target="_blank"><i className="bi bi-github"></i></a>
								<a className="btn text-white ms-auto" href={this.props.project.link} rel="noreferrer" target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>
							</div>
						</div>
					</div>
				</figure>
			)
		}

	}
}