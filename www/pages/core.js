import axios from 'axios'
import { SHA256 } from 'crypto-js'
import Fingerprint2 from 'fingerprintjs2'

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

export async function getFingerPrint () {
  return new Promise((resolve) => {
    setTimeout(function () {
      Fingerprint2.get({
        excludes: {userAgent: true, language: true, enumerateDevices: true}
      }, function (components) {
        const values = components.map(function (component) { return component.value })
        const murmur = Fingerprint2.x64hash128(values.join(''), 31)
        resolve(murmur);
      })
    }, 500)
  })
}
