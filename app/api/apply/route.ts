import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Application from "@/lib/models/Application";
import { applicationSchema } from "@/lib/form-config";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();

        // Validate request body
        const validatedData = applicationSchema.safeParse(body);

        if (!validatedData.success) {
            return NextResponse.json(
                { message: "Validation failed", errors: validatedData.error.issues },
                { status: 400 }
            );
        }

        // Check for duplicate email
        const existing = await Application.findOne({ email: validatedData.data.email });
        if (existing) {
            return NextResponse.json(
                { message: "You have already submitted an application with this email." },
                { status: 409 }
            );
        }

        // Save to database
        const application = new Application(validatedData.data);
        await application.save();

        return NextResponse.json(
            { message: "Application submitted successfully" },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Submission error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
