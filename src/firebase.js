// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.BUDGETQUEST_FIREBASE_API_KEY,
  authDomain: process.env.BUDGETQUEST_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.BUDGETQUEST_FIREBASE_PROJECT_ID,
  storageBucket: process.env.BUDGETQUEST_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.BUDGETQUEST_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.BUDGETQUEST_FIREBASE_APP_ID,
  measurementId: process.env.BUDGETQUEST_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics, app };