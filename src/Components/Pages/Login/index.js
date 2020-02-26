import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';


class LoginPage extends React.Component{
    onLoginClick(){
        this.props.history.push('/dashboard');
    }
    render(){
        return(
            <React-Fragment>
                <div>Login Page</div>
                <button onClick={()=>{this.onLoginClick()}}>login</button>
            </React-Fragment>
        );
    }
}
export default withRouter(LoginPage);