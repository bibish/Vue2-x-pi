import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

const config = {
  apiKey: 'AIzaSyAVG4huT8BYAfxp9n7XeapWmNCXjL4E8-Q',
  authDomain: 'kekvue.firebaseapp.com',
  databaseURL: 'https://kekvue.firebaseio.com',
  projectId: 'kekvue',
  storageBucket: 'kekvue.appspot.com',
  messagingSenderId: '1080081749456'
}
firebase.initializeApp(config)
const firestore = firebase.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

export {
  firebase,
  firestore
}
