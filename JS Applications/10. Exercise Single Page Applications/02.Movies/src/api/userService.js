
export const userData = {
    getUser: () => JSON.parse(localStorage.getItem('user')),
    setUser: (data) => localStorage.setItem('user', JSON.stringify(data)),
    removeUser: () => localStorage.removeItem('user')
}
