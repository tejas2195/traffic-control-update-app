import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';


class HomePage extends React.Component{
    
    onLoginClick(){
        this.props.history.push('/login');
    }

    onSignUpClick(){
        this.props.history.push('/signUpPage');
    }

    render(){
        return(
            <React.Fragment>
                <div>Home Page</div>
                <button onClick={()=>{this.onLoginClick()}}> Login</button>
                <button onClick={()=>{this.onSignUpClick()}}> SignUp</button>
            </React.Fragment>
        );
    }
}
export default withRouter(HomePage);
// export default HomePage;