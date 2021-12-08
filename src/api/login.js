import request from './index'

export function getPolicy () {
  return request({
    url: '/api/data',
    method: 'GET'
  })
}
