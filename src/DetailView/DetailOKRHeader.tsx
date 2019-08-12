import * as React from "react";
import { Header, TitleSize } from "azure-devops-ui/Header";
import { IHeaderCommandBarItem } from "azure-devops-ui/HeaderCommandBar";
import { useStateValue } from '../StateMangement/StateProvider';
import { Area } from "../Area/Area";

export interface IDetailOKRHeaderProps {
    selectedArea: Area;
}

export const DetailOKRHeader: React.SFC<IDetailOKRHeaderProps> = (props: IDetailOKRHeaderProps) => {

    const stateContext = useStateValue();


    const commandBarItems: IHeaderCommandBarItem[] = [
        {
            important: true,
            id: "create-okr",
            text: "New OKR", 
            onActivate: () => {
                stateContext.actions.toggleAddPanel({ expanded: true });
            },
            iconProps: {
                iconName: "Add"
            }
        }
    ];

    return (
        <div>
            <Header
                className={"detail-okr-header"}
                title={props.selectedArea.Name}
                commandBarItems={[...commandBarItems]}
                titleSize={TitleSize.Medium}
            />            
        </div>
    );
}