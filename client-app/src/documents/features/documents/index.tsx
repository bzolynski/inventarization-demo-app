import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '@src/redux-store/reducers/reducers';
import { AxiosError } from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DocumentsStackParamList } from '@src/routing/documents-stack';
import { DocumentsState } from '@src/documents/data-access/store/documents-reducer';

type NavigationProp = NativeStackScreenProps<
    DocumentsStackParamList,
    'Documents'
>;

const DocumentsScreen = ({ navigation }: NavigationProp) => {
    const { data } = useSelector<IStore, DocumentsState>(
        (state) => state.documentsReducer,
    );

    useEffect(() => {}, []);

    const onError = (error: Error | AxiosError) => {
        console.error(error);
    };

    return <></>;
};

export default DocumentsScreen;
