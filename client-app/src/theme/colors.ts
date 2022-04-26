export interface ColorSet {
    lighter: string;
    default: string;
    darker: string;
    constrast: string;
}
export interface ColorPalette {
    main: ColorSet;
    secondary: ColorSet;
    success: string;
    warning: string;
    danger: string;
    white: ColorSet;
    black: ColorSet;
    gray: ColorSet;
}

const ContrastColors = {
    dark: '#000000',
    light: '#FFFFFF',
};

export const Colors: ColorPalette = {
    main: {
        lighter: '#0050EE',
        default: '#003FBB',
        darker: '#0036A2',
        constrast: ContrastColors.light,
    },
    secondary: {
        lighter: '#FFC14D',
        default: '#FFA700',
        darker: '#DC9000',
        constrast: ContrastColors.dark,
    },
    success: '#28A745',
    warning: '#FFC107',
    danger: '#DC3545',
    white: {
        lighter: '#FFFFFF',
        default: '#FFFFFF',
        darker: '#EEEEEE',
        constrast: ContrastColors.dark,
    },
    black: {
        lighter: '#111111',
        default: '#000000',
        darker: '#000000',
        constrast: ContrastColors.light,
    },
    gray: {
        lighter: '',
        default: '#F5F9FC',
        darker: '#F5F9FC',
        constrast: ContrastColors.dark,
    },
};

export const BackgroundColors = {
    mainBgColor: Colors.main.default,
    secondaryBgColor: '#f1f2f5',
};
