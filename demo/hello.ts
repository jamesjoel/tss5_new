interface user{
    name : string;
    age : number
}
class Hello{
    user:user;
    constructor(){
        this.user.name="rohit";
        console.log(this.user);
    }
}