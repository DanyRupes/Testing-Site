
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
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

// Retrieve firebase messaging
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
        console.log("t1")
        firebase.messaging().useServiceWorker(registration)

        console.log('Registration successful, scope is:', registration.scope);
    }).catch(function (err) {
        console.log('Service worker registration failed, error:', err);
    });






// // console.log(navigator.serviceWorker)
// // // Import and configure the Firebase SDK
// // // These scripts are made available when the app is served or deployed on Firebase Hosting
// // // If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup



// // //  * Here is is the code snippet to initialize Firebase Messaging in the Service
// // //  * Worker when your app is not hosted on Firebase Hosting.

// // // Give the service worker access to Firebase Messaging.
// // // Note that you can only use Firebase Messaging here. Other Firebase libraries
// // // are not available in the service worker.
// // importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
// // importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// // // Initialize the Firebase app in the service worker by passing in
// // // your app's Firebase config object.
// // // https://firebase.google.com/docs/web/setup#config-object
// // firebase.initializeApp({
// //     apiKey: "AIzaSyCud89dpES9zKc_3Zcz9EDG8dwsI-XblTE",
// //     authDomain: "develop-jz.firebaseapp.com",
// //     projectId: "develop-jz",
// //     storageBucket: "develop-jz.appspot.com",
// //     messagingSenderId: "722040087904",
// //     appId: "1:722040087904:web:a791336cf7cd40e53aaa05",
// //     measurementId: "G-4L1KL33EX5"
// // });

// // // Retrieve an instance of Firebase Messaging so that it can handle background
// // // messages.


// // // If you would like to customize notifications that are received in the
// // // background (Web app is closed or not in browser focus) then you should
// // // implement this optional method.
// // // Keep in mind that FCM will still show notification messages automatically 
// // // and you should use data messages for custom notifications.
// // // For more info see: 
// // // https://firebase.google.com/docs/cloud-messaging/concept-options


// // messaging.onMessage(messaging, (payload) => {
// //     console.log('Message received. -------------');
// //   });

// importScripts('https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js');
// // importScripts('https://www.gstatic.com/firebasejs/9.8.4/init.js');



// console.log("navigator.serviceWorker", navigator.serviceWorker)

// navigator.serviceWorker.register('/firebase-messaging-sw.js')
//     .then(function (registration) {
//         console.log("t1")
//         firebase.messaging().useServiceWorker(registration)

//         const messaging = firebase.messaging();
//         console.log("t2")

//         messaging.onBackgroundMessage(function (payload) {
//             console.log('[firebase-messaging-sw.js] Received background message ', payload);
//             // Customize notification here
//             const notificationTitle = 'Background Message Title';
//             const notificationOptions = {
//                 body: 'Background Message body.',
//                 icon: '/firebase-logo.png'
//             };

//             self.registration.showNotification(notificationTitle,
//                 notificationOptions);
//         });
//         console.log("t3")

//         this.addEventListener("push", t => {
//             console.log("push", t)
//         })

//         console.log('Registration successful, scope is:', registration.scope);
//     }).catch(function (err) {
//         console.log('Service worker registration failed, error:', err);
//     });

