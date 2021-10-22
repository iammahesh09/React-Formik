import React from 'react'
import { Link } from 'react-router-dom';

function Navigation () {
	return (
		<>
			<header className="navbar navbar-expand-md navbar-dark bg-primary">
				<div className="container">
					<Link className="navbar-brand" to="/">React Formik</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/base-formik">Formik</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/base-formik-refactored">FormikRefactored</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/formik-render-props">RenderProps</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/formik-components">Formik Components</Link>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</>
	)
}

export default Navigation;
