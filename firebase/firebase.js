import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import "firebase/storage";
import "firebase/firestore";

const env = require('./config.json')
const config = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
    this.fStorage = app.storage();
    this.fireStore = app.firestore();
    this.reaults = [];
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
  doSignInWithGoogle = ()=> {
    var provider = new app.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(provider)
  } 
  getProfilePicUrl = ()=> this.auth.currentUser.photoURL || '/images/profile_placeholder.png';
  getUserName = () => this.auth.currentUser.displayName;
  isUserSignedIn = ()=> !!this.auth.currentUser;
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  initFirebaseAuth = (f)=> this.auth.onAuthStateChanged(e => f(e));

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    // *** Meme API ***
    meme = id => this.db.ref(`memes/${id}`);
    memes = () => this.db.ref('memes');

    accessStorage = () => this.fStorage.ref("images");
    addToStorage = (imageName) => this.fStorage.ref(`images/${imageName}`);

    // *** Firestore API ***
    // *** User API ***
    userFirestore = uid => this.fireStore.collection(`users/${uid}`);
    usersFirestore = () => this.fireStore.collection('users');

    // *** Meme API ***
    memesFirestore = () => this.fireStore.collection('memes');

    searchWithKeywords = (keywords)=> {
      return this.memesFirestore().where("keywords", "array-contains-any", keywords)
    } 

}
export default Firebase;