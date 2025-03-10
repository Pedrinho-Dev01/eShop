import http from 'k6/http';

export let options = {
  insecureSkipTLSVerify: true,  // Skip SSL verification for self-signed certs
  stages: [
    { duration: '10s', target: 10 },
    { duration: '30s', target: 10 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
    let res = http.get('https://host.docker.internal:7298/user/orders');
    if (res.status !== 200) {
        console.error(`Request failed with status: ${res.status}`);
    }
}
