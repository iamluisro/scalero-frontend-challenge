const formatSpotifyUrl = spotifyUrl => {
  const splitUrl = spotifyUrl.split('')
  const splicedUrl = splitUrl.splice(31)
  const updatedPrefix = 'https://open.spotify.com/embed/album/'
  console.log('splicedUrl', splicedUrl)
  for (let i = 0; i < splicedUrl.length; i++) {
    if (splicedUrl[i] === '?') {
      splicedUrl.splice(i)
    }
  }
  const formattedUrl = updatedPrefix + splicedUrl.join('')
  console.log('formattedUrl', formattedUrl)
  return formattedUrl
}
export {formatSpotifyUrl}
// useFormatSpotifyUrl('https://open.spotify.com/album/2guirTSEqLizK7j9i1MTTZ?si=OF2GWIv1TZuMnO7KNor54g&dl_branch=1')
//   useFormatSpotifyUrl('https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa?si=zO-UPuSMRlCgiNZGkCOL4A&dl_branch=1')
