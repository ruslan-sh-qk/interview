import {JSX} from "react";

export type TContentSwitcher = {
    title: string;
    description?: string;
    contents: TSwitcherContents;
}

export type TSwitcherContents = { [view: string]: JSX.Element };
