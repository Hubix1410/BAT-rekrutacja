import React, { useState } from 'react';
import './MainForm.scss';
import { useForm } from 'react-hook-form';

function MainForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [isSent, setIsSent] = useState(false);

	const onSubmit = (data) => {
		setIsSent(true);
	};

	console.log(errors);

	return (
		<main className="mainForm" onSubmit={handleSubmit(onSubmit)}>
			<div className="mainForm__right">
				<h1 className="mainForm__title">Write us</h1>

				<p className="mainForm__subtitle">
					Our experts are at your disposal via chat, email or
					telephone Monday to Saturday from 8 a.m. to 10 p.m.
				</p>

				<form className="mainForm__form">
					<label className="mainForm__label">Name</label>

					<input
						{...register('name', { required: true, maxLength: 30 })}
						placeholder="Type your name"
						className="mainForm__inputText"
					/>
					{errors.name && errors.name.type === 'required' && (
						<span className="mainForm__errorMessage">
							This is required!
						</span>
					)}
					{errors.name && errors.name.type === 'maxLength' && (
						<span className="mainForm__errorMessage">
							Max length exceeded
						</span>
					)}

					<label className="mainForm__label">E-mail</label>

					<input
						{...register('mail', { required: true, maxLength: 30 })}
						placeholder="Type your e-mail"
						className="mainForm__inputText"
					/>
					{errors.mail && errors.mail.type === 'required' && (
						<span className="mainForm__errorMessage">
							This is required!
						</span>
					)}
					{errors.mail && errors.mail.type === 'maxLength' && (
						<span className="mainForm__errorMessage">
							Max length exceeded
						</span>
					)}

					<label className="mainForm__label">Phone (optional)</label>

					<input
						{...register('phone', {
							required: false,
							maxLength: 9,
							minLength: 9,
						})}
						type="number"
						placeholder="Type your phone number"
						className="mainForm__inputText"
					/>

					{errors.phone && errors.phone.type === 'maxLength' && (
						<span className="mainForm__errorMessage">
							Phone number is too long!
						</span>
					)}
					{errors.phone && errors.phone.type === 'minLength' && (
						<span className="mainForm__errorMessage">
							Phone number is too short!
						</span>
					)}

					<label className="mainForm__label">Message</label>

					<textarea
						{...register('message', {
							required: true,
							maxLength: 800,
						})}
						placeholder="Type your message"
						className="mainForm__inputTextArea"
						type="textarea"
					/>
					<p className="mainForm__maxWords">max 800 words</p>

					{errors.message && errors.message.type === 'required' && (
						<span className="mainForm__errorMessage">
							This is required!
						</span>
					)}
					{errors.message && errors.message.type === 'maxLength' && (
						<span className="mainForm__errorMessage">
							Max length exceeded!
						</span>
					)}

					<input
						type="submit"
						className="mainForm__submit"
						value="send message"
					/>
				</form>

				{isSent && (
					<div className="mainForm__sent">
						<img src="/assets/icon-success.svg" />
						<p>Your message has been sent!</p>
					</div>
				)}

				{!errors && (
					<div className="mainForm__error">
						<img src="/assets/icon-cross.svg" />
						<p>Form has errors</p>
					</div>
				)}
			</div>
			<div className="mainForm__left">
				<img
					className="mainForm__image"
					src="/assets/mainbgc-asset.jpg"
				/>
			</div>
		</main>
	);
}

export default MainForm;
