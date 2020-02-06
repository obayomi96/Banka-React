import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { getAccounts } from '../../actions/accountActions';

import './GetAccounts.css';

class GetAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      email: "",
    };
  }

  componentDidMount = async () => {
    const { getUserAccount, user } = this.props;
    const response = await getUserAccount(user.email);
    this.setState({
      ...this.state,
      accounts: response.payload,
    });
  }

  render = () => {
    const { accounts } = this.state;
    const { loading } = this.props;
    if ( accounts === []) {
      return (
        <div style={{textAlign: 'center'}}>No account!</div>
      );
    }
    const userAccounts = accounts.map((acc, index) => {
      return (
        <div className="fade-in" key={index} id="userAccount-accountDetails">
          <h4>Account Number: {acc.accountNumber}</h4>
          <h4>Balance: ${acc.balance}</h4>
          <h4>Account Status: {acc.status}</h4>
        </div>
      )
    })
    return (
      <div >
        { loading ? 
          <PulseLoader  sizeUnit={"px"} size={20} color={'#000'} />
          :
          userAccounts
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    accounts: state.accounts,
    loading: state.accounts.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  getUserAccount: userEmail => dispatch(getAccounts(userEmail)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetAccounts);
