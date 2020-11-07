import { useEffect } from "react";
import { getRequest } from "../helpers";

export default function useGetRequest(
  url,
  callback,
  updateList = [],
  condition = true
) {
  useEffect(() => {
    async function getItems() {
      const newItems = await getRequest(url);
      callback(newItems);
    }
    if (condition) {
      getItems();
    }
  }, updateList);
}
