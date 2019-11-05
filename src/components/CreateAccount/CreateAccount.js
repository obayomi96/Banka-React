import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createAccount } from '../../actions/accountActions';

class CreateAccount extends Component {
  state = {
    type: "savings",
  };

  handleChange = (e) => {
    const t = e.target.id;
    const v = e.target.value;
    this.setState({
      [t]: v
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { type } = this.state;
    const { create, history } = this.props;
    create({ type });
    history.push('/dashboard');
  }

  render () {
    return (
      <div className="createBankAccountCoverPage">
        <div className="formModal">
          <h4>Create a bank account</h4>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input onChange={this.handleChange} type="text" placeholder="savings or current" id="type" className="formInput" />
            </div>
            <div>
              <button id="submitBtn" className="loginBtn">
                create Account
              </button>
            </div>
            <div className="innerFooter">
              <span className="create"><Link to="/dashboard">USER ACCOUNT</Link></span>
            </div>
          </form>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  loading: state.accounts.loading,
});

const mapDispatchToProps = dispatch => ({
  create: data => dispatch(createAccount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
