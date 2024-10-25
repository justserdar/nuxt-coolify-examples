<script setup lang="ts">
import { sub } from "date-fns";
import type { Period, Range } from "~/types";

const { isNotificationsSlideoverOpen } = useDashboard();
const route = useRoute();
const { data: instance, refresh, status } = await useFetch(
  `/api/v1/coolify/instances/${route.params.id}`,
  {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  },
);

const items = [
  [
    {
      label: "New mail",
      icon: "i-heroicons-paper-airplane",
      to: "/inbox",
    },
    {
      label: "New user",
      icon: "i-heroicons-user-plus",
      to: "/users",
    },
  ],
];

const range = ref<Range>({
  start: sub(new Date(), { days: 14 }),
  end: new Date(),
});
const period = ref<Period>("daily");
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Home">
        <template #right>
          <UTooltip text="Notifications" :shortcuts="['N']">
            <UButton
              color="gray"
              variant="ghost"
              square
              @click="isNotificationsSlideoverOpen = true"
            >
              <UChip color="red" inset>
                <UIcon name="i-heroicons-bell" class="w-5 h-5" />
              </UChip>
            </UButton>
          </UTooltip>

          <UDropdown :items="items">
            <UButton
              icon="i-heroicons-plus"
              size="md"
              class="ml-1.5 rounded-full"
            />
          </UDropdown>
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>
        <UDashboardSection
          icon="i-heroicons-server"
          :loading="status === 'pending'"
          :title="instance.name"
          :description="instance.description"
          orientation="vertical"
          class="px-4 mt-6"
        />

        </template>
        <template #right>
        <UDashboardSection
          icon="ic:outline-call-to-action"
          :loading="status === 'pending'"
          orientation="vertical"
          class="px-4 mt-6"
          :links="[
            {
              label: 'Refresh Status',
              click: () => refresh(),
            },
            {
              label: 'Restart',
              color: 'orange',
              click: () => refresh(),
            },
            {
              label: 'Stop',
              color: 'red',
              click: () => refresh(),
            }
            ]"
          />
        </template>
      </UDashboardToolbar>

      <UDashboardPanelContent>
        <div class="grid lg:grid-cols-2 lg:items-start gap-8">
          <HomeInstance :loading="status === 'pending'" :instance="instance" />
          <HomeInstanceSettings :loading="status === 'pending'" :instance="instance" />

          <HomeApplications class="col-span-2" :loading="status === 'pending'" :instance="instance" />
        </div>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
