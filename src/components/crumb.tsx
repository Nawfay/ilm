import { ArrowLeft } from "lucide-react";
import { Button } from "./button"; // optional: shadcn/ui button
import React from "react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
  onBack?: () => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs, onBack }) => {
  return (
    <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm">
        <div className="flex items-center space-x-1 text-muted-foreground">
            {crumbs.map((crumb, index) => (
            <div className="flex items-center" key={index}>
                {crumb.href ? (
                <a href={crumb.href} className="hover:underline">
                    {crumb.label}
                </a>
                ) : (
                <span>{crumb.label}</span>
                )}
                {index < crumbs.length - 1 && <span className="mx-1">/</span>}
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

