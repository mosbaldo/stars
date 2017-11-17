export class User {
    idUser: number;
    name: String;
    stars: String;
    
    constructor(idUser:number = null, name:String = "", stars:String = "0") {
        this.idUser = idUser;
        this.name = name;
        this.stars = stars;
    }
}
