import mongoose from "mongoose";

// connect our app to mongodb
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(
			`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
		);
	} catch (err) {
		console.error(`Error occured: ${err.message}`.red.underline.bold);

		process.exit(1);
	}
};

export default connectDB;
