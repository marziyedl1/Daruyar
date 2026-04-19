<script setup lang="ts">
withDefaults(
  defineProps<{
    padded?: boolean
  }>(),
  {
    padded: true
  }
)
</script>

<template>
  <section
    class="glass-card rounded-[28px] border border-white/70"
    :class="padded ? 'p-5 md:p-6' : ''"
  >
    <slot />
  </section>
</template>
