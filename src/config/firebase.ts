import { initializeApp, getApps, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { credential } from 'firebase-admin';

const firebaseConfig = {
  credential: credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

const initializeFirebase = (): App => {
  if (getApps().length === 0) {
    return initializeApp(firebaseConfig);
  }
  return getApps()[0];
};

const app = initializeFirebase();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, app };