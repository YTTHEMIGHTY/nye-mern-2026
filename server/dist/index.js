import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
app.get('/', (req, res) => {
    res.header('Content-Type', 'text/plain');
    res.json({ message: 'Jai Shree Ram, Welcome to the NYE MERN 2026 Server! Happy New Year!' });
    //   res.send('Jai Shree Ram, Welcome to the NYE MERN 2026 Server! Happy New Year!')
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map