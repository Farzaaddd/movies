const createQueryObject = (existingQuery, newParams) => {
  return {
    ...existingQuery,
    ...newParams,
  };
};

const getInitialQuery = (searchParams) => {
  let query = {};
  for (let [key, value] of searchParams.entries()) {
    query[key] = value;
  }
  return query;
};

export { createQueryObject, getInitialQuery };
