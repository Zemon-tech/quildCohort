import mongoose, { Schema, Document } from 'mongoose';

export interface IApplication extends Document {
    name: string;
    email: string;
    phone: string;
    ageGroup: string;
    college: string;
    branch: string;
    year: string;
    experienceLevel: string;
    technologies: string[];
    projectsLevel: string;
    hasGithub: string;
    githubLink?: string;
    motivation: string;
    priority: string;
    interests: string[];
    weeklyCommitment: string;
    learningStyle: string;
    consistency: string;
    source: string;
    createdAt: Date;
}

const ApplicationSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    ageGroup: { type: String, required: true },
    college: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: String, required: true },
    experienceLevel: { type: String, required: true },
    technologies: { type: [String], required: true },
    projectsLevel: { type: String, required: true },
    hasGithub: { type: String, required: true },
    githubLink: { type: String },
    motivation: { type: String, required: true },
    priority: { type: String, required: true },
    interests: { type: [String], required: true },
    weeklyCommitment: { type: String, required: true },
    learningStyle: { type: String, required: true },
    consistency: { type: String, required: true },
    source: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);
