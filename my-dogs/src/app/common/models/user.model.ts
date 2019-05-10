export class UserModel {
    constructor(public email: string = '',
        public password: string = '',
        public token: string = '',
        public avatar: string = '') {
    }
}
