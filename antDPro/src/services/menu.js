import { stringify } from 'qs';
import request from '../utils/request';

export async function getMenu() {
  return request(`http://localhost:3001/en/`);
}

export async function postExample(params) {
  return request('/api/post', {
    method: 'POST',
    body: params,
  });
}
