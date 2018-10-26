import {firebase, googleAuthProvider} from '../firebase/firebase';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () =>({
    type: 'LOGOUT'
});

//used inside our LoginPage component when user clicks login button
export const startLogin = () =>{
    return ()=>{
        //return to promise chain
        return firebase.auth().signInWithPopup(googleAuthProvider)
    };
};

//used inside our Header component when user clicks logout button
export const startLogout = ()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}