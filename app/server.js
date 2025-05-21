
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const contactRoutes = require('./routes');
const app = express();
app.use(cors({
    origin: 'http://localhost:5174',
    methods: ['POST','GET','OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}));
app.use(express.json());



app.use('/api', require('./routes'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => {
    console.error('MongoDB connection failed', err.message);
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
