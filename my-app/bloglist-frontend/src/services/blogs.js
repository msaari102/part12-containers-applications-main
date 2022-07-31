import axios from '../util/apiClient'
const nextUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(nextUrl)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(nextUrl, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${nextUrl}/${id}`, newObject)
  return response.data
}

const deleteId = async (id) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.delete(`${nextUrl}/${id}`, config)
  return response.data
}

export default { getAll, create, setToken, update, deleteId }