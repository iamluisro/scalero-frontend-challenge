const formatSpotifyUrl = spotifyUrl => {
  const splitUrl = spotifyUrl.split('')
  // all spotify album links are going to have the same prefix, so it's kinda safe to use this
  const splicedUrl = splitUrl.splice(31)
  const updatedPrefix = 'https://open.spotify.com/embed/album/'
  for (let i = 0; i < splicedUrl.length; i++) {
    if (splicedUrl[i] === '?') {
      splicedUrl.splice(i)
    }
  }
  const formattedUrl = updatedPrefix + splicedUrl.join('')
  return formattedUrl
}
export {formatSpotifyUrl}
