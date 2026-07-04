importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDQ3ZAXlrqghUH_VDodqOjSD7KlSFv6MNw",
  authDomain: "fitpro-saeid.firebaseapp.com",
  projectId: "fitpro-saeid",
  storageBucket: "fitpro-saeid.firebasestorage.app",
  messagingSenderId: "796877557603",
  appId: "1:796877557603:web:586042046eee36278e0d56"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/MY-GYM/icon-192.png',
    badge: '/MY-GYM/icon-192.png',
    vibrate: [200, 100, 200]
  });
});
