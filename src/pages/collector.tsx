import './globals.css';

import CenteredLayout from "@/shared/layouts/centered.layout";

import {PersonalForm} from "@/features/collect-data/ui/personal";
import {FormSwitcher} from "@/features/collect-data/ui/form-switcher";
import {ProfessionalForm} from "@/features/collect-data/ui/professional";

export default function Collector() {

    return (
        <CenteredLayout>
            <FormSwitcher title={ 'Collect the data' }
                          buttons={ [
                              { label: "Personal", content: <PersonalForm/> },
                              { label: "Professional", content: <ProfessionalForm/> },
                          ] }
            />
        </CenteredLayout>
    );
}