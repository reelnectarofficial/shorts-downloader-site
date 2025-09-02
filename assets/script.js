function downloadShorts() {
  const url = document.getElementById('shortsURL').value;
  if (!url.includes('youtube.com/shorts')) {
    alert('Please enter a valid YouTube Shorts URL.');
    return;
  }

  // Simulated download logic (replace with real API or redirect)
  const videoID = url.split('/shorts/')[1]?.split('?')[0];
  const downloadURL = `https://example.com/download/${videoID}`; // Replace with real logic

  document.getElementById('downloadLink').href = downloadURL;
  document.getElementById('resultSection').style.display = 'block';
}

function copyLink() {
  const link = document.getElementById('downloadLink').href;
  navigator.clipboard.writeText(link);
  alert('Link copied to clipboard!');
}

function shareLink() {
  const link = document.getElementById('downloadLink').href;
  window.open(`https://twitter.com/intent/tweet?text=Download+YouTube+Shorts:+${link}`, '_blank');
}
