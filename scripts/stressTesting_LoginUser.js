import http from 'k6/http';
import { check, sleep } from "k6";
import {host , port, storeService, apiVersion, petService, payload, userService} from './constants.js'

const default_vus = 5;

export let options = {
  stages: [
    { duration: '1m', target: 100 }, // Ramp up to 100 users over 1 minute
    { duration: '3m', target: 100 }, // Stay at 100 users for 3 minutes
    { duration: '1m', target: 0 },   // Ramp down to 0 users over 1 minute
  ]
};

export default function () {
  const response = http.post(`http://${host}:${port}${apiVersion}${userService}/login/`, payloadLogin, {headers: {Accepts: "application/json"}});
  check(response, { "status is 200": (r) => r.status === 200 });
  sleep(Math.random() * 4 + 1);
};
