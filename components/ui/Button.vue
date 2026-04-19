<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-brand-700 text-white shadow-lg shadow-brand-950/15 hover:bg-brand-800',
        secondary: 'bg-lavender-100 text-brand-800 hover:bg-lavender-200',
        outline: 'border border-brand-200 bg-white/80 text-brand-800 hover:border-brand-300 hover:bg-brand-50',
        ghost: 'bg-transparent text-brand-800 hover:bg-white/70',
        pill: 'bg-brand-950 text-white hover:bg-brand-900',
        icon: 'bg-brand-700 px-0 text-white hover:bg-brand-800',
        'icon-outline': 'border border-brand-200 bg-white/80 px-0 text-brand-700 hover:bg-brand-50',
        'cta-with-icon': 'bg-brand-700 text-white shadow-lg shadow-brand-950/20 hover:-translate-y-0.5 hover:bg-brand-800'
      },
      size: {
        sm: 'h-10 px-4 text-sm',
        md: 'h-12 px-5 text-sm',
        lg: 'h-14 px-6 text-base'
      },
      block: {
        true: 'w-full',
        false: ''
      }
    },
    compoundVariants: [
      { variant: 'icon', size: 'sm', class: 'w-10' },
      { variant: 'icon', size: 'md', class: 'w-12' },
      { variant: 'icon', size: 'lg', class: 'w-14' },
      { variant: 'icon-outline', size: 'sm', class: 'w-10' },
      { variant: 'icon-outline', size: 'md', class: 'w-12' },
      { variant: 'icon-outline', size: 'lg', class: 'w-14' }
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      block: false
    }
  }
)

type ButtonVariants = VariantProps<typeof buttonVariants>

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariants['variant']
    size?: ButtonVariants['size']
    block?: ButtonVariants['block']
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    label?: string
    leadingIcon?: string
    trailingIcon?: string
  }>(),
  {
    variant: 'primary',
    size: 'md',
    block: false,
    type: 'button',
    disabled: false,
    loading: false,
    label: undefined,
    leadingIcon: undefined,
    trailingIcon: undefined
  }
)
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonVariants({ variant, size, block })"
  >
    <UIcon
      v-if="loading"
      name="i-lucide-loader-circle"
      class="size-4 animate-spin"
    />
    <UIcon
      v-else-if="leadingIcon"
      :name="leadingIcon"
      class="size-4"
    />

    <slot>
      {{ label }}
    </slot>

    <UIcon
      v-if="trailingIcon && !loading"
      :name="trailingIcon"
      class="size-4"
    />
  </button>
</template>
