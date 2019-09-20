import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PulseLoader } from 'react-spinners';
import { createAccount } from '../../actions/accountActions/createAccountActions';

class CreateAccount extends Component {
  state = {
    type: '',
  };

  handleChange = (e) => {
    const t = e.target.id;
    
    const v = e.target.value;
    this.setState({
      [t]: v
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { type } = this.state;
    const { createAccount, history } = this.props;
    const response = await createAccount({ type });
    if (response.type === 'CREATE_ACCOUNT_SUCCESS') {
      history.push('/dashboard');
      toast.success('Account Created', { toastId: 1 });
    }
    if (response.type === 'CREATE_ACCOUNT_FAILURE') {
      toast.error(`${response.error.error}`, { toastid: 1, className: 'toastCss' });
    }
  }

  render() {
    const { account } = this.props;
    return (
      <div className="createBankAccountCoverPage">
        <div className="formModal">
          <h4>Create a bank account</h4>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input onChange={this.handleChange} type="text" placeholder="Savings or Current" id="type" className="formInput" />
            </div>
            <div>
              <button id="submitBtn" className="loginBtn">
                {
                  account.isLoading ?
                    <PulseLoader sizeUnit={"px"} size={10} color={'#ffffff'}
                      loading={account.isLoading} /> :
                    'Create Account'
                }
              </button>
            </div>
            <div className="innerFooter">
              <span className="reset"><Link to="/">LOGOUT</Link></span>
              <span className="create"><Link to="/dashboard">USER ACCOUNT</Link></span>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  account: state.createAccount
});

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (accountObject) => dispatch(createAccount(accountObject))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateAccount));
