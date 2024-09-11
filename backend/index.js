import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'; 
import authRoutes from './routes/auth.route.js';
import PostRoutes from './routes/post.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/user', userRoutes); // Adjust the path and prefix as needed
app.use('/api/auth', authRoutes); 
app.use('/api/post', PostRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
mongoose.connect(process.env.MONGO)
.then(()=>{
  console.log('MongoDB is connected');
})
.catch((err) => {
  console.log(err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
    
