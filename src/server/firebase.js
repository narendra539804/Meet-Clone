import firebase from "firebase/compat/app";
import database from "firebase/compat/database";

const firebaseCofig = {
  apiKey: "AIzaSyD_2GppEUFcKVDODmDDO9j1ktWhJ4CeibA",
  databaseURL:
    "https://meet-clone-460b8-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

firebase.initializeApp(firebaseCofig);

let dbRef = firebase.database().ref();

export const userName = prompt("Whats your Name?");

const urlPramas = new URLSearchParams(window.location.search);

const roomId = urlPramas.get("id");

if (roomId) {
  dbRef = dbRef.child(roomId);
} else {
  dbRef = dbRef.push();
}

window.history.replaceState(null, "Meet", "?id=" + dbRef.key);

export default dbRef;
