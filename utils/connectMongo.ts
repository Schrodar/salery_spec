import mongoose from 'mongoose';

const connectMongodb = async () =>
  mongoose
    .connect(process.env.MONGODB_URI!, {})
    .then(() => console.log('it worked'))
    .catch((err) => console.log(err));

export default connectMongodb;
