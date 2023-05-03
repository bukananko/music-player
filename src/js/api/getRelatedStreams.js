export default async function getRelatedStreams(musicIndex, relatedStreams) {
  const endpoint = `https://pipedapi.kavin.rocks/streams/${relatedStreams[
    musicIndex
  ].url.slice(9)}`;

  const responseLoad = await fetch(endpoint);
  return responseLoad.json();
}
