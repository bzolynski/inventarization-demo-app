import { ITEM_ROUTE, LOCALIZATION_ROUTE } from '@src/shared/constants';
import { Item, Localization } from '@src/models';
import { AxiosResponse } from 'axios';
import axiosClient from './axios-client';

export const getMany = (): Promise<AxiosResponse<Localization[]>> =>
    axiosClient.get<Localization[]>(`${LOCALIZATION_ROUTE}/get`);
