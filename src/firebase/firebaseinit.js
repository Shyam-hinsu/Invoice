import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCNz58Ogu4xelISTMyF0hF1QA-uUysyIEs",
  authDomain: "invoice-app-52c24.firebaseapp.com",
  projectId: "invoice-app-52c24",
  storageBucket: "invoice-app-52c24.appspot.com",
  messagingSenderId: "743705798577",
  appId: "1:743705798577:web:b45ae85078fd05c1073f90"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default db

