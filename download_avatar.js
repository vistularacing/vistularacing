const https = require('https');
const fs = require('fs');

const url = 'https://i.ibb.co/60qtzqTj/dejworek-avatar.jpg'; // Uploaded the provided avatar to a temporary image host to download it clean
const download = (url, dest, cb) => {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(cb);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    if (cb) cb(err.message);
  });
};

download(url, 'avatar_dejworek.jpg', (err) => {
    if (err) console.error('Error:', err);
    else console.log('Downloaded avatar successfully.');
});
