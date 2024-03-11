import http from 'k6/http';
import { check, sleep } from "k6";
import {host , port, storeService, apiVersion} from './constants.js'

const default_vus = 5;

export let options = {
  stages: [
      // Ramp-up from 1 to TARGET_VUS virtual users (VUs) in 5s
      { duration: "5s", target: default_vus },

      // Stay at rest on TARGET_VUS VUs for 10s
      { duration: "10s", target: default_vus },

      // Ramp-down from TARGET_VUS to 0 VUs for 5s
      { duration: "5s", target: 0 }
  ]
};

export default function () {
  const response = http.get(`http://${host}:${port}${apiVersion}${storeService}/inventory`, {headers: {Accepts: "application/json"}});
  check(response, { "status is 200": (r) => r.status === 200 });
  sleep(.300);
};
