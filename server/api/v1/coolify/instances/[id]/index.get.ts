export default defineEventHandler(async (event) => {
  const uuid = getRouterParam(event, 'id')
  const instances = await useCoolify().instances()

  return instances[0].default.find((instance) => instance.uuid === uuid)
})

