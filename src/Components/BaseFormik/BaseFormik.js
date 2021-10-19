import React from 'react'
import { useFormik } from 'formik';

const BaseFormik = () => {

	const validate = values => {
		let errors = {}

		if (!values.password) {
			errors.password = 'Required';
		}

		if (!values.email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email format'
		}

		return errors;

	}


	const _formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			isMajor: false
		},
		onSubmit (values) {

		},
		validate
	})

	return (
		<>
			<h1 className='text-center'>Base Formik</h1>
			<form onSubmit={_formik.handleSubmit} noValidate>
				<div className="mb-3">
					<label htmlFor="inputEmail" className="form-label">Email address</label>
					<input type="email" className={`form-control ${_formik.errors.email && 'is-invalid'} `} id="inputEmail" name='email' value={_formik.values.email} aria-describedby="emailHelp" onChange={_formik.handleChange} />
					{_formik.errors.email && <div id="emailHelp" class="invalid-feedback">{_formik.errors.email}</div>}
				</div>
				<div className="mb-3">
					<label htmlFor="inputPassword" className="form-label">Password</label>
					<input type="password" className={`form-control ${_formik.errors.password && 'is-invalid'}`} id="inputPassword" name='password' value={_formik.values.password} onChange={_formik.handleChange} />
					{_formik.errors.password && <div id="emailHelp" class="invalid-feedback">{_formik.errors.password}</div>}
				</div>
				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" name="isMajor" id="exampleCheck1" checked={_formik.values.isMajor} onChange={_formik.handleChange} />
					<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			<section className="mt-4">
				<p className="">Form Values:</p>
				{_formik.submitCount > 0 && (
					<pre>{JSON.stringify(_formik.values, null, 2)} {JSON.stringify(_formik.errors, null, 2)}</pre>
				)}
			</section>
		</>
	)
}

export default BaseFormik;
