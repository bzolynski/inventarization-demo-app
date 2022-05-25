import { Position } from '@src/models';
import { Dispatch } from 'redux';
import * as inventarizationTypes from '../action-types/inventarization-types';

export const addPosition = (position: Position) => (dispatch: Dispatch) => {
    dispatch({
        type: inventarizationTypes.ADD_POSITION,
        position: position,
    });
};

export const setScanning = (scanning: boolean) => (dispatch: Dispatch) => {
    dispatch({
        type: inventarizationTypes.SET_SCANNING,
        scanning: scanning,
    });
};

export const setPickerVisible =
    (pickerVisible: boolean) => (dispatch: Dispatch) => {
        dispatch({
            type: inventarizationTypes.SET_PICKER_VISIBLE,
            pickerVisible: pickerVisible,
        });
    };

export const setManualInputVisible =
    (manualInputVisible: boolean) => (dispatch: Dispatch) => {
        dispatch({
            type: inventarizationTypes.SET_MANUAL_INPUT_VISIBLE,
            manualInputVisible: manualInputVisible,
        });
    };
