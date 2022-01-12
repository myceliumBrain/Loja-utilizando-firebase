const firebaseConfig = {
  apiKey: "AIzaSyCriZy1NvUtBu0RFS020-MrzAx2bWB6WUs",
  authDomain: "pedidos-cogu-farm.firebaseapp.com",
  projectId: "pedidos-cogu-farm",
  storageBucket: "pedidos-cogu-farm.appspot.com",
  messagingSenderId: "969616982568",
  appId: "1:969616982568:web:13f192b2ca4ee8352aab1d",
  measurementId: "G-BRHXXY3713"
};

firebase.initializeApp(firebaseConfig)
var db = firebase.firestore()