const person = { /// RUles applied
    get fullName(){
        console.log("test");
    }
};

console.log(person.fullName);


// here the no const rule is working
const myConstant = 42;  // Rule applied
myConstant = 10; 

console.log(myConstant); 