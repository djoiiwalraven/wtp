import firebase ,{firestore} from './firebase/firebase';

const EC = firestore.collection('eventCards');
const USERS = firestore.collection('users');
const LIKES = firestore.collection('likes');
const GAPV = new firebase.auth.GoogleAuthProvider();
//const ID_TOKEN = googleUser.getAuthResponse().id_token;
import * as Google from 'expo-google-app-auth';


const API = {
  addEvent: function(event){
    EC.add({
      event,
    });
  },
  toggleLike: async function(userEmail,eventId){
    let initQuery = await LIKES
    .where('user_email', '==', userEmail)
    .where('event_id','==', eventId);

    initQuery
    .get()
    .then(snap => {
      if(snap.size > 0) {
        console.log('like exists');
        let batch = firestore.batch();
        snap.forEach(doc => {
          batch.delete(doc.ref);
        });
        return batch.commit();
      }else{
        console.log('like does not exists');
        //database
        LIKES.add({
          user_email: userEmail,
          event_id: eventId,
        });
        //visualfeedback

      }
    });
  },
  getLikes: async function(likesRetrieved, userEmail){
    let initQuery = await LIKES.where('user_email', '==', userEmail);
    let docSnapShots = await initQuery.get();
    let docData = docSnapShots.docs.map(doc => doc.data());
    //console.log(userEmail);
    //console.log(docData);
    likesRetrieved(docData);
  },
  getEvents: async function(eventsRetrieved){
    let initQuery = await EC;
    let docSnapShots = await initQuery.get();
    let docData = docSnapShots.docs.map(doc => doc.data());
    let docIds = docSnapShots.docs.map(doc => doc.id);
    //console.log(docData[1]);
    //console.log(docIds[1]);
    for(let i = 0; i < docIds.length; i++){
      docData[i].event.id = docIds[i];
    }
    //console.log(docData);
    eventsRetrieved(docData);
  },
  //USER INFO & LOGIN
  addUser: function(result){
    USERS.add({
        id: result.user.uid,
        email: result.user.email,
        profile_picture: result.additionalUserInfo.profile.picture,
        local: result.additionalUserInfo.profile.locale,
        first_name: result.additionalUserInfo.profile.given_name,
        last_name: result.additionalUserInfo.profile.family_name
    });
  },
  getUserInfo: async function(userRetrieved){
    let user = await firebase.auth().currentUser;
    userRetrieved(user);
  },
  checkIfLoggedIn: function(onLoginSuccess, onLoginFail){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        onLoginSuccess();
      }else{
        onLoginFail();
      }
    })
  },
  signInWithGoogleAsync: async function() {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        androidClientId: '570753297023-bhpq9bfsc2l4dv3gt22cjaf0tp9jmn47.apps.googleusercontent.com',
        iosClientId: '570753297023-n24t00f95f3u4dejircd6pcgsp94vabh.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  },
  isUserEqual: function (googleUser, firebaseUser) {
    if (firebaseUser) {
      let providerData = firebaseUser.providerData;
      for (let i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  },
  onSignIn: function(googleUser) {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    let unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        let credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        firebase.auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(result => {
          console.log('user signed in');
          if(result.additionalUserInfo.isNewUser){
            this.addUser(result);
          }else{
            console.log('user already exists');
          }
        })
        .catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // The email of the user's account used.
          let email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  },
  userSigningOut: function(){
    firebase.auth().signOut();
  }
}

export default API;
