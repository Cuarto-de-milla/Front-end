import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import login from '../../graphql/mutations/login';
import '../../sass/components/organisms/FormLogin.scss';

const FormLogin = () => {
	const [form, setForm] = useState({});
	const [loginMutation] = useMutation(login, {
		onCompleted(data) {
			localStorage.setItem('token', data.tokenAuth.token);
			window.location.replace('/');
		},
		onError(error) {
			Swal.fire({
				title: `<h4 style="color:  #ffffff">${error.message}</h4>`,
				background: '#001830',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer:
					'<h4 style="color: #db0a40">Cuartodemilla.com</h4>',
				padding: '5% 10px 20px',
			});
		},
	});

	const handleChange = ({ target }) =>
		setForm({
			...form,
			[target.name]: target.value,
		});

	const handleLogIn = () => {
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
					'<h4 style="color : #ffffff">You need to provide a passwors</h4>',
				background: '#001830',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer:
					'<h4 style="color: #db0a40">Cuartodemilla.com</h4>',
				padding: '5% 10px 20px',
			});
		loginMutation({
			variables: form,
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
				<label
					htmlFor='username'
					className='form__entries-label'
				>
					* username
				</label>
				<input
					className='form__entries-input'
					type='text'
					value={form.username}
					name='username'
					onChange={handleChange}
					placeholder='username'
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
					onChange={handleChange}
					value={form.password}
					name='password'
					placeholder='min 8 char'
				/>
				<button
					className='form__entries-button'
					style={{
						backgroundColor: '#001830',
						color: '#fffeea',
					}}
					onClick={handleLogIn}
				>
					Login
				</button>
				<button
					className='form__entries-button'
					style={{
						backgroundColor: '#fffeea',
						color: '#001830',
					}}
				>
					<Link to='/register'>
						<span
							style={{
								color: '#001830',
							}}
						>
							Crear Cuenta
						</span>
					</Link>
				</button>
			</div>
		</div>
	);
};

export default FormLogin;
