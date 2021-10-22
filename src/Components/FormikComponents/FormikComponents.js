import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, FastField, Field, FieldArray, Form, Formik } from "formik";
import ErrorText from "../ErrorText/ErrorText";

function FormikComponents () {

	const [formValues, setFormValues] = useState(null);

	const validationSchema = Yup.object({
		username: Yup.string().required("Required field"),
		email: Yup.string()
			.email("Invalid email format")
			.required("Required field"),
		password: Yup.string().required("Required field"),
		officeaddress: Yup.string().required("Required field")
	});

	const initialValues = {
		username: "",
		email: "",
		password: "",
		isSocial: {
			facebook: false,
			twitter: false,
			instagram: false,
		},
		social: {
			facebook: "",
			twitter: "",
			instagram: "",
		},
		phoneNumbers: ['', ''],
		accountNumbers: [''],
		homeaddress: '',
		officeaddress: '',
		communicationaddress: '',
		isMajor: false
	};

	const saveDataValues = {
		username: "Mahesh Chejarla",
		email: "iammahesh@gmail.com",
		password: "mahesh",
		isSocial: {
			facebook: true,
			twitter: false,
			instagram: true
		},
		social: {
			facebook: "https://www.facebook.com/",
			twitter: "https://www.twitter.com/",
			instagram: "https://www.instagram.com/"
		},
		phoneNumbers: ['9498327489', '9874387264'],
		accountNumbers: ['232534543645'],
		homeaddress: 'Hyderabad',
		officeaddress: 'Hyderabad',
		communicationaddress: 'Nellore',
		isMajor: true
	};

	const onSubmit = (values) => {
		console.log(values);
		console.log(values.social);
	};

	return (
		<>
			<h1 className="text-center">Formik Components</h1>
			<Formik
				initialValues={formValues || initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
				enableReinitialize
			>
				<Form>
					<div className="mb-3">
						<label htmlFor="inputUsername" className="form-label">
							Username
						</label>
						<Field
							type="text"
							className="form-control"
							id="inputUsername"
							name="username"
							placeholder="Username"
						/>
						<ErrorMessage name="username" component={ErrorText} />
					</div>
					<div className="mb-3">
						<label htmlFor="inputEmail" className="form-label">
							Email address
						</label>
						<Field
							type="email"
							className="form-control"
							id="inputEmail"
							name="email"
							placeholder="Email"
						/>
						<ErrorMessage name="email">
							{(msg) => <div style={{ color: "red" }}>{msg}</div>}
						</ErrorMessage>
					</div>
					<div className="mb-3">
						<label htmlFor="inputPassword" className="form-label">
							Password
						</label>
						<Field
							type="password"
							className="form-control"
							id="inputPassword"
							name="password"
							placeholder="Password"
						/>
						<ErrorMessage
							name="password"
							component="div"
							className="text-danger"
						/>
					</div>
					<div className="mb-3">
						<div className="form-check form-check-inline">
							<Field
								className="form-check-input"
								type="checkbox"
								id="isSocial-fb"
								name="isSocial.facebook"
							/>
							<label className="form-check-label" htmlFor="isSocial-fb">
								Facebook
							</label>
						</div>
						<div className="form-check form-check-inline">
							<Field
								className="form-check-input"
								type="checkbox"
								id="isSocial-twit"
								name="isSocial.twitter"
							/>
							<label className="form-check-label" htmlFor="isSocial-twit">
								Twitter
							</label>
						</div>
						<div className="form-check form-check-inline">
							<Field
								className="form-check-input"
								type="checkbox"
								id="isSocial-insta"
								name="isSocial.instagram"
							/>
							<label className="form-check-label" htmlFor="isSocial-insta">
								Instagram
							</label>
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="inputFacebook" className="form-label">
							Facebook
						</label>
						<Field
							type="text"
							className="form-control"
							id="inputFacebook"
							name="social.facebook"
							placeholder="Facebook URL"
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="inputTwitter" className="form-label">
							Twitter
						</label>
						<Field
							type="text"
							className="form-control"
							id="inputTwitter"
							name="social.twitter"
							placeholder="Twitter URL"
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="inputInstagram" className="form-label">
							Instagram
						</label>
						<Field
							type="text"
							className="form-control"
							id="inputInstagram"
							name="social.instagram"
							placeholder="Instagram URL"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="inputPrimaryPhone" className="form-label">
							Primary Phone Number
						</label>
						<Field
							type="text"
							className="form-control"
							id="inputPrimaryPhone"
							name="phoneNumbers[0]"
							placeholder="Primary Number"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="inputSecondayPhone" className="form-label">
							Secondary Phone Number
						</label>
						<Field
							type="text"
							className="form-control"
							id="inputSecondayPhone"
							name="phoneNumbers[1]"
							placeholder="Seconday Number"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="" className="form-label">
							Account Numbers
						</label>
						<FieldArray name="accountNumbers">
							{props => {
								const { push, remove, form } = props;
								const { values } = form;
								const { accountNumbers } = values;

								return (
									<>
										{accountNumbers.map((account, index) => (
											<div className="row g-3 align-items-center mb-3" key={index} >
												<div className="col-10">
													<Field name={` [${index}]`} className="form-control" />
												</div>
												<div className="col-2">
													<button className="btn btn-sm btn-primary me-2" onClick={() => push('')}>Add</button>
													{index > 0 && <button className="btn btn-sm btn-danger" onClick={() => remove(index)}>Delete</button>}
												</div>
											</div>
										))}
									</>
								)
							}}
						</FieldArray>
					</div>
					<div className="mb-3">
						<label htmlFor="homeaddress" className="form-label">
							Home Address
						</label>
						<Field
							as="textarea"
							className="form-control"
							id="homeaddress"
							name="homeaddress"
							placeholder="Home Address"
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="officeaddress" className="form-label">
							Office Address
						</label>
						<Field name="officeaddress">
							{
								({ field, form, meta }) => {
									console.log('Field Render');
									return (
										<>
											<textarea id="officeaddress" className={`form-control ${meta.error && 'is-invalid'}`} {...field} ></textarea>
											{meta.touched && meta.error ? <div className='invalid-feedback'>{meta.error}</div> : null}
										</>
									)
								}
							}
						</Field>
					</div>
					<div className="mb-3">
						<label htmlFor="communicationaddress" className="form-label">
							Communication Address
						</label>
						<FastField name="communicationaddress">
							{
								({ field, form, meta }) => {
									console.log('FastField Render');
									return (
										<>
											<textarea id="communicationaddress" className={`form-control ${meta.error && 'is-invalid'}`} {...field} ></textarea>
											{meta.touched && meta.error ? <div className='invalid-feedback'>{meta.error}</div> : null}
										</>
									)
								}
							}
						</FastField>
					</div>

					<div className="mb-3 form-check">
						<Field
							type="checkbox"
							className="form-check-input"
							name="isMajor"
							id="exampleCheck1"
						/>
						<label className="form-check-label" htmlFor="exampleCheck1">
							Check me out
						</label>
					</div>
					<button type="submit" className="btn btn-primary me-4">
						Submit
					</button>
					<button type="button" className="btn btn-info" onClick={() => setFormValues(saveDataValues)}>
						Load Save Data
					</button>
				</Form>
			</Formik>
		</>
	);
}

export default FormikComponents;
