 
import jwtDecode from 'jwt-decode';
import { currentUser } from '../actions/authActions';
import { setAuthToken } from './index';
import { store } from '../store';

const confirmToken = () => {
  if(localStorage.affinityUser) {
    setAuthToken(localStorage.affinityUser);
    const decoded = jwtDecode(localStorage.affinityUser);
    store.dispatch(currentUser(decoded));
  }
}

export default confirmToken;
