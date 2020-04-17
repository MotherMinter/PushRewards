import axios from 'axios'
import { SHA256 } from 'crypto-js'

export const BACKEND_BASE_URL = 'https://zapp.money'

export async function login (email, password) {
  return axios.post(`${BACKEND_BASE_URL}/api/login`, { email, password });
}

export async function register ({ email, passwordHash, name }) {
  return axios.post(`${BACKEND_BASE_URL}/api/sign_up`, { email, password: passwordHash });
}

export function getPasswordHash (password) {
  return SHA256(password).toString()
}
