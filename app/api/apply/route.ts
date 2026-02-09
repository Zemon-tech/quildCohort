import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Application from "@/lib/models/Application";
import { applicationSchema } from "@/lib/form-config";

export async function POST(req: NextRequest) {
    try {
        console.log("[API] Starting application submission...");
        console.log("[API] Connecting to database...");
        await connectDB();
        console.log("[API] Database connected successfully");
        
        const body = await req.json();
        console.log("[API] Request body received:", JSON.stringify(body, null, 2));

        // Validate request body
        const validatedData = applicationSchema.safeParse(body);

        if (!validatedData.success) {
            console.error("[API] Validation failed:", validatedData.error.issues);
            return NextResponse.json(
                { message: "Validation failed", errors: validatedData.error.issues },
                { status: 400 }
            );
        }

        console.log("[API] Data validated successfully");

        // Check for duplicate email
        console.log("[API] Checking for duplicate email:", validatedData.data.email);
        const existing = await Application.findOne({ email: validatedData.data.email });
        if (existing) {
            console.log("[API] Duplicate email found:", validatedData.data.email);
            return NextResponse.json(
                { message: "You have already submitted an application with this email." },
                { status: 409 }
            );
        }

        // Save to database
        console.log("[API] Saving application to database...");
        const application = new Application(validatedData.data);
        await application.save();
        console.log("[API] Application saved successfully");

        return NextResponse.json(
            { message: "Application submitted successfully" },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("[API] Submission error:");
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
        console.error("Full error object:", JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
        
        return NextResponse.json(
            { message: "Internal server error", error: error.message },
            { status: 500 }
        );
    }
}
