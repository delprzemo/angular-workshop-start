export class UserResponseModel {
    constructor(public data: DataModel) {}
}

class DataModel {
    constructor(public id: number = 0,
        public first_name: string = null,
        public last_name: string = '',
        public avatar: string = '') {}
}
