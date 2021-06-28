import app from 'firebase/app';
import App from '../../App';
const  config  = {
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
        App.initializeApp(config)

    }
}
export default  Firebase ;