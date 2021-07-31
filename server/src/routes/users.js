import db from '../dbController'

const getUsers = () =>  {
   db.read()
   db.data = db.data || { user: {}}
   return db.data.users
}

const usersRoute = [
    {
        method: 'get',
        route: '/users',
        handler: (req, res) => {
            const users = getUsers()
            res.send(users)
        },
    },
    {
        method: 'get',
        route: '/users/:id',
        handler: ({ params: { id } }, res) => {
            try {
                const users = getUsers()
                const user = users[id]
                if (!user) throw Error('사용자가 없습니다.')
                res.send(user)
            } catch (err) {
                res.status(500).send({ error: err })
            }
        },
    },
]

export default usersRoute