const users = []

//addUser, removeUSer, getUSer, getUsersInRoom

const addUser = ({ id, username, room }) => {
    //Clean the data

    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    //Check for exisitng user
    const exisitngUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (exisitngUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room} 
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}


const getUser = (id) => {
    return user = users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room.trim().toLowerCase())
}

addUser({
    id: 22,
    username: 'Anna  ',
    room: 'South Philly'
})
addUser({
    id: 21,
    username: 'Mike  ',
    room: 'South Philly'
})
addUser({
    id: 25,
    username: 'Andrew  ',
    room: 'Central City'
})


const userFounded = getUser(29)
console.log(userFounded)


const usersInRoomFounded = getUsersInRoom('South Philly')
console.log(usersInRoomFounded)

//console.log(users)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}