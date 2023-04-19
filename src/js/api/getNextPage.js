import { search, filter } from "../constants/constants.js";

export default async function getNextPage(encodedUrl) {
  const urlNextPage = `https://pipedapi.kavin.rocks/nextpage/search?nextpage=${encodedUrl}&q=${search.value}&filter=${filter.value}`;

  const response = await fetch(urlNextPage);
  return response.json();
}
