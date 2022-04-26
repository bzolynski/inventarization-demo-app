import React from 'react';
import { Image } from 'react-native';
import { Pressable, StyleSheet, Text } from 'react-native';
import { StyleProp, View, ViewStyle } from 'react-native';
import Card from '../atoms/card';

type CustomProps = {
    styles?: StyleProp<ViewStyle>;
    image?: string;
    title: string;
    img: any;
    onPress: Function;
};

type Props = CustomProps;

const MenuTile: React.FC<Props> = (props) => {
    return (
        <Card style={[props.styles, { aspectRatio: 4 / 3 }]}>
            <Pressable
                onPress={() => props.onPress()}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#F0F0F0' : '#FFFFFF',
                        width: '100%',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                ]}>
                <Image style={{ width: 50, height: 50 }} source={props.img} />
                <Text>{props.title}</Text>
            </Pressable>
        </Card>
    );
};

export default MenuTile;
