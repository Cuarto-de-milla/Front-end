import React, { useState } from 'react';
import '../../sass/components/organisms/FormRegister.scss';
import Swal from 'sweetalert2';
import { Redirect, Link } from 'react-router-dom';

const FormRegister = () => {
	const [form, setForm] = useState({});

	const handleRegister = () => {
		if (!form.email)
			return Swal.fire({
				title:
					'<h4 style="color : #ffffff">You need to provide an email</h4>',
				background: '#001830',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer:
					'<h4 style="color: #db0a40">Cuartodemilla.com</h4>',
				padding: '5% 10px 20px',
			});

		if (!form.username)
			return Swal.fire({
				title:
					'<h4 style="color : #ffffff">You need to provide an username</h4>',
				background: '#001830',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer:
					'<h4 style="color: #db0a40">Cuartodemilla.com</h4>',
				padding: '5% 10px 20px',
			});

		if (!form.password)
			return Swal.fire({
				title:
					'<h4 style="color : #ffffff">You need to provide an password</h4>',
				background: '#001830',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer:
					'<h4 style="color: #db0a40">Cuartodemilla.com</h4>',
				padding: '5% 10px 20px',
			});

		return Swal.fire({
			title: '<h4 style="color : #ffffff">User Registed</h4>',
			background: '#001830',
			timer: 20000,
			timerProgressBar: true,
			width: '320px',
			footer:
				'<h4 style="color: #db0a40">Cuartodemilla.com</h4>',
			padding: '5% 10px 20px',
		});
	};

	const handleChange = ({ target }) => {
		setForm({
			...form,
			[target.name]: target.value,
		});
	};


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
					value={form.email}
					onChange={handleChange}
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
					onChange={handleChange}
					value={form.username}
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
					onChange={handleChange}
					value={form.password}
					placeholder='min 8 char'
				/>
				<button
					className='form__entries-button'
					style={{
						backgroundColor: '#001830',
						color: '#fffeea',
					}}
					onClick={handleRegister}
				>
					<Link to='/login'>¡Registrarme!</Link>;
				</button>
			</div>
		</div>
	);
};

export default FormRegister;
