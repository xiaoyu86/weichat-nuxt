import axios from 'axios';
import HTTP_CONFIG from 'http-config'

var http = axios.create(HTTP_CONFIG.http);
var httpToken = httpTokenInit(_config);

function httpTokenInit(_config) {
  return axios.create(Object.assign({}, HTTP_CONFIG.httpToken, _config))
}
