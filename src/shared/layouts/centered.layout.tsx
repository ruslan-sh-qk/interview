import React from "react";

export default function CenteredLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700">
            <div className=" bg-white p-8 rounded-lg shadow-md w-full max-w-md gap-1">
                {children}
            </div>
        </div>
    );
}