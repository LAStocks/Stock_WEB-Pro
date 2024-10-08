const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

// Static 파일을 제공 (HTML 파일 및 관련 자원)
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'common')));
app.use(express.static(path.join(__dirname, 'static')));
app.use('/static', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'index.html')); // `index.html` 파일이 있음을 가정
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});