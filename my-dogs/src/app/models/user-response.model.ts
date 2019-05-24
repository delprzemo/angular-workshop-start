export class UserResponse {
    constructor(public data: Data) {}
}

class Data {
    constructor(
        public email: string = null,
        public avatar: string = '') {}
}