import { Position } from '@src/models';

export const ADD_POSITION = 'ADD_POSITION';
export const SET_SCANNING = 'SET_SCANNING';
export const SET_PICKER_VISIBLE = 'SET_PICKER_VISIBLE';
export const SET_MANUAL_INPUT_VISIBLE = 'SET_MANUAL_INPUT_VISIBLE';
export const SET_CODE = 'SET_CODE';
export const CLOSE_POSITION_FORM = 'CLOSE_POSITION_FORM';

export interface InventarizationTypes {
    ADD_POSITION: {
        position: Position;
    };
    SET_SCANNING: {
        scanning: boolean;
    };
    SET_PICKER_VISIBLE: {
        pickerVisible: boolean;
    };
    SET_MANUAL_INPUT_VISIBLE: {
        manualInputVisible: boolean;
    };
    SET_CODE: {
        code: string;
    };
    CLOSE_POSITION_FORM: any;
}
