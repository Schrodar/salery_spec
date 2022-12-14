import mongoose from 'mongoose';

const options = {
  dbname: 'users',
  autoIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const connectMongodb = async () =>
  mongoose
    .connect(process.env.MONGODB_URI!, options)
    .then(() => console.log('it worked'))
    .catch((err) => console.log(err));

export default connectMongodb;
