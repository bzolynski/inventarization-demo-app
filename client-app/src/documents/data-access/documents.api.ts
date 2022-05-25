import { INVENTARISATION_DOCUMENT_ROUTE } from '@src/constants';
import { AxiosResponse } from 'axios';
import axiosClient from '@src/api/axios-client';

export class DocumentsApi {
    static getMany = (): Promise<AxiosResponse<Document[]>> =>
        axiosClient.get<Document[]>(`${INVENTARISATION_DOCUMENT_ROUTE}/get`);
}
