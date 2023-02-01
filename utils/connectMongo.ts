import mongoose from "mongoose";

const options = {
  useUnifiedTopology: true,
};

const connectMongodb = async () =>
  mongoose
    .connect(process.env.MONGODB_URI!, {
      dbName: `app`,
      autoIndex: true,
    })
    .then((on) => console.log(" it works !!"))
    .catch((err) => console.log(err));

export default connectMongodb;
