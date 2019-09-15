import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PulseLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/authActions/loginActions';

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
    const { userLogin, history } = this.props;
    const response = await userLogin({ email, password });
    if (response.type === 'USER_LOGIN_FAILURE') {
      toast.error(`${response.error.error}`, { toastId: 1, className: 'toastCss' });
    }
    if (response.type === 'USER_LOGIN_SUCCESS') {
      localStorage.setItem('token', response.payload.token)
      localStorage.setItem('email', response.payload.email)
      history.push('/dashboard')
      toast.success(`Login Success! Welcome ${response.payload.firstname}`, { toastId: 1 });
    }
  }
  render() {
    const { auth } = this.props;
    return (
      <div className="formModal">
        <Link to="/">
          <h1>banka</h1>
        </Link>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} id="email" required type="email" className="formInput" placeholder="Enter your email" />
          </div>
          <div>
            <input onChange={this.handleChange} id="password" required type="password" className="formInput" placeholder="Enter your password" />
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
            <span className="create"><Link to="/signup">CREATE AN ACCOUNT</Link></span>
          </div>
        </form>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  auth: state.login
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (userObject) => dispatch(userLogin(userObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
