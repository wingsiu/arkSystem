import request from '../utils/request';

export async function query() {
  return request('http://localhost:3001/en/', { method: 'GET' });
}

export async function queryCurrent() {
  return request('http://localhost:3001/en/');
}
