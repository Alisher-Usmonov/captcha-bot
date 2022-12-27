export default defineEventHandler(async (evt) => {
  // handle query params
  const { id } = useQuery(evt);

  return { text: `hello, Id = ${id}` };
});
