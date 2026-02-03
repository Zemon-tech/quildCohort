import * as React from "react";
import { Card, CardContent } from "./ui/card";

interface FeaturePreviewCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function FeaturePreviewCard({ title, subtitle, imageUrl }: FeaturePreviewCardProps) {
  return (
    <Card className="rounded-none border-0 bg-transparent p-0 text-zinc-300">
      <div className="relative w-full overflow-hidden bg-black/40">
        <div
          className="h-[260px] w-full bg-cover bg-center sm:h-[280px] md:h-[300px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <CardContent className="px-0 pt-6">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-zinc-500">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
