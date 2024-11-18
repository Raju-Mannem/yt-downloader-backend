const express = require('express');
const ytdl = require('ytdl-core');

const app = express();

app.get('/download', async (req, res) => {
    const videoURL = req.query.url;
    if (!videoURL) {
        return res.status(400).send('URL is required');
    }

    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(videoURL, {
        format: 'mp4'
    }).pipe(res);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
