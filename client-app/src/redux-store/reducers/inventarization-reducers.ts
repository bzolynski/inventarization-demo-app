import { Position } from '@src/models';
import * as inventarizationActionTypes from '../action-types/inventarization-types';

export interface IInventarizationState {
    positions: Position[];
    scanning: boolean;
    pickerVisible: boolean;
    manualInputVisible: boolean;
    positionFormVisible: boolean;
    code: string | undefined;
}

const defaultState = (): IInventarizationState => ({
    positions: [],
    scanning: false,
    pickerVisible: false,
    manualInputVisible: false,
    positionFormVisible: false,
    code: undefined,
});

export default (state = defaultState(), action: any): IInventarizationState => {
    switch (action.type) {
        case inventarizationActionTypes.ADD_POSITION: {
            const data: inventarizationActionTypes.InventarizationTypes['ADD_POSITION'] =
                action;
            return {
                ...state,
                positions: [...state.positions, data.position],
            };
        }
        case inventarizationActionTypes.SET_SCANNING: {
            const data: inventarizationActionTypes.InventarizationTypes['SET_SCANNING'] =
                action;
            return {
                ...state,
                scanning: data.scanning,
            };
        }
        case inventarizationActionTypes.SET_PICKER_VISIBLE: {
            const data: inventarizationActionTypes.InventarizationTypes['SET_PICKER_VISIBLE'] =
                action;
            return {
                ...state,
                pickerVisible: data.pickerVisible,
            };
        }
        case inventarizationActionTypes.SET_MANUAL_INPUT_VISIBLE: {
            const data: inventarizationActionTypes.InventarizationTypes['SET_MANUAL_INPUT_VISIBLE'] =
                action;
            return {
                ...state,
                manualInputVisible: data.manualInputVisible,
            };
        }
        case inventarizationActionTypes.SET_CODE: {
            const data: inventarizationActionTypes.InventarizationTypes['SET_CODE'] =
                action;
            return {
                ...state,
                positionFormVisible: true,
                code: data.code,
            };
        }
        case inventarizationActionTypes.CLOSE_POSITION_FORM: {
            return {
                ...state,
                positionFormVisible: false,
                code: undefined,
            };
        }

        default:
            return state;
    }
};
