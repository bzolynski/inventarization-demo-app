import { ITEM_ROUTE } from '@src/constants';
import { Item } from '@src/models';
import { AxiosResponse } from 'axios';
import axiosClient from '@src/api/axios-client';

export const getByCode = (code: string): Promise<AxiosResponse<Item>> =>
    axiosClient.get<Item>(`${ITEM_ROUTE}/get-by-code/${code}`);

export const doesItemExists = (
    code: string,
): Promise<AxiosResponse<boolean>> => {
    return axiosClient.get<boolean>(`${ITEM_ROUTE}/does-item-exists/${code}`);
};

export const createItem = (item: Item): Promise<AxiosResponse<number>> => {
    return axiosClient.post(`${ITEM_ROUTE}/create`, item);
};
