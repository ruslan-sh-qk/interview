import React from "react";

export type TFormSwitcher = {
    title: string;
    description?: string;
    buttons: TSwitcherButton[];
}

export type TSwitcherButton = {
    label: string;
    content: React.ReactNode;
}