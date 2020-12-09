import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAsW0Z_03uGvWGUsDJjh1RL2KDFbPKj8sA",
    authDomain: "crud-react-4f437.firebaseapp.com",
    databaseURL: "https://crud-react-4f437.firebaseio.com",
    projectId: "crud-react-4f437",
    storageBucket: "crud-react-4f437.appspot.com",
    messagingSenderId: "413617600697",
    appId: "1:413617600697:web:37c3b5266e54e121708368"
  };
  // Initialize Firebase
  var fireBD=firebase.initializeApp(firebaseConfig);

  export default fireBD.database().ref();