import { act, renderHook } from "@testing-library/react-hooks"
import useUsersState from "../useUsersState"
import { fetchUsers } from "../api"
import { mockedUsers } from "../mocks"

jest.mock("../api")
const mockedFetchUsers = fetchUsers as jest.Mock
mockedFetchUsers.mockReturnValue(Promise.resolve(() => []))

describe("useUsersState hook", () => {
  it("returns empty users array and search by default and when nothing returned from API", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUsersState())
    expect(result.current.users).toEqual([])
    expect(result.current.search).toEqual("")

    await waitForNextUpdate()

    expect(result.current.users).toEqual([])
    expect(result.current.search).toEqual("")
  })

  it("sets users when fetched", async () => {
    mockedFetchUsers.mockReturnValue(Promise.resolve(() => mockedUsers))
    const { result, waitForNextUpdate } = renderHook(() => useUsersState())
    await waitForNextUpdate()

    expect(result.current.users).toEqual(mockedUsers)
  })

  it("sets search value", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUsersState())
    await waitForNextUpdate()
    const newSearchValue = "new search value"

    expect(result.current.search).toEqual("")
    act(() => result.current.setSearch(newSearchValue))

    expect(result.current.search).toEqual(newSearchValue)
  })

  it("filters users on search change", async () => {
    mockedFetchUsers.mockReturnValue(Promise.resolve(() => mockedUsers))
    const { result, waitForNextUpdate } = renderHook(() => useUsersState())
    await waitForNextUpdate()
    const newSearchValue = mockedUsers[0].name[0]

    expect(result.current.users.length).toEqual(mockedUsers.length)
    act(() => result.current.setSearch(newSearchValue))

    expect(result.current.users.length).toEqual(1)
  })

  it("filters users on search change with lowercase character", async () => {
    mockedFetchUsers.mockReturnValue(Promise.resolve(() => mockedUsers))
    const { result, waitForNextUpdate } = renderHook(() => useUsersState())
    await waitForNextUpdate()
    const newSearchValue = mockedUsers[0].name[0].toLowerCase()

    expect(result.current.users.length).toEqual(mockedUsers.length)
    act(() => result.current.setSearch(newSearchValue))

    expect(result.current.users.length).toEqual(1)
  })

  it("filters users on search change - empty array when no user found", async () => {
    mockedFetchUsers.mockReturnValue(Promise.resolve(() => mockedUsers))
    const { result, waitForNextUpdate } = renderHook(() => useUsersState())
    await waitForNextUpdate()
    const newSearchValue = "X"

    expect(result.current.users.length).toEqual(mockedUsers.length)
    act(() => result.current.setSearch(newSearchValue))

    expect(result.current.users.length).toEqual(0)
  })
})
