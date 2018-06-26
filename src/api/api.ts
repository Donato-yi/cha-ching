import * as qs from 'query-string'

import settings from '../config/setting'

class API {
  baseUrl: string
  token: string

  constructor() {
    this.baseUrl = settings.baseURL || ''
    this.token = ''
  }

  setToken = (token: string) => {
    this.token = token
  }

  setBaseUrl = (url: string) => {
    this.baseUrl = url
  }

  request = (
    endPoint: string,
    method: string,
    payload: any = null,
    baseUrl: string = this.baseUrl,
  ) => {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    }
    let endPointUrl = endPoint

    if (payload) {
      if (method === 'GET') {
        endPointUrl = `${endPoint}?${qs.stringify(payload)}`
      }
    }

    let body = null
    if (method !== 'GET' && payload) {
      body = JSON.stringify(payload)
    }

    return fetch(baseUrl + endPointUrl, {
      headers,
      method,
      body,
    }).then((res: any) => {
      const { data, response } = res

      if (response.code >= 400) {
        return Promise.reject({ err: response.errors, message: response.message })
      }
      return Promise.resolve({ data })
    })
  }
}

export default new API()
