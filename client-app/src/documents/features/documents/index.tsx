import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '@src/redux-store/reducers/reducers';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DocumentsStackParamList } from '@src/routing/documents-stack';
import { DocumentsState } from '@src/documents/data-access/store/documents-reducer';
import { loadDocuments } from '@src/documents/data-access/store/documents-actions';

type NavigationProp = NativeStackScreenProps<
    DocumentsStackParamList,
    'Documents'
>;

const DocumentsScreen = ({ navigation }: NavigationProp) => {
    const { data } = useSelector<IStore, DocumentsState>(
        (state) => state.documentsReducer,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDocuments());
    }, []);

    return <></>;
};

export default DocumentsScreen;
