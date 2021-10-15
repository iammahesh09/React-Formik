import React from 'react';
import { Formik } from 'formik';

const FormikRenderProps = () => {

	const initialValues = {
		email: '',
		password: '',
		isMajor: false
	}
	const onSubmit = (values) => {
		alert(JSON.stringify(values, null, 2));
	}

	return (
		<>
			<Formik {...{ initialValues, onSubmit }}>
				{
					({
						getFieldProps,
						handleSubmit,
						errors,
						touched,
						submitCount,
						values
					}) => (
						<>
							<h1 className='text-center'>Formik Render Props</h1>
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label htmlFor="inputEmail" className="form-label">Email address</label>
									<input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" {...getFieldProps('email')} />
									<span className="errorMessage">
										{touched.email && errors.email}
									</span>
								</div>
								<div className="mb-3">
									<label htmlFor="inputPassword" className="form-label">Password</label>
									<input type='password' className="form-control" id="inputPassword" {...getFieldProps('password')} />
									<span className="errorMessage">
										{touched.password && errors.password}
									</span>
								</div>
								<div className="mb-3 form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck1" {...getFieldProps('isMajor')} />
									<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
							<section className="mt-4">
								<p className="">Form Values:</p>
								{submitCount > 0 && (
									<pre>{JSON.stringify(values, null, 2)}</pre>
								)}
							</section>
						</>
					)}
			</Formik>
		</>
	)
}

export default FormikRenderProps;
