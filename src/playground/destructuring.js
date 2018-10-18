// const person = {
//     age: 26,
//     location:{
//         city: 'Phily',
//         temp: 92
//     }
// };

// const {name:firstName = "Anonymous", age} = person;

// const {city, temp: temperature} = person.location;


// console.log(`${name} is ${age}`)
// console.log(`It is ${temperature} in ${city}`)


const address = ['28-11 hobart st', 'New York City', 'NY', '11377'];

const [ , city, state = 'N/A'] = address;

console.log(`You are in ${city} ${state}`);


console.log(`You are in ${address[1]} ${address[2]}`);


