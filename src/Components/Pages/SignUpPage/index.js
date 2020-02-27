import React from 'react';
import firebase from '../../../firebase';
import { addUser } from './action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function mapDispatchToProps(dispatch) {
    return {
      addUser: user => dispatch(addUser(user))
    }
}

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: '',
          password: '',
          preferredLocations: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('users');
    const users = {
        name: this.state.userName,
        pwd: this.state.password,
        locations: this.state.preferredLocations
    }
    itemsRef.push(users);
    this.props.addUser(users);
    this.setState({
        userName: '',
        password: '',
        preferredLocations: []
    });
    this.props.history.push('/dashboard');
    }

  render() {
    return (
         <div className='app'>
        <header>
          <h1>SIGN UP PAGE</h1>
        </header>
        <div className='container'>
          <section className='add-item'>
            <form onSubmit={this.handleSubmit}>
            <input required type="text" name="userName" placeholder="Name" onChange={this.handleChange} value={this.state.userName} />
            <input required type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
            <input required type="text" name="preferredLocations" placeholder="Locations Preferred" onChange={this.handleChange} value={this.state.preferredLocations} />
            <button type="submit">Sign Up</button>
            </form>
        </section>
        </div>
      </div>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(SignUpPage)
export default withRouter(Form);