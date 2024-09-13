function User(name){
    this.name = name;

    console.log(this);
}

User.prototype.printName = function(){
    console.log(this.name)
}
