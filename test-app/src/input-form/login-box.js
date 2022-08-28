import React from 'react';
import Username from './username';
import Password from './password';
import SubmitBtn from './button';


export default class LoginForm extends React.Component {
    render() {
        return (
            <div className='login-box'>
                <h3 className='log-in'>SignOn</h3>
                <br/>
                <Username/>
                <br/>
                <Password/> 
                <br/>
                <SubmitBtn/>      
            </div>

        )
    }
}