
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
var clickUrl;

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "https://picsum.photos/id/237/200/300",
    };

    clickUrl = payload.data.click_url;
    if (clickUrl) self.registration.showNotification(notificationTitle, notificationOptions);
});


self.addEventListener('notificationclick', (event) => {

    event.notification.close();

    console.log("event", event.notification)

    event.waitUntil(self.clients
        .matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientsArr) => {
            console.log("click")
            self.clients
                .openWindow(clickUrl)
                .then((windowClient) =>
                    windowClient ? windowClient.focus() : null
                )
        })
    )
})