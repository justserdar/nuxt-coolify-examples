<script setup lang="ts">

const { data: locations } = await useLazyFetch('/api/v1/hetzner/datacenters')

</script>

<template>
  <UDashboardCard
    title="Hetzner"
    description="Datacenter Locations"
    icon="simple-icons:hetzner"
  >
    <NuxtLink
      v-for="(datacenter, index) in locations.datacenters"
      :key="index"
      class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
    >
      <UAvatar
        v-bind="datacenter.avatar"
        :alt="datacenter.location.country"
        size="md"
      />

      <div class="text-sm flex-1">
        <div>
          <p class="text-gray-900 dark:text-white font-medium">
            {{ datacenter.location.city }}
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            {{ datacenter.location.network_zone }}
          </p>
        </div>
      </div>

      <p class="text-gray-900 dark:text-white font-medium text-lg">
        +
      </p>
    </NuxtLink>
  </UDashboardCard>
</template>
