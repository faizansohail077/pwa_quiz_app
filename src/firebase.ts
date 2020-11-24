import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCeEDZuzog51SDJN03Oe1LhqYp7_Ow6KVY",
  authDomain: "quiz-app-pwa-fad37.firebaseapp.com",
  databaseURL: "https://quiz-app-pwa-fad37.firebaseio.com",
  projectId: "quiz-app-pwa-fad37",
  storageBucket: "quiz-app-pwa-fad37.appspot.com",
  messagingSenderId: "317632793483",
  appId: "1:317632793483:web:db8106b666e1d9a0e57d8e",
  measurementId: "G-0B1VJN9EP0"
}
firebase.initializeApp(config)

export default firebase