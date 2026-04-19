import { initializeApp, getApp, getApps, type FirebaseOptions } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import type { DaruYarFirebaseServices } from '~/lib/firebase/types'

export default defineNuxtPlugin(() => {
  const firebaseConfig = useFirebaseRuntimeConfig()
  const missingKeys = getMissingFirebaseEnv(firebaseConfig)

  if (missingKeys.length > 0) {
    console.warn(
      `[firebase] Missing public runtime config: ${missingKeys.join(', ')}. Firebase services were not initialized.`
    )

    return {
      provide: {
        firebase: null as DaruYarFirebaseServices | null
      }
    }
  }

  const app = getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig as FirebaseOptions)

  const firebase = {
    app,
    auth: getAuth(app),
    firestore: getFirestore(app)
  } satisfies DaruYarFirebaseServices

  return {
    provide: {
      firebase
    }
  }
})
