import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from "./reducers"; 
import firebase from "firebase";
import Login from './components/LoginForm';
import LoginForm from './components/LoginForm';

class App extends Component {
    componenetWssillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyA3_jxDSCw_7eQ5JYi665VDr_o9Ap9q22g",
            authDomain: "project-auth-55a6d.firebaseapp.com",
            databaseURL: "https://project-auth-55a6d.firebaseio.com",
            projectId: "project-auth-55a6d",
            storageBucket: "project-auth-55a6d.appspot.com",
            messagingSenderId: "374568869098",
            appId: "1:374568869098:web:bd7f95443c8cf8b9"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    render (){
        return (
            <Provider store ={createStore(reducers) }>
            <View>
                <Text>this is complete application</Text>
                <LoginForm/>
                </View>
                </Provider>
        );
    }
}
export default App;