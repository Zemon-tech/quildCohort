import { z } from "zod";

export const applicationSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long").regex(/^[+\d][\d\s\-()]{8,14}$/, "Invalid phone number"),
    ageGroup: z.string().min(1, "Please select an age group"),
    college: z.string().min(2, "College name is too short"),
    branch: z.string().min(1, "Please select your branch"),
    year: z.string().min(1, "Please select your year of study"),
    experienceLevel: z.string().min(1, "Please select your experience level"),
    technologies: z.array(z.string()).min(1, "Select at least one technology"),
    projectsLevel: z.string().min(1, "Please select your project level"),
    hasGithub: z.string().min(1, "Please select an option"),
    githubLink: z.string().optional().or(z.literal("")),
    motivation: z.string().min(1, "Please select your primary motivation"),
    priority: z.string().min(1, "Please select your current priority"),
    interests: z.array(z.string()).min(1, "Select at least one area of interest"),
    weeklyCommitment: z.string().min(1, "Please select your weekly commitment"),
    learningStyle: z.string().min(1, "Please select preferred learning style"),
    consistency: z.string().min(1, "Please select consistency duration"),
    source: z.string().min(1, "Please tell us how you heard about us"),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

export type QuestionType = "text" | "mcq" | "multi-select";

export interface Question {
    id: keyof ApplicationFormData;
    label: string;
    type: QuestionType;
    options?: string[];
    placeholder?: string;
    condition?: (data: Partial<ApplicationFormData>) => boolean;
}

export const questions: Question[] = [
    // Basic Info
    { id: "name", label: "What is your full name?", type: "text", placeholder: "Type your answer here..." },
    { id: "email", label: "What is your email address?", type: "text", placeholder: "name@example.com" },
    { id: "phone", label: "What is your phone number?", type: "text", placeholder: "+91 98765 43210" },
    {
        id: "ageGroup",
        label: "Which age group do you fall into?",
        type: "mcq",
        options: ["Under 18", "18-22", "23-26", "27+"]
    },
    { id: "college", label: "Which college do you attend?", type: "text", placeholder: "College Name" },
    {
        id: "branch",
        label: "What is your branch / major?",
        type: "mcq",
        options: ["Computer Science", "Information Technology", "Electronics", "Other"]
    },
    {
        id: "year",
        label: "What is your current year of study?",
        type: "mcq",
        options: ["1st Year", "2nd Year", "3rd Year", "4th Year", "Postgrad / Working Professional"]
    },

    // Technical Exposure
    {
        id: "experienceLevel",
        label: "How long have you been programming?",
        type: "mcq",
        options: ["Less than 6 months", "6 months - 1 year", "1-2 years", "2+ years"]
    },
    {
        id: "technologies",
        label: "Which technologies have you used?",
        type: "multi-select",
        options: ["React/Next.js", "Node.js/Express", "Python/Django", "Java/Spring", "C++/Rust", "Mobile (React Native/Flutter)", "Other"]
    },
    {
        id: "projectsLevel",
        label: "Have you built any projects before?",
        type: "mcq",
        options: ["No, just started", "Followed tutorials", "Built a few independent projects", "Published products / Work experience"]
    },
    {
        id: "hasGithub",
        label: "Do you have a GitHub or Portfolio?",
        type: "mcq",
        options: ["Yes, I do", "No, not yet"]
    },
    {
        id: "githubLink",
        label: "Great! Link your GitHub or Portfolio",
        type: "text",
        placeholder: "https://github.com/...",
        condition: (data) => data.hasGithub === "Yes, I do"
    },

    // Motivation
    {
        id: "motivation",
        label: "What is your primary reason for joining Quild?",
        type: "mcq",
        options: ["Upskilling", "Networking", "Building products", "Getting a job", "Curiosity"]
    },
    {
        id: "priority",
        label: "What is your current priority?",
        type: "mcq",
        options: ["Academics", "Self-learning", "Job search", "Internships", "Side projects"]
    },
    {
        id: "interests",
        label: "What areas of interest do you have?",
        type: "multi-select",
        options: ["Frontend", "Backend", "Fullstack", "AI/ML", "Web3/Blockchain", "Design", "DevOps"]
    },

    // Commitment
    {
        id: "weeklyCommitment",
        label: "How much time can you commit weekly?",
        type: "mcq",
        options: ["Under 5 hours", "5-10 hours", "10-20 hours", "20+ hours"]
    },
    {
        id: "learningStyle",
        label: "What is your preferred learning style?",
        type: "mcq",
        options: ["Videos", "Reading/Documentation", "Hands-on projects", "Collaborative/Group learning"]
    },
    {
        id: "consistency",
        label: "How long can you maintain this consistency?",
        type: "mcq",
        options: ["1 month", "3 months", "6 months", "Ongoing"]
    },

    // Discovery
    {
        id: "source",
        label: "How did you hear about Quild?",
        type: "mcq",
        options: ["LinkedIn", "Twitter/X", "Friend/Referral", "University", "Other"]
    },
];
