document.getElementById('thumbnailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const videoUrl = document.getElementById('videoUrl').value;
    const videoId = videoUrl.split('v=')[1].split('&')[0];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const thumbnailResult = document.getElementById('thumbnailResult');
    thumbnailResult.innerHTML = `<a href="${thumbnailUrl}" download><img src="${thumbnailUrl}" alt="YouTube Thumbnail"></a>`;
});
