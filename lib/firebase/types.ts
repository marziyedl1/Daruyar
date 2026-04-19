import type { FirebaseApp } from 'firebase/app'
import type { Auth } from 'firebase/auth'
import type { Firestore } from 'firebase/firestore'

export type DaruYarFirebaseServices = {
  app: FirebaseApp
  auth: Auth
  firestore: Firestore
}
