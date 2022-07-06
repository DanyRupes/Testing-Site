
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
        payload
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});


self.addEventListener('notificationclick', (event) => {

    event.notification.close();
    
    console.log("event", event)
    console.log("event.notification.data", event.notification.data)
    
    const url = event.notification.data.url
    if (!url) return
  
    event.waitUntil(
      self.clients
        .matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientsArr) => {
          const hadWindowToFocus = clientsArr.some((windowClient) =>
            windowClient.url === url ? (windowClient.focus(), true) : false
          )
  console.log({hadWindowToFocus})
          if (!hadWindowToFocus)
            self.clients
              .openWindow(url)
              .then((windowClient) =>
                windowClient ? windowClient.focus() : null
              )
        })
    )
  })