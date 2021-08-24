import axios from 'axios'

const baseUrl = 'https://ga-winebored.herokuapp.com'

export const getAllWines = () => {
  return axios.get(`${baseUrl}/wines`)
}

export const getSingleWines = (id) => {
  return axios.get(`${baseUrl}/wines/${id}`)
}

export const registerUser = (FormData) => {
  return axios.post(`${baseUrl}/register/`, FormData)
}

export const loginUser = (FormData) => {
  return axios.post(`${baseUrl}/login/`, FormData)
}
