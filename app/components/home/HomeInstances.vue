<script setup lang="ts">

const props = defineProps<{
  instances: {};
}>();
</script>

<template>
  <UDashboardCard
    title="Coolify"
    description="Instances"
    icon="i-heroicons-server"
  >
    <NuxtLink
      v-for="(instance, index) in props.instances"
      :key="index"
      :to="`/instance/${instance.uuid}`"
      class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
    >
      <UAvatar
        v-bind="instance.avatar"
        :alt="instance.name"
        size="md"
      />

      <div class="text-sm flex-1">
        <div>
          <p class="text-gray-900 dark:text-white font-medium">
            {{ instance.name }}
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            {{ instance.description }}
          </p>
        </div>
      </div>

      <Icon name="i-heroicons-chevron-right" class="text-gray-900 dark:text-white font-medium text-lg" />
    </NuxtLink>
  </UDashboardCard>
</template>
