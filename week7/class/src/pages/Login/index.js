import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginApi} from './reducer/authSlice'

export default function Login() {
	const authState = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	const emailChange = (event) => {
		setEmail(event.target.value)
	}
	
	const passwordChange = (event) => {
		setPassword(event.target.value)
	}
	
	const doSubmit = (event) => {
		event.preventDefault()
		dispatch(loginApi({email, password}))
		setEmail('')
		setPassword('')
	}
	
	return (
		<form name={'loginForm'} onSubmit={doSubmit}>
			<div className={'form-group-collection'}>
				<div className={'form-group'}>
					<label>Email:</label>
					<input type={'email'} name={'email'} onChange={emailChange} value={email}/>
				</div>
				
				<div className={'form-group'}>
					<label>Password:</label>
					<input type={'password'} name={'password'} onChange={passwordChange} value={password}/>
				</div>
				
				<input type={'submit'} value={'login'}/>
				
				<div className={'message'}>
					{authState.isLoginPending &&
						<div>
							<img src={'https://media.tenor.com/n1GNGQYlVJ8AAAAi/kakaotalk-emoticon.gif'} alt='Loading...' width={100}/>
						</div>}
					{authState.isLoginSuccess && <div>Success.</div>}
					{authState.errorMessage && <div>{authState.errorMessage}</div>}
				</div>
			</div>
		</form>
	)
}