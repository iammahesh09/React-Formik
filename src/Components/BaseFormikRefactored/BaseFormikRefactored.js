import React from 'react'
import { useFormik } from 'formik'

const BaseFormikRefactored = () => {
	const {
		values: { email, password, isMajor },
		handleSubmit,
		getFieldProps,
		submitCount

	} = useFormik({
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
			<h1 className='text-center'>Base Formik Refactored</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="inputEmail" className="form-label">Email address</label>
					<input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" {...getFieldProps('email')} />
				</div>
				<div className="mb-3">
					<label htmlFor="inputPassword" className="form-label">Password</label>
					<input type='password' className="form-control" id="inputPassword" {...getFieldProps('password')} />
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
					<pre>{JSON.stringify({ email, password, isMajor }, null, 2)}</pre>
				)}
			</section>
		</>
	)
}

export default BaseFormikRefactored;
