importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyDtW8fWIDPa2sQyZP-hcjfeklYO5pD4ix4",
    authDomain: "masdar-market.firebaseapp.com",
    databaseURL: "https://masdar-market-default-rtdb.firebaseio.com",
    projectId: "masdar-market",
    storageBucket: "masdar-market.appspot.com",
    messagingSenderId: "658363549894",
    appId: "1:658363549894:web:93398201d47c0a56b4efc7",
    measurementId: "G-63BPEDP0XJ"
};

firebase.initializeApp(firebaseConfig);

const registration = await navigator.serviceWorker.register(
    "serviceworker.js",
    {
        scope: "./",
    }
);
const messaging = firebase.messaging();
