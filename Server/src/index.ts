import app from './app';
import mongoose from 'mongoose';
import * as env from 'dotenv';

env.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};

connect();

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
