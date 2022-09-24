export const generateRandomNumber = function(maximum,minimum){
    return Math.floor(Math.random()* (maximum - minimum)) + minimum;
}
console.log(`From Utility ${generateRandomNumber(10,100)}`)

