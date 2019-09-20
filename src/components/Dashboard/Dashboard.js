import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <Sidebar />
        <div className="userAccountCoverPage">
          <nav className="landingProfile">
            <div>
              <h4>
                banka</h4>
            </div>
            <div>
              <i className="fas fa-bars" id="menuLogo"></i>
            </div>
          </nav>
          <div id="accountSection">
            <div className="details">
              <ul>
                <li>
                  <b>Account name: </b>
                </li>
                <li>
                  <b>Email:</b>
                </li>
              </ul>
            </div>
            <div className="accountInfo">
              <div>
                <div>
                  <div className="topDivs">
                    <div className="infoDiv">Transactions</div>
                    <div className="viewAllBtn"><Link to="#">View transactions</Link></div>
                  </div>
                  <div className="bankAccountInfo">
                    <table>
                      <tbody>
                        <tr>
                          <th>Type</th>
                          <th>From</th>
                          <th>To</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>View</th>
                        </tr>
                        <tr>
                          <td>Credit</td>
                          <td>Otoloye</td>
                          <td>Obayomi</td>
                          <td>$270.00</td>
                          <td>Mar/20/2019</td>
                          <td><Link to="#"><button>View</button></Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Dashboard);
