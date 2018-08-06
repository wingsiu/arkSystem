import request from '../utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
  //  return request('http://localhost:3001/en/');
}
