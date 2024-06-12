import "dotenv/config";

export default {
  expo: {
    name: "kfs",
    slug: "kfs",
    version: "1.0.0",
    ios: {
      bundleIdentifier: "com.klarferdigstopp.kfs",
      googleServicesFile: "./GoogleService-Info.plist",
    },
    extra: {
      firebaseConfig: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      },
    },
  },
};
