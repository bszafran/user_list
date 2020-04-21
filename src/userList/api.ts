import { GET } from "../common/api/client"

const fetchUsers = () => {
  return GET("users")
}

export { fetchUsers }
