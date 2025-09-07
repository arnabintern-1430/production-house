import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";

// Resolve path for service account
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Replace with your downloaded service account JSON
const serviceAccount = path.join(__dirname, "serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
