<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()

defineEmits<{
  retry: []
}>()
</script>

<template>
  <Card class="text-center">
    <div class="flex flex-col items-center gap-4 py-4">
      <div class="flex size-14 items-center justify-center rounded-full bg-rose-100 text-rose-600">
        <UIcon
          name="i-lucide-alert-triangle"
          class="size-6"
        />
      </div>
      <div class="space-y-2">
        <h3 class="text-lg font-semibold text-brand-950">
          {{ title }}
        </h3>
        <p class="max-w-sm text-sm leading-6 text-slate-600">
          {{ description }}
        </p>
      </div>
      <slot>
        <Button
          variant="outline"
          trailing-icon="i-lucide-refresh-cw"
          @click="$emit('retry')"
        >
          Try again
        </Button>
      </slot>
    </div>
  </Card>
</template>
