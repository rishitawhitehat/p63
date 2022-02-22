 import firebase from "firebase";


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC0jlRlZIeyAQj0wZ2bkgKOvmaL_4BH_fc",
  authDomain: "class-data-a8b31.firebaseapp.com",
  databaseURL: "https://class-data-a8b31-default-rtdb.firebaseio.com",
  projectId: "class-data-a8b31",
  storageBucket: "class-data-a8b31.appspot.com",
  messagingSenderId: "618387778127",
  appId: "1:618387778127:web:7cf751ae02ce6365cad83a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  