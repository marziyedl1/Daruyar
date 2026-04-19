<script setup lang="ts">
const dayFilter = ref('today')
const medicationName = ref('Vitamin D')

const filters = [
  { label: 'Today', value: 'today', icon: 'i-lucide-calendar-days' },
  { label: 'Week', value: 'week', icon: 'i-lucide-calendar-range' },
  { label: 'History', value: 'history', icon: 'i-lucide-history' }
]

const upcomingDoses = [
  {
    name: 'Metformin',
    dosage: '500mg',
    time: '08:00',
    status: 'Taken',
    badge: 'success' as const
  },
  {
    name: 'Vitamin D',
    dosage: '2000 IU',
    time: '13:00',
    status: 'Up next',
    badge: 'primary' as const
  },
  {
    name: 'Magnesium',
    dosage: '250mg',
    time: '20:30',
    status: 'Scheduled',
    badge: 'secondary' as const
  }
]
</script>

<template>
  <PageContainer class="space-y-8 py-8 md:py-12">
    <Card class="overflow-hidden">
      <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div class="space-y-6">
          <Badge variant="secondary">
            Medication Adherence Tracker
          </Badge>
          <div class="space-y-4">
            <h1 class="max-w-2xl text-4xl font-semibold tracking-tight text-brand-950 md:text-5xl">
              A calm daily plan for every dose that matters.
            </h1>
            <p class="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              DaruYar starts with a mobile-first foundation: reminders, dose tracking,
              history, and a shared design system that keeps every future feature consistent.
            </p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="cta-with-icon"
              size="lg"
              trailing-icon="i-lucide-arrow-right"
            >
              Start ticket 2
            </Button>
            <Button
              variant="outline"
              size="lg"
              trailing-icon="i-lucide-layout-dashboard"
            >
              View foundation
            </Button>
          </div>
        </div>

        <Card class="border-brand-100/80 bg-white/75">
          <div class="space-y-5">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium uppercase tracking-[0.2em] text-brand-500">
                  Today at a glance
                </p>
                <p class="mt-1 text-3xl font-semibold text-brand-950">
                  3 doses
                </p>
              </div>
              <IconButton
                icon="i-lucide-bell-ring"
                label="Reminders"
              />
            </div>

            <div class="grid grid-cols-3 gap-3">
              <div class="rounded-3xl bg-brand-700 px-4 py-4 text-white">
                <p class="text-xs uppercase tracking-[0.18em] text-brand-100">
                  Taken
                </p>
                <p class="mt-2 text-2xl font-semibold">
                  1
                </p>
              </div>
              <div class="rounded-3xl bg-white px-4 py-4 text-brand-900">
                <p class="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Next
                </p>
                <p class="mt-2 text-2xl font-semibold">
                  1
                </p>
              </div>
              <div class="rounded-3xl bg-lavender-100 px-4 py-4 text-brand-900">
                <p class="text-xs uppercase tracking-[0.18em] text-brand-500">
                  Later
                </p>
                <p class="mt-2 text-2xl font-semibold">
                  1
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Card>

    <section class="space-y-5">
      <SectionHeader
        eyebrow="Ticket 1.2"
        title="Shared component foundation"
        description="The app now has reusable building blocks for buttons, cards, inputs, status states, and dashboard-ready layout patterns."
      >
        <template #actions>
          <SegmentedControl
            v-model="dayFilter"
            :options="filters"
          />
        </template>
      </SectionHeader>

      <div class="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Card class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-semibold text-brand-500">
                Upcoming doses
              </p>
              <h3 class="text-xl font-semibold text-brand-950">
                Dose-level dashboard cards
              </h3>
            </div>
            <Badge variant="primary">
              {{ dayFilter }}
            </Badge>
          </div>

          <div class="space-y-3">
            <div
              v-for="dose in upcomingDoses"
              :key="`${dose.name}-${dose.time}`"
              class="flex items-center justify-between rounded-[24px] border border-white/80 bg-white/80 px-4 py-4"
            >
              <div>
                <p class="font-semibold text-brand-950">
                  {{ dose.name }}
                </p>
                <p class="text-sm text-slate-500">
                  {{ dose.dosage }} • {{ dose.time }}
                </p>
              </div>
              <Badge :variant="dose.badge">
                {{ dose.status }}
              </Badge>
            </div>
          </div>
        </Card>

        <div class="space-y-5">
          <Card class="space-y-4">
            <div class="space-y-1">
              <p class="text-sm font-semibold text-brand-500">
                Shared input
              </p>
              <h3 class="text-xl font-semibold text-brand-950">
                Form-ready medication fields
              </h3>
            </div>

            <Input
              id="medication-name"
              v-model="medicationName"
              label="Medication name"
              hint="This will later connect to the medication schema and VeeValidate forms."
              placeholder="Enter medication"
              required
            />

            <div class="flex flex-wrap gap-3">
              <Button>Save draft</Button>
              <Button variant="secondary">
                Add schedule
              </Button>
              <Button variant="ghost">
                Cancel
              </Button>
            </div>
          </Card>

          <EmptyState
            title="No archived medications yet"
            description="Shared empty states are in place so later features can stay visually consistent without rebuilding basic messaging."
          />
        </div>
      </div>
    </section>

    <section class="grid gap-5 md:grid-cols-2">
      <LoadingState label="Preparing the first authenticated dashboard flow..." />
      <ErrorState
        title="Reusable error UI is ready"
        description="This component can be dropped into feature pages, server states, or retry views without rewriting the layout."
      />
    </section>
  </PageContainer>
</template>
