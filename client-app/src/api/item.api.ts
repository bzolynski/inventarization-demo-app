import { ITEM_ROUTE } from '@src/constants';
import { Item } from '@src/models';
import { AxiosResponse } from 'axios';
import axiosClient from './axios-client';

export const getByCode = (code: string): Promise<AxiosResponse<Item>> =>
    axiosClient.get<Item>(`${ITEM_ROUTE}/get-by-code/${code}`);

export const doesItemExists = (
    code: string,
): Promise<AxiosResponse<boolean>> => {
    return axiosClient.get<boolean>(`${ITEM_ROUTE}/does-item-exists/${code}`);
};
