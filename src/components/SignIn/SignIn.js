import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';

import {signInWithGoogle} from '../../firebase/firebase.utils'
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = e => {
        e.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = e => {
        const {value,name} = e.target;
        this.setState({[name] : value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>

                <form onSubmit={this.handleSubmit}>
                  <FormInput 
                    name='email' 
                    label='EMAIL'
                    type='email' 
                    value={this.state.email} 
                    required
                    handleChange={this.handleChange} />
                  <FormInput 
                    name='password' 
                    label='PASSWORD'
                    type='password' 
                    value={this.state.password} 
                    required 
                    handleChange={this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;