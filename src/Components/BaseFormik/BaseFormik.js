import React from 'react'
import { useFormik } from 'formik';

const BaseFormik = () => {

	const _formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			isMajor: false
		},
		onSubmit (values) {

		}
	})

	return (
		<>
			<h1 className='text-center'>Base Formik</h1>
			<form onSubmit={_formik.handleSubmit} noValidate>
				<div className="mb-3">
					<label htmlFor="inputEmail" className="form-label">Email address</label>
					<input type="email" className="form-control" id="inputEmail" name='email' value={_formik.values.email} aria-describedby="emailHelp" onChange={_formik.handleChange} />
				</div>
				<div className="mb-3">
					<label htmlFor="inputPassword" className="form-label">Password</label>
					<input type="password" className="form-control" id="inputPassword" name='password' value={_formik.values.password} onChange={_formik.handleChange} />
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
					<pre>{JSON.stringify(_formik.values, null, 2)}</pre>
				)}
			</section>
		</>
	)
}

export default BaseFormik;
