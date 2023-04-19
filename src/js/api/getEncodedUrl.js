export default function encodedUrl(nextPageUrl) {
  const nextPageParse = JSON.parse(nextPageUrl);
  return encodeURIComponent(JSON.stringify(nextPageParse));
}
