import { useEffect, useState } from "react"
import { fetchUsers } from "./api"
import { User } from "./model"

const useUsersState = () => {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [search, setSearch] = useState<string>("")
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch(() => setError(true))
  }, [])

  useEffect(() => {
    const lowerCasedSearch = search.toLowerCase()

    setFilteredUsers(
      users.filter((user) => {
        const words = user.name.toLowerCase().split(" ")
        return words.some((word) => word.startsWith(lowerCasedSearch))
      })
    )
  }, [search, users])

  return {
    users: filteredUsers,
    search,
    setSearch,
    error,
  }
}

export default useUsersState
