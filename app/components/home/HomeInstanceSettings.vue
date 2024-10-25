<script setup lang="ts">
const props = defineProps<{
  instance: {},
  loading: boolean
}>();
</script>

<template>
  <UDashboardCard
    :loading="props.loading"
    title="Instance Settings"
    description="Settings of the instance"
    icon="i-heroicons-cog-6-tooth"
  >

    <!-- Concurrent Builds -->
    <div
      class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
    >
      <div class="text-sm flex-1">
        <div>
          <div class="flex items-center gap-2">
            <Icon name="i-heroicons-server" />
            <p>Concurrent Builds: {{ props.instance.settings.concurrent_builds }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Docker Cleanup Frequency -->
    <div
      class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
    >
      <div class="text-sm flex-1">
        <div>
          <div class="flex items-center gap-2">
            <Icon name="i-heroicons-refresh" />
            <p>Docker Cleanup Frequency: {{ props.instance.settings.docker_cleanup_frequency }}</p>
          </div>
        </div>
      </div>
    </div>
  </UDashboardCard>
</template>
