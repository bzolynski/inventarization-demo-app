import { Position } from '@src/models';
import React from 'react';
import {
    ScrollViewProps,
    StyleProp,
    Text,
    TextStyle,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InventarisationPosition from '../molecules/inventarisation-position';

type Props = {
    positions: Position[];
    titleStyle?: StyleProp<TextStyle>;
} & ScrollViewProps;

const InventarisationPositions: React.FC<Props> = ({
    titleStyle,
    positions,
    ...props
}) => {
    const renderPositions = () => {
        return positions.map((position) => (
            <InventarisationPosition key={position.id} position={position} />
        ));
    };

    return (
        <View style={[{ flex: 1 }]}>
            <Text
                style={[
                    {
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    },
                    titleStyle,
                ]}>
                Inventarisation positions
            </Text>
            <ScrollView style={{ overflow: 'visible', flex: 1 }} {...props}>
                {renderPositions()}
            </ScrollView>
        </View>
    );
};

export default InventarisationPositions;
