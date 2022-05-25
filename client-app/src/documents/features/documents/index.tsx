import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '@src/redux-store/reducers/reducers';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DocumentsStackParamList } from '@src/routing/documents-stack';
import { DocumentsState } from '@src/documents/data-access/store/documents-reducer';
import { loadDocuments } from '@src/documents/data-access/store/documents-actions';
import DocumentsList from '@src/documents/ui/documents-list';
import PaddingContainer from '@src/components/templates/padding-container';
import TitleBackButton from '@src/components/molecules/title-back-button';
import { View } from 'react-native';
import TopBarSafeContainer from '@src/components/templates/top-bar-safe-container';
import { AppButton } from '@src/components/atoms/app-button';
import { Colors } from '@src/theme/colors';
import styles from './styles';

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

    return (
        <View style={styles.wrapper}>
            <TopBarSafeContainer>
                <PaddingContainer>
                    <TitleBackButton title="Documents" />
                </PaddingContainer>
                <AppButton
                    styles={styles.addButton}
                    buttonStyle="raised"
                    color={Colors.secondary}
                    title="New document"
                    onPress={() => console.log('')}></AppButton>
                <DocumentsList documents={data ?? []}></DocumentsList>
            </TopBarSafeContainer>
        </View>
    );
};

export default DocumentsScreen;
