import React from 'react';
import './SignsPage.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
const SignsPage = () => (
    <div className='signs-page'>
         <SignIn/>
         <SignUp/>
    </div>
)

export default SignsPage;