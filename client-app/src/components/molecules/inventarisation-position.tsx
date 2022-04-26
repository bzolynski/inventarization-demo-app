import { Position } from '@src/models';
import { Colors } from '@src/theme/colors';
import React from 'react';
import { StyleProp, Text, View, ViewProps, ViewStyle } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Card from '../atoms/card';

type Props = {
    position: Position;
};

const InventarisationPosition = (props: Props) => {
    const getRandomColor = (): string => {
        const random = Math.floor(Math.random() * 255);
        return `hsl(${random}, 100%, 30%)`;
    };

    return (
        <Card
            style={{
                marginHorizontal: 10,
                marginVertical: 5,
                position: 'relative',
            }}>
            <EntypoIcon
                name="dots-three-vertical"
                size={25}
                color={'hsl(0,0%,0%)'}
                style={[{ position: 'absolute', top: 10, right: 5 }]}
            />
            <View
                style={[
                    {
                        height: 33,
                        width: 6,
                        backgroundColor: getRandomColor(),
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    },
                ]}
            />
            <View
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingVertical: 10,
                    paddingLeft: 15,
                    paddingRight: 35,
                }}>
                <View
                    style={[
                        {
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 30,
                        },
                    ]}>
                    <Text
                        style={[
                            {
                                fontWeight: 'bold',
                                fontSize: 18,
                            },
                        ]}>
                        {props.position.name}
                    </Text>
                    <View
                        style={[
                            { flexDirection: 'row', alignItems: 'center' },
                        ]}>
                        <Text>Quantity: </Text>
                        <Text
                            style={[
                                {
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    color: Colors.danger,
                                },
                            ]}>
                            {props.position.quantity}
                        </Text>
                    </View>
                </View>
                <Text
                    style={[
                        {
                            fontSize: 14,
                            marginTop: 10,
                        },
                    ]}>
                    {props.position.code}
                </Text>
                <Text
                    style={[
                        {
                            fontSize: 14,
                            marginTop: 3,
                        },
                    ]}>
                    {props.position.localization}
                </Text>

                <Text
                    style={[
                        {
                            alignSelf: 'flex-end',
                            fontSize: 14,
                        },
                    ]}>
                    {props.position.date}
                </Text>
            </View>
        </Card>
    );
};

export default InventarisationPosition;
