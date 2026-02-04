import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Apply Now",
    description: "Begin your journey with Quild Cohort 2.0. Apply to join the advanced engineering fellowship.",
    openGraph: {
        title: "Apply for Quild Cohort 2.0",
        description: "Begin your journey with Quild Cohort 2.0. Apply to join the advanced engineering fellowship.",
    }
};

export default function ApplyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
