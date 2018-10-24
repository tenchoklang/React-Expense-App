import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAJZ9PprH3-_9cLoRvKMXntaWEDalODoO8",
    authDomain: "expense-app-9544c.firebaseapp.com",
    databaseURL: "https://expense-app-9544c.firebaseio.com",
    projectId: "expense-app-9544c",
    storageBucket: "expense-app-9544c.appspot.com",
    messagingSenderId: "253289356276"
  };

firebase.initializeApp(config);

const database = firebase.database();


export {firebase, database as default}


// database.ref('notes').once('value').then((snapshot)=>{
//     let expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// const onValueChange = database.ref().on('value', (snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// }, (error)=>{
//     console.log('Error', error);
// })

// database.ref().on(onValueChange);


// database.ref().once('value').then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(snapshot);
//     console.log(val);
// }).catch((error)=>{
//     console.log('error getting data', error);
// });


// database.ref().set({
//     name: 'Tenzin Choklang',
//     age: 23,
//     isSingle: false,
//     location: {
//         city: 'NYC',
//         count: 'USA'
//     }
// }).then((result)=>{
//     console.log("Data is saved");
// }).catch((error) =>{
//     console.log('this failed', error);
// });

// database.ref().update({
//     age:26,
//     'location/city': 'LA'
// })

