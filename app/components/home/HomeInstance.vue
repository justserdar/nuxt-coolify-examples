<script setup lang="ts">
const route = useRoute();
const props = defineProps<{
  instance: {};
}>();
</script>

<template>
  <UDashboardCard
    title="Instance Health"
    description="Health of the instance"
    icon="pajamas:status-health"
  >
    <div
      class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
    >
      <div class="text-sm flex-1">
        <div>
          <div class="flex items-center gap-2">
            <Icon
              name="i-heroicons-server"
              class="text-gray-500 dark:text-gray-400"
            />
            <p class="text-gray-500 dark:text-gray-400">
              {{ props.instance.ip.replace(/\d/g, "*") }}
            </p>
          </div>
        </div>
      </div>
      <Icon
        name="i-heroicons-eye"
        class="text-gray-900 dark:text-white font-medium text-lg"
      />
    </div>
    <div class="flex justify-between">
      <div
        class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
      >
        <div class="text-sm flex-1">
          <div>
            <div
              class="flex items-center gap-2"
              :class="
                props.instance.is_reachable
                  ? 'text-green-500 dark:text-green-400'
                  : 'text-red-500 dark:text-red-400'
              "
            >
              <p class="text-gray-500 dark:text-gray-400">Proxy: </p>
              <p>
                {{ props.instance.is_reachable ? "Reachable" : "Unreachable" }}
              </p>
              <Icon
                v-if="props.instance.is_reachable"
                name="i-heroicons-check-circle"
              />
              <Icon v-else name="i-heroicons-x-circle" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
      >
        <div class="text-sm flex-1">
          <div>
            <div
              class="flex items-center gap-2"
              :class="
                props.instance.is_usable
                  ? 'text-green-500 dark:text-green-400'
                  : 'text-red-500 dark:text-red-400'
              "
            >
              <p class="text-gray-500 dark:text-gray-400">
                State:
              </p>
              <p>
                {{ props.instance.is_usable ? "Ready" : "Not usable" }}
              </p>
              <Icon
                v-if="props.instance.is_usable"
                name="i-heroicons-check-circle"
              />
              <Icon v-else name="i-heroicons-x-circle" />

            </div>
          </div>
        </div>
      </div>
    </div>
  </UDashboardCard>
</template>
