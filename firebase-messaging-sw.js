
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyCud89dpES9zKc_3Zcz9EDG8dwsI-XblTE",
    authDomain: "develop-jz.firebaseapp.com",
    projectId: "develop-jz",
    storageBucket: "develop-jz.appspot.com",
    messagingSenderId: "722040087904",
    appId: "1:722040087904:web:a791336cf7cd40e53aaa05",
    measurementId: "G-4L1KL33EX5"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});


console.log("navigator.serviceWorker", navigator.serviceWorker)

navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then(function (registration) {
        firebase.messaging().useServiceWorker(registration)
        console.log('Registration successful, scope is:', registration.scope);
    }).catch(function (err) {
        console.log('Service worker registration failed, error:', err);
    });