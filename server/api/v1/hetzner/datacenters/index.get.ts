export default defineEventHandler(async (event) => {
  return useHetzner().getDatacenters()
})
