import Card from '@src/components/atoms/card';
import { Position } from '@src/models';
import React from 'react';
import { Text, View } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import styles from './styles';

type Props = {
    position: Position;
};

const getRandomColor = (): string => {
    const random = Math.floor(Math.random() * 255);
    return `hsl(${random}, 100%, 30%)`;
};

const InventarisationPosition = (props: Props) => {
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
                <View style={styles.firstRow}>
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
                <Text style={styles.dateText}>{props.position.date}</Text>
            </View>
        </Card>
    );
};

export default InventarisationPosition;
