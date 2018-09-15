import queryString from 'query-string'

export default (data) =>
  (typeof data === 'object')
    ? queryString.parse(data.search)
    : queryString.parse(data)
