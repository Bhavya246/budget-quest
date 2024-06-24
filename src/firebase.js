import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBF_3-HXT6c7xdMYKswXeYXEjGQk5BN0ZI",
  authDomain: "budget-quest.firebaseapp.com",
  projectId: "budget-quest",
  storageBucket: "budget-quest.appspot.com",
  messagingSenderId: "552743849833",
  appId: "1:552743849833:web:e08a2e33361c6b2b65b7f8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
