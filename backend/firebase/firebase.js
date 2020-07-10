import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const FIRE_DB_CONFIG = {
  API_KEY: "AIzaSyAgx4HKfRjGQJLNWCyImMSONfR5HVB3v58",
  AUTH_DOMAIN: "waarisdatfeestje-883cf.firebaseapp.com",
  DATABASE_URL: "https://waarisdatfeestje-883cf.firebaseio.com",
  PROJECT_ID: "waarisdatfeestje-883cf",
  STORAGE_BUCKET: "waarisdatfeestje-883cf.appspot.com",
  MESSAGING_SENDER_ID: "570753297023",
  APP_ID: "1:570753297023:web:4a814a7e65cfbc2d48ad4a"
}

const config = {
  apiKey: FIRE_DB_CONFIG.API_KEY,
  authDomain: FIRE_DB_CONFIG.AUTH_DOMAIN,
  databaseURL: FIRE_DB_CONFIG.DATABASE_URL,
  projectId: FIRE_DB_CONFIG.PROJECT_ID,
  storageBucket: FIRE_DB_CONFIG.STORAGE_BUCKET,
  messagingSenderId: FIRE_DB_CONFIG.MESSAGING_SENDER_ID,
  appId: FIRE_DB_CONFIG.APP_ID
}

firebase.initializeApp(config);
//firebase.firestore.setLogLevel('debug');

export const storage = firebase.storage();
export const firestore = firebase.firestore();
export default firebase;
