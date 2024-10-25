export default defineEventHandler(async (event) => {
  // TODO: Add your own auth check here

  const instances = await useCoolify().instances()

  return instances[0].default
})

