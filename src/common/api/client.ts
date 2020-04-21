import { API_URL } from "../../settings"

const GET = (endpoint: string) => {
  return fetch(`${API_URL}/${endpoint}`).then((res) => {
    if (!res.ok) {
      throw Error("Cannot receive data from API")
    }
    return res.json()
  })
}

export { GET }
