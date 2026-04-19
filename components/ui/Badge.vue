<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]',
  {
    variants: {
      variant: {
        primary: 'bg-brand-100 text-brand-800',
        secondary: 'bg-lavender-100 text-lavender-800',
        success: 'bg-emerald-100 text-emerald-700',
        warning: 'bg-amber-100 text-amber-700',
        danger: 'bg-rose-100 text-rose-700',
        neutral: 'bg-slate-100 text-slate-600'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)

type BadgeVariant = VariantProps<typeof badgeVariants>['variant']

withDefaults(
  defineProps<{
    variant?: BadgeVariant
  }>(),
  {
    variant: 'primary'
  }
)
</script>

<template>
  <span :class="badgeVariants({ variant })">
    <slot />
  </span>
</template>
