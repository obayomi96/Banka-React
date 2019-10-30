import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccounts } from '../../actions/accountActions';

class GetAccounts extends Component {
  state = {
    accounts: null,
  };

  async componentDidMount() {
    const response = await getUserAccount();
    this.setState({
      ...this.state,
      accounts: response.payload,
    });
  }

  userAcc = () => {
    if (this.state.accounts === null || this.state.accounts === undefined) {
      return <div>No Account Found </div>
    }
  }

  render() {
    return (
      <div>{this.userAcc()}</div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    account: state.accounts,
  };
};

const mapDispatchToProps = dispatch => ({
  getUserAccount: () => dispatch(getAccounts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetAccounts);
