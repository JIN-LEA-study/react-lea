import * as admin from 'firebase-admin';
interface Config {
  credential: {
    privateKey: string;
    clientEmail: string;
    projectId: string;
  }
}

export default class FirebaseAdming {
  public static instance: FirebaseAdmin;
}