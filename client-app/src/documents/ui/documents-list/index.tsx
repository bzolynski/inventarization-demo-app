import { Document } from '@src/models';
import React from 'react';
import { ScrollViewProps, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DocumentListPosition from '../document-list-position';
import styles from './styles';

type Props = {
    documents: Document[];
} & ScrollViewProps;

const DocumentsList: React.FC<Props> = ({ documents, ...props }) => {
    const renderPositions = () => {
        return documents.map((document) => (
            <DocumentListPosition key={document.id} document={document} />
        ));
    };

    return (
        <View style={[{ flex: 1 }]}>
            <Text style={styles.title}>Documents</Text>
            <ScrollView style={styles.container} {...props}>
                {renderPositions()}
            </ScrollView>
        </View>
    );
};

export default DocumentsList;
