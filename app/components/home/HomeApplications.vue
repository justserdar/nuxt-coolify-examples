<script setup lang="ts">
const route = useRoute();
// const { data: applications } = await useLazyFetch(
//   `/api/v1/coolify/instances/${route.params.id}/applications`
// );
// console.log(applications);
</script>

<template>
  <UDashboardCard
    title="Applications"
    description="Applications of the instance"
    icon="carbon:container-services"
  >

    <UDashboardCard
      title="Nuxlify"
      description="Nuxt applicatiion running Nuxlify"
    />

    <UDashboardCard
      title="Umami"
      description="Umami analytics"
    />

  </UDashboardCard>
</template>
