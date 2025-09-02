function downloadShorts() {
  const url = document.getElementById('shortsURL').value;

  if (!url.includes('youtube.com/shorts')) {
    alert('Please enter a valid YouTube Shorts URL.');
    return;
  }

  // Extract video ID from Shorts URL
  const videoID = url.split('/shorts/')[1]?.split('?')[0];

  if (!videoID) {
    alert('Invalid Shorts URL format.');
    return;
  }

  // Redirect to external downloader (e.g., ssyoutube)
  const redirectURL = `https://ssyoutube.com/watch?v=${videoID}`;
  window.open(redirectURL, '_blank');

  // Show result section with share/copy buttons
  const downloadLink = document.getElementById('downloadLink');
  downloadLink.href = redirectURL;
  downloadLink.textContent = 'Open Download Page';
  document.getElementById('resultSection').style.display = 'block';
}
