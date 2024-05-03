export interface RootState{
    navbar: {
        filterState: {
          isRegional: boolean;
          isNational: boolean;
          isInternational: boolean;
        };
        viewMembers: boolean;
        darkMode: boolean;
    };
}
export interface ButtonProps {
    label: string;
    id?: string;
    onClick: Function;
    purpleButton?: boolean;
    cyanButton?: boolean;
    transparentButton?: boolean;
}

export interface BlogProps {
    title: string;
    tag: string;
    description: string;
    isSelected?: boolean;
}