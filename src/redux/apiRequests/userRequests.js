import { publicRequest } from '../../helpers/axiosRequests';
import {
  loginSetError,
  loginStart,
  loginSuccess
} from '../reducers/userReducer';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const resp = await publicRequest('post', 'auth/login', user);
    if (resp.error) {
      dispatch(loginSetError(resp.error));
      return;
    }
    dispatch(loginSuccess(resp.user));
  } catch (error) {
    dispatch(loginSetError('An error ocurred when trying to log in'));
  }
};
