import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { getAccounts } from '../../actions/accountActions';

class GetAccounts extends Component {
  state = {
    accounts: [],
    email: this.props.user.email,
  };

  divStyle = {
    textAlign: 'left',
    background: '#ddd',
    display: 'grid',
    lineHeight: '2.5',
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: '15px 14px 42px -22px rgba(0,0,0,0.75)',
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
    if (accounts === undefined || accounts === null || accounts === []) {
      return (
        <div>You have no bank account, kindly create one</div>
      );
    }
    const userAccounts = accounts.map((acc, index) => {
      return (
        <div key={index} style={this.divStyle}>
          <h4>Account Number: {acc.accountNumber}</h4>
          <h4>Banlance: ${acc.balance}</h4>
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
