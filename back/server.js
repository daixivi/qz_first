const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// 🔥 加入这一行，解决跨域问题
const cors = require('cors');
app.use(cors());

// 允许接收 JSON 格式请求（后面可能会用到，先写上）
app.use(express.json());

// 你的接口
app.get('/hello', (req, res) => {
  res.send('你好，这是后端返回的数据！');
});

app.listen(port, () => {
  console.log(`🚀 后端启动成功！请访问：http://localhost:${port}/hello`);
});