import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PulseLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { userSignup } from '../../actions/authActions/signupActions';

class SignupForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = this.state;
    const { userSignup, history } = this.props;

    const response = await userSignup({ firstname, lastname, email, password });
    if (response.type === 'USER_SIGNUP_SUCCESS') {
      localStorage.setItem('token', response.payload.token)
      localStorage.setItem('email', response.payload.email)
      history.push('/dashboard')
      toast.success(`Success! Welcome to Banka ${response.payload.firstname}`, { toastId: 1 });
    }
    if (response.type === 'USER_SIGNUP_FAILURE') {
      toast.error(`${response.error.error}`, { toastId: 1, className: 'toastCss' });
    }
  };

  render() {
    const { auth } = this.props;
    return (
      <div className="formModal">
        <Link to="/">
          <h1>banka</h1>
        </Link>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} id="firstname" required type="text" className="formInput" name="firstname" placeholder="Firstname" />
          </div>
          <div>
            <input onChange={this.handleChange} id="lastname" required type="text" className="formInput" name="lastname" placeholder="Lastname" />
          </div>
          <div>
            <input onChange={this.handleChange} id="email" required type="email" className="formInput" name="email" placeholder="Email" />
          </div>
          <div>
            <input onChange={this.handleChange} id="password" required type="password" className="formInput" name="password" placeholder="Password" />
          </div>
          <div className="loginBtn">
          <button type="submit" id="submitBtn" value="SIGN IN" name="sign-in">
              {
                auth.isLoading ?
                  <PulseLoader sizeUnit={"px"} size={10} color={'#fff'} loading={auth.isLoading} />
                  :
                  'Login'
              }
            </button>
          </div>
          <div className="innerFooter">
            <span className="create"><Link to="/login">Login</Link></span>
          </div>
        </form>
      </div>
    )
  }
};

SignupForm.propTypes = {
  auth: PropTypes.shape({
    signup: PropTypes.func,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  userSignup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.signup
});

const mapDispatchToProps = (dispatch) => ({
  userSignup: (userObject) => dispatch(userSignup(userObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupForm));
