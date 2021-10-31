import axios from 'axios'

const config = {
    baseURL: 'https://api.hnpwa.com/v0/'
}

function fetchNews() {
    return axios.get(`${config.baseURL}news/1.json`)
}

function fetchAsk() {
    return axios.get(`${config.baseURL}ask/1.json`)
}

function fetchJobs() {
    return axios.get(`${config.baseURL}jobs/1.json`)
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseURL}user/${userName}.json`)
}

function fetchItem(id) {
    return axios.get(`${config.baseURL}item/${id}.json`)
}

export {
    fetchNews,
    fetchAsk,
    fetchJobs,
    fetchUserInfo,
    fetchItem,
}