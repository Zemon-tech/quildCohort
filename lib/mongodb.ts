import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;


// Check moved inside connectDB function to prevent build-time errors


/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
    console.log("[DB] Starting database connection...");
    console.log("[DB] MONGODB_URI from env:", process.env.MONGODB_URI ? "SET" : "NOT SET");
    console.log("[DB] All env vars starting with MONGO:", Object.keys(process.env).filter(k => k.startsWith('MONGO')));
    
    if (cached.conn) {
        console.log("[DB] Using cached connection");
        return cached.conn;
    }

    if (!cached.promise) {
        if (!MONGODB_URI) {
            console.error("[DB] MONGODB_URI is undefined!");
            console.error("[DB] Available env vars:", Object.keys(process.env));
            throw new Error('Please define the MONGODB_URI environment variable inside .env');
        }

        console.log("[DB] Creating new connection promise...");
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            console.log("[DB] MongoDB connected successfully");
            return mongoose;
        }).catch((err) => {
            console.error("[DB] MongoDB connection error:", err);
            throw err;
        });
    }

    try {
        cached.conn = await cached.promise;
        console.log("[DB] Connection established and cached");
    } catch (e) {
        console.error("[DB] Failed to establish connection:", e);
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default connectDB;
