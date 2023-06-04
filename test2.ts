const person = {
    get fullName(){ //getter rules is not linked and same with more rules which i write
console.log("test"); //strings rules is applied as it says it must be in dobule quotes
    }
};

console.log(person.fullName);


// no const aassign off rule is also not linked same with all

const myConstant = 42;
myConstant = 10; 

console.log(myConstant); 
