const myConstant = 42;  // Rule not applied
myConstant = 10; 

console.log(myConstant); 



const person = { //  // Rule not applied
    get fullName(){
        console.log("test");
    }
};

console.log(person.fullName);
