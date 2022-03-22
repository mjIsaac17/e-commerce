import axios from 'axios';

const baseURL = 'http://localhost:4000/api/';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjJkNGFlYWU4NmZhZmJhOGJlNTYxOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzExNjA2OSwiZXhwIjoxNjc4NjczNjY5fQ.BIdISNyO6fOySCp3pfrm6xF00QNLI2eSlChq2mBwr9U';

export const publicRequest = (method = 'get', endpoint = '', data = {}) => {
  const config = {
    method,
    url: `${baseURL}${endpoint}`,
    data
  };
  return axios(config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const userRequest = axios.create({
  baseURL,
  headers: { token }
});
