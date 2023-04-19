import { search, filter } from "../constants/constants.js";

export default async function getSongs() {
  const url = `https://pipedapi.kavin.rocks/search?q=${search.value}&filter=${filter.value}`;
  const response = await fetch(url);
  return response.json();
}
