function* generateRegistrationNumbers(value){
    let i =1;
    while (true){
        yield i++;
    }
}
const ids = generateRegistrationNumbers();

console.log(ids.next().value); 
console.log(ids.next().value); 
console.log(ids.next().value); 
console.log(ids.next().value); 
console.log(ids.next().value); 
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);