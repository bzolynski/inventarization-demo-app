import { Document, DocumentState, DocumentType } from '@src/models';
import React from 'react';
import { Image, Text, View } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Card from '@src/shared/ui/card';
import styles from './styles';
import documentImg from '@assets/single-document.png';

type Props = {
    document: Document;
};

const getColor = (type: DocumentType): string => {
    let hue = 0;
    switch (type) {
        case DocumentType.inventarisation:
            hue = 150;
            break;
    }
    return `hsl(${hue}, 100%, 30%)`;
};

const getImage = (type: DocumentType): any => {
    switch (type) {
        case DocumentType.inventarisation:
            return documentImg;
        default:
            return documentImg;
    }
};

const DocumentListPosition = (props: Props) => {
    return (
        <Card style={styles.wrapper}>
            <EntypoIcon
                name="dots-three-vertical"
                size={25}
                color={'hsl(0,0%,0%)'}
                style={styles.dotsIcon}
            />
            <View
                style={[
                    styles.stripe,
                    { backgroundColor: getColor(props.document.type) },
                ]}
            />
            <View style={styles.content}>
                <View style={styles.firstColumn}>
                    <Image
                        style={{ width: 70, height: 70 }}
                        source={getImage(props.document.type)}
                    />
                </View>
                <View style={styles.secondColumn}>
                    <Text style={styles.number}>{props.document.number}</Text>
                    <Text>
                        Type: {DocumentType[props.document.type].toString()}
                    </Text>
                    <Text>
                        State: {DocumentState[props.document.state].toString()}
                    </Text>
                    <Text>Date: {props.document.date}</Text>
                </View>
            </View>
        </Card>
    );
};

export default DocumentListPosition;
