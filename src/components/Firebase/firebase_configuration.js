import app from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/firestore'
const configuration= {
    apiKey: "AIzaSyBAYFSZmAg3coS7kQn1t7WvhfzKHDvb_dc",
    authDomain: "ilyassembarki-react.firebaseapp.com",
    projectId: "ilyassembarki-react",
    storageBucket: "ilyassembarki-react.appspot.com",
    messagingSenderId: "976741497199",
    appId: "1:976741497199:web:11242b5176d55ec8a7909a",
    measurementId: "G-JFL8PFZC04"
};
class Firebase{
    constructor(){
        app.initializeApp(configuration);
        this.auth=app.auth();
        this.db=app.firestore();
    }

    
    registerUser = (email,password)=>
    this.auth.createUserWithEmailAndPassword(email,password);

   
    signinUser = (email,password)=>
    this.auth.signInWithEmailAndPassword(email,password);

    signoutUser= () =>
    this.auth.signOut();

    user = uid =>this.db.doc(`users/${uid}`); 

    
    currentuser= () =>
    this.auth.currentUser;

    

}
export default Firebase;