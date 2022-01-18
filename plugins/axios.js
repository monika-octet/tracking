import https from 'https';

export default function ({ $axios, store, app, error }) {
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

    $axios.onRequest(
        config => {
            return config;
        },
        error => Promise.reject(error)
    );
}