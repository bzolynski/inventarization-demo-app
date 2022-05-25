import { Document } from '@src/models';
import React from 'react';
import { Image, Text, View } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Card from '@src/components/atoms/card';
import styles from './styles';
import documentImg from '@assets/single-document.png';

type Props = {
    document: Document;
};

const getRandomColor = (): string => {
    const random = Math.floor(Math.random() * 255);
    return `hsl(${random}, 100%, 30%)`;
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
                style={[styles.stripe, { backgroundColor: getRandomColor() }]}
            />
            <View style={styles.content}>
                <View style={styles.firstColumn}>
                    <Image
                        style={{ width: 80, height: 80 }}
                        source={documentImg}
                    />
                </View>
                <View style={styles.secondColumn}>
                    <Text>FV 04 - 1010/2022/22r1</Text>
                    <Text>Typ: {props.document.documentType}</Text>
                    <Text>
                        Stan dokumentu: {/*props.document.documentType*/}
                    </Text>
                    <Text>Data: {/*props.document.date*/}</Text>
                </View>
                {/* <View style={styles.firstRow}>
                    <Text style={styles.name}>{props.position.name}</Text>
                    <View style={styles.quantityWrapper}>
                        <Text>Quantity: </Text>
                        <Text style={styles.quantityText}>
                            {props.position.quantity}
                        </Text>
                    </View>
                </View>
                <Text style={styles.codeText}>{props.position.code}</Text>
                <Text style={styles.localizationText}>
                    {props.position.localization}
                </Text>
                <Text style={styles.dateText}>{props.position.date}</Text> */}
            </View>
        </Card>
    );
};

export default DocumentListPosition;
