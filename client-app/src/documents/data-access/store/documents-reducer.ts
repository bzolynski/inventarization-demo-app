import { Document } from '@src/models';
import { GenericState } from '@src/models/state.model';
import * as dosumentsActionTypes from './documents-types';

export interface DocumentsState extends GenericState<Document[]> {}

const defaultState = (): DocumentsState => ({
    data: null,
    error: null,
    status: 'pending',
});

export default (state = defaultState(), action: any): DocumentsState => {
    switch (action.type) {
        case dosumentsActionTypes.LOAD_DOCUMENTS: {
            const data: dosumentsActionTypes.DocumentsTypes['LOAD_DOCUMENTS'] =
                action;
            return {
                ...state,
                data: null,
                error: null,
                status: 'loading',
            };
        }
        case dosumentsActionTypes.LOAD_DOCUMENTS_SUCCESS: {
            const data: dosumentsActionTypes.DocumentsTypes['LOAD_DOCUMENTS_SUCCESS'] =
                action;
            return {
                ...state,
                data: data.documents,
                status: 'success',
            };
        }
        case dosumentsActionTypes.LOAD_DOCUMENTS_ERROR: {
            const data: dosumentsActionTypes.DocumentsTypes['LOAD_DOCUMENTS_ERROR'] =
                action;
            return {
                ...state,
                error: data.error,
                status: 'error',
            };
        }
        default:
            return state;
    }
};
