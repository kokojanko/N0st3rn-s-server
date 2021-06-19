import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYFZROd6uQz2Fn1oOwrBj15gIDMuq5I3o",
    authDomain: "n0st3rnserver.firebaseapp.com",
    databaseURL: "https://n0st3rnserver-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "n0st3rnserver",
    storageBucket: "n0st3rnserver.appspot.com",
    messagingSenderId: "1095077963400",
    appId: "1:1095077963400:web:accd156966382f6670a13d"

});

var db = firebaseApp.firestore();

export { db };