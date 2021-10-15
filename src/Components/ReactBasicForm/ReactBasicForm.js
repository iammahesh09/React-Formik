import React, { useState } from 'react'

export const ReactBasicForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [checked, setChecked] = useState(false)
	const [show, setShow] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const showPassword = (e) => {
		e.preventDefault();
		setShow(!show)
	}

	const formSubmitted = (e) => {
		e.preventDefault();
		console.log([email, password, checked]);
	}

	return (
		<>
			<h1 className='text-center'>React Basic Form</h1>
			<form onSubmit={formSubmitted}>
				<div className="mb-3">
					<label htmlFor="inputEmail" className="form-label">Email address</label>
					<input type="email" className="form-control" id="inputEmail" name='email' value={email} aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
					{submitted && email && <div id="emailHelp" className="form-text">Please enter valid email.</div>}
				</div>
				<div className="mb-3">
					<label htmlFor="inputPassword" className="form-label">Password</label>
					<div className="row">
						<div className='col-11'>
							<input type={show ? 'text' : 'password'} className="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
						</div>
						<div className='col-1'>
							<button className='btn btn-md btn-info' onClick={showPassword}>Show</button>
						</div>
					</div>
				</div>
				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" checked={checked} onChange={(e) => setChecked(!checked)} />
					<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</>
	)
}
