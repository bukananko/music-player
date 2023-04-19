export default async function getStreamUrl(mergedNextPage, index) {
  const endpoint = `https://pipedapi.kavin.rocks/streams/${mergedNextPage[
    index
  ].url.slice(9)}`;
  const response = await fetch(endpoint);
  return await response.json();
}
