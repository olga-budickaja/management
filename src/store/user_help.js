export default class User {
    constructor(
        firstname,
        lastname,
        username,
        email,
        realm,
        password,
        createdOn,
        id
    ) {
            this.firstname = firstname,
            this.lastname = lastname,
            this.username = username,
            this.email = email,
            this.realm = realm,
            this.password = password,
            this.createdOn = createdOn,
            this.id = id
    }
}