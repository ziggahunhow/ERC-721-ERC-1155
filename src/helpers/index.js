export const getRequest = async (url) => {
  try {
    return fetch(url).then(async (res) => {
      const json = await res.json();
      if (res.status !== 200) throw new Error(`${json.message}`);
      return json;
    });
  } catch (error) {
    console.log("error caught in API:", error);
    throw new Error(error);
  }
};
