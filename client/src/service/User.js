import Api from './Api'

export default {
    getUsers() {
        return Api().get('users')
    },
    addUser(user) {
        return Api().post('add_user', user)
    }
}