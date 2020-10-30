import React from 'react';
import '../../sass/components/organisms/FormRegister.scss';

const FormRegister = () => {
	return (
		<div className='form'>
			<img
				src='https://firebasestorage.googleapis.com/v0/b/gasprice-85c9b.appspot.com/o/Foundations%2FLogos%2FLogo2.png?alt=media&token=b4a29437-6dbe-40da-8a32-0f8fb027a067'
				alt='Logo de gas.price'
				className='form__image'
			/>
			<div className='form__entries'>
				<label htmlFor='email' className='form__entries-label'>
					* email
				</label>
				<input
					className='form__entries-input'
					type='email'
					name='email'
					placeholder='cuartodemilla@email.com'
				/>
				<label
					htmlFor='username'
					className='form__entries-label'
				>
					* username
				</label>
				<input
					className='form__entries-input'
					type='username'
					name='username'
					placeholder='cuartodemilla'
				/>
				<label
					htmlFor='password'
					className='form__entries-label'
				>
					* password
				</label>
				<input
					className='form__entries-input'
					type='password'
					name='password'
					placeholder='min 8 char'
				/>
				<button
					className='form__entries-button'
					style={{
						backgroundColor: '#001830',
						color: '#fffeea',
					}}
				>
					¡Registrarme!
				</button>
			</div>
		</div>
	);
};

export default FormRegister;
<h1>Register</h1>;
