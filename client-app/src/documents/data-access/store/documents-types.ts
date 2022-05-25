import { Document } from '@src/models';

export const LOAD_DOCUMENTS = 'LOAD_DOCUMENTS';
export const LOAD_DOCUMENTS_SUCCESS = 'LOAD_DOCUMENTS_SUCCESS';
export const LOAD_DOCUMENTS_ERROR = 'LOAD_DOCUMENTS_ERROR';

export interface DocumentsTypes {
    LOAD_DOCUMENTS: any;
    LOAD_DOCUMENTS_SUCCESS: {
        documents: Document[];
    };
    LOAD_DOCUMENTS_ERROR: {
        error: string;
    };
}
