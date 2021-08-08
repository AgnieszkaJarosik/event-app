import mongoose from "mongoose";

mongoose.set("useCreateIndex", true);

export async function dropAllCollections() {
	const collections = Object.keys(mongoose.connection.collections);
	for (const collectionName of collections) {
		const collection = mongoose.connection.collections[collectionName];
		try {
			await collection.drop();
		} catch (error) {

			if (error.message === "ns not found") return;

			if (error.message.includes("a background operation is currently running"))
				return;
			console.log(error.message);
		}
	}
}
