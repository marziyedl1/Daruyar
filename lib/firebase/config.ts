export function useFirebaseRuntimeConfig() {
  const config = useRuntimeConfig()

  return {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseMeasurementId
  }
}

export function getMissingFirebaseEnv(config: ReturnType<typeof useFirebaseRuntimeConfig>) {
  return Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => key)
}
