import React from 'react';
import firebase from '../../../firebase';
import DisplayName from "../DisplayName";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../Pages/SignUpPage/action'

function mapDispatchToProps(dispatch) {
  return {
    removeUser: () => dispatch(removeUser())
  }
}

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
          userLocation: '',
          trafficUpdate: '',
          items: []
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
    const itemsRef = firebase.database().ref('items');
    const item = {
        post: this.state.trafficUpdate,
        location: this.state.userLocation
    }
    itemsRef.push(item);
    this.setState({
        trafficUpdate: '',
        userLocation: ''
    });
    }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          post: items[item].post,
          location: items[item].location
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  removePost(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  onLogoutClick() {
      this.props.removeUser();
      this.props.history.push('/');
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <DisplayName />
        </div>
        <div>
         <button onClick={()=>{this.onLogoutClick()}}> Logout </button>
        </div>
         <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Traffic Control Update</h1>
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="userLocation" placeholder="What's your location?" onChange={this.handleChange} value={this.state.userLocation} />
                <input type="text" name="trafficUpdate" placeholder="What is the traffic update?" onChange={this.handleChange} value={this.state.trafficUpdate} />
                <button>Add post</button>
              </form>
          </section>
          <section className='display-item'>
          <div className="wrapper">
            <ul>
              {this.state.items.map((item) => {
                return (
                  <li key={item.id}>
                    <h3>{item.location}</h3>
                    <p>Traffic Update: {item.post}</p>
                    <button onClick={() => this.removePost(item.id)}>Remove Item</button>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
        </div>
      </div>
      </React.Fragment>
    );
  }
}
export default withRouter(connect(null, mapDispatchToProps)(Dashboard));