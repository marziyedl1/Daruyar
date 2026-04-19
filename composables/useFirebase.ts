import type { Auth } from 'firebase/auth'
import type { Firestore } from 'firebase/firestore'
import type { DaruYarFirebaseServices } from '~/lib/firebase/types'

export function useFirebase() {
  const { $firebase } = useNuxtApp()

  if (!$firebase) {
    throw new Error(
      'Firebase is not initialized. Add the NUXT_PUBLIC_FIREBASE_* values to your environment before using Firebase services.'
    )
  }

  return $firebase as DaruYarFirebaseServices
}

export function useFirebaseAuth(): Auth {
  return useFirebase().auth
}

export function useFirestoreDb(): Firestore {
  return useFirebase().firestore
}
