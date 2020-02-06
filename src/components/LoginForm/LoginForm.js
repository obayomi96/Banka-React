import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signIn, history } = this.props;

    signIn({
      email,
      password,
    }, history);
  }
  render() {

    const {
      loading,
    } = this.props;

    return (
      <div className="formModal">
        <Link to="/">
          <h1>Login to Banka</h1>
        </Link>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} id="email" required type="email" className="formInput" placeholder="Enter your email" />
          </div>
          <div>
            <input onChange={this.handleChange} id="password" required type="password" className="formInput" placeholder="Enter your password" />
          </div>
          <div className="loginBtn">
            <button
              type="submit"
              id="submitBtn"
              value="Sign in"
              name="sign-in">
              {
                loading ?
                  <PulseLoader sizeUnit={"px"} size={10} color={'#fff'} />
                  :
                  'Login'
              }
            </button>
          </div>
          <div className="innerFooter">
            <span className="create"><Link to="/signup">CREATE AN ACCOUNT</Link></span>
          </div>
        </form>
      </div>
    )
  }
};

LoginForm.propTypes = {
  signIn: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (userObject, history) => dispatch(login(userObject, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
