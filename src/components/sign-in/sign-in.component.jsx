import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''})
        } catch (error) {
            console.error(error);

        }
        
    }

    handleChange = even => {
        const {value, name } = even.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='Email' required />
                    
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />
                   
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default SignIn;