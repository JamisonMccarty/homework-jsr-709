import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBSx7G9A8ldaNogd9D62MnCqs3aqHFRlEY",
    authDomain: "ga-jsr-709.firebaseapp.com",
    databaseURL: "https://ga-jsr-709.firebaseio.com",
    projectId: "ga-jsr-709",
    storageBucket: "",
    messagingSenderId: "788848286036",
    appId: "1:788848286036:web:a6c0a42235594b54"
  };

  class Firebase {
    constructor () {
      app.initializeApp(config);

      this.auth = app.auth();
      this.db = app.database();
    }

    //*** Auth API ***//
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

    //*** User API ***
    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');  
  }

  export default Firebase;
