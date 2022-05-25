import { Position } from '@src/models';
import { Dispatch } from 'redux';
import * as documentsTypes from './documents-types';
import { DocumentsApi } from '../documents.api';
import { AxiosError } from 'axios';

export const loadDocuments = () => (dispatch: Dispatch) => {
    dispatch({
        type: documentsTypes.LOAD_DOCUMENTS,
    });
    DocumentsApi.getMany()
        .then((response) =>
            dispatch({
                type: documentsTypes.LOAD_DOCUMENTS_SUCCESS,
                documents: response.data,
            }),
        )
        .catch((error: AxiosError) =>
            dispatch({
                type: documentsTypes.LOAD_DOCUMENTS_ERROR,
                error: error.message,
            }),
        );
};
