import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccounts } from '../../actions/accountActions/getAccountActions';
import AccountDetails from '../AccountDetails';

class GetAccounts extends Component {
  state = {
    accounts: [],
  };

  async componentDidMount() {
    const { getAccounts } = this.props;
    getAccounts();
    const response = await getAccounts();
    this.setState({
      ...this.state,
      accounts: response.payload,
    });
  }

  render() {
    return (
      <div>
        {
          this.state.accounts.map((account) => {
            return (
              <AccountDetails account={account} key={account.id} />
            );
          })
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    accounts: state.getAccounts,
  };
};

const mapDispatchToProps = dispatch => ({
  getAccounts: () => dispatch(getAccounts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetAccounts);
