import './globals.css';

import CenteredLayout from "@/shared/layouts/centered.layout";

import {PersonalForm} from "@/features/collect-data/ui/personal";
import {ContentSwitcher} from "@/features/collect-data/ui/content-switcher";
import {ProfessionalForm} from "@/features/collect-data/ui/professional";
import {TSwitcherContents} from "@/features/collect-data/types/form-switcher.types";


export default function UserData() {

    const contents: TSwitcherContents = {
        personal: <PersonalForm/>,
        professional: <ProfessionalForm/>
    }

    return (
        <CenteredLayout>
            <ContentSwitcher title={ 'Collect the data' } contents={ contents }/>
        </CenteredLayout>
    );
}