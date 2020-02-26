import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDblTESEB1SbAVkpy2q39DI2OHphL2-Jxw",
    authDomain: "traffic-control-update-eeec7.firebaseapp.com",
    databaseURL: "https://traffic-control-update.firebaseio.com/",
    projectId: "traffic-control-update-eeec7",
    storageBucket: "traffic-control-update-eeec7.appspot.com",
    messagingSenderId: "144750278413"
};
firebase.initializeApp(config);

export default firebase;