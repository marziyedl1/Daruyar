<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  variant?: 'icon' | 'icon-outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <Button
    :variant="variant ?? 'icon-outline'"
    :size="size ?? 'md'"
    :disabled="disabled"
    :aria-label="label"
    @click="$emit('click')"
  >
    <UIcon
      :name="icon"
      class="size-5"
    />
  </Button>
</template>
