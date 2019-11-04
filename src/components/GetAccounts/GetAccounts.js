import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { getAccounts } from '../../actions/accountActions';

class GetAccounts extends Component {
  state = {
    accounts: [],
    email: this.props.user.email
  };

  divStyle = {
    textAlign: 'left',
  }

  componentDidMount = async () => {
    const { getUserAccount } = this.props;
    const response = await getUserAccount(this.state.email);
    this.setState({
      ...this.state,
      accounts: response.payload,
    });
  }

  render = () => {
    const { accounts } = this.state;
    const { loading } = this.props;
    const userAccounts = accounts.map((acc, index) => {
      if (accounts === []) {
        return (
          <div>No Accounts Found</div>
        );
      } else {
        return (
          <div key={index} style={this.divStyle}>
            <h4>Account Number: {acc.accountNumber}</h4>
            <h4>Banlance: {acc.balance}</h4>
            <h4>Account Status: {acc.status}</h4>
            <h4>Account Type: {acc.type}</h4>
          </div>
        )
      }
    })
    return (
      <div>
        { loading ? 
          <PulseLoader  sizeUnit={"px"} size={10} color={'#fff'} />
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
    account: state.accounts,
    loading: state.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  getUserAccount: userEmail => dispatch(getAccounts(userEmail)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetAccounts);
