function loadDownloader() {
  const url = document.getElementById('shortsURL').value.trim();

  if (!url || (!url.includes('youtube.com/shorts') && !url.includes('youtu.be/'))) {
    alert('Please enter a valid YouTube Shorts URL.');
    return;
  }

  let videoID = '';

  // Extract video ID from different formats
  if (url.includes('youtube.com/shorts/')) {
    videoID = url.split('/shorts/')[1]?.split('?')[0];
  } else if (url.includes('youtu.be/')) {
    videoID = url.split('youtu.be/')[1]?.split('?')[0];
  }

  if (!videoID) {
    alert('Could not extract video ID. Please check the URL.');
    return;
  }

  const embedURL = `https://ssyoutube.com/watch?v=${videoID}`;

  document.getElementById('downloaderFrame').src = embedURL;
  document.getElementById('iframeContainer').style.display = 'block';
}
