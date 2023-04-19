// Importa la biblioteca de Firebase
import firebase from 'firebase/app';
import 'firebase/messaging';

// Configura tu aplicación
const firebaseConfig = {
  // ...tu configuración de Firebase aquí...
};

firebase.initializeApp(firebaseConfig);

// Obtiene el servicio de mensajería de Firebase
const messaging = firebase.messaging();
messaging.requestPermission().then(() => {
    console.log('Permiso concedido.');
  }).catch((error) => {
    console.log('Error al solicitar permiso:', error);
  });
  messaging.getToken().then((currentToken) => {
    if (currentToken) {
      console.log('Token de registro:', currentToken);
    } else {
      console.log('No se pudo obtener el token de registro. Verifica si el usuario está autorizado para recibir notificaciones push.');
    }
  }).catch((error) => {
    console.log('Error al obtener el token de registro:', error);
  });
  const payload = {
    notification: {
      title: '¡Nueva notificación push!',
      body: 'Esto es una notificación push enviada desde Firebase.',
      icon: 'https://example.com/icon.png'
    }
  };
  
  messaging.send(payload).then(() => {
    console.log('Notificación push enviada.');
  }).catch((error) => {
    console.log('Error al enviar la notificación push:', error);
  });
      