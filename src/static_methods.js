/*lass User{
    constructor(name){
        this._name = name
    }

    static anonymous(){
        console.log("anonymous");
    }
}

const kedar = new User("kedar")
kedar.anonymous() // error
User.anonymous() // "anonymous"*/

class User{
    @
    #name // the #name means that this is a private property

    constructor(name, password){
        this.#name = name
        this.password  =password
    }

    printName(){
        console.log(this.name);
    }
}

class Admin extends User{
    constructor(name, password, course){
        super(name, password)
        this.course = course
    }

    Stats(){
        @course
        console.log("Stats");
        console.log(course)
    }

    printName(){
        console.log("Child class " + this.name)
    }
}

const Kedar2 = object.create(Admin)
const kedar = new Admin("kedar", 123456, "JavaScript")
kedar.printName()
