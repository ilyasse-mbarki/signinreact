import  React,{component} from 'react';
import  ReactDOM from 'react-dom';
import Firebase from './firebase_configuration';
import App from './App'
import Firebase from './component/Firebase/FIREBASE'
import Firebasecontext from  './component/Firebase/firebaseContext'


ReactDOM.render(
    <Firebasecontext.Provider value={new Firebase()}>
        <App/>
    </Firebasecontext.Provider>,
    document.getElementById('root')
);
