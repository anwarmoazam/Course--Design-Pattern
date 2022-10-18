console.log('Example of Decorator Pattern');

function User(name){
    this.name = name;
    this.userSay = function(){
        return `User : ${this.name}`;
    }
}



function decoratedUser(user,street,city){
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;
    this.decoratedUserSay = function(){
        return `Decorated User : ${this.name}, ${this.street}, ${this.city}`;
    }
}

function run(){
    const user = new User('Anwar');
    console.log(user.userSay());
    
    const decoUser = new decoratedUser(user,'Shiv Nagar','Pali');
    console.log(decoUser.decoratedUserSay());
}

run();

class User1{
    constructor(name){
        this.name = name;
    }
    userSay1(){
        return `User 1 : ${this.name}`;
    }
}

const newUser = new User1('Ankit');
console.log(newUser.userSay1());

class DecoratedUser{
    constructor(user,city,dist,state){
        this.user = newUser;
        this.name = user.name;
        this.state = state;
        this.city = city;
        this.dist = dist;
    }
    decoratedUserSay(){
        return `Decorated User : Name = ${this.name}, City = ${this.city}, District = ${this.dist}, State = ${this.state}`;
    }
}

const deco_user1 = new DecoratedUser(newUser,'Jodhpur','Jodhpur','Rajasthan');
console.log(deco_user1.decoratedUserSay());