const fetchSearch = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];

  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!apiRes.ok)
    throw new Error(`petsearch fetch not ok ${animal}, ${location}, ${breed}`);

  return apiRes.json();
};

export default fetchSearch;
