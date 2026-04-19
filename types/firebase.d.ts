import type { DaruYarFirebaseServices } from '~/lib/firebase/types'

declare module '#app' {
  interface NuxtApp {
    $firebase: DaruYarFirebaseServices | null
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $firebase: DaruYarFirebaseServices | null
  }
}

export {}
