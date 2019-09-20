export class UserResponse {
    constructor(public data: UserDataResponse){}
}

export class UserDataResponse {
    constructor(public id: number = 0,
        public first_name: string = null,
        public last_name: string = '',
        public avatar: string = '') {}
}