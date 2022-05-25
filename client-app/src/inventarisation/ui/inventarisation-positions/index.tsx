import { Position } from '@src/models';
import React from 'react';
import { ScrollViewProps, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InventarisationPosition from '../inventarisation-position';

import styles from './styles';

type Props = {
    positions: Position[];
} & ScrollViewProps;

const InventarisationPositions: React.FC<Props> = ({ positions, ...props }) => {
    const renderPositions = () => {
        return positions.map((position) => (
            <InventarisationPosition key={position.id} position={position} />
        ));
    };

    return (
        <View style={[{ flex: 1 }]}>
            <Text style={styles.title}>Inventarisation positions</Text>
            <ScrollView style={styles.container} {...props}>
                {renderPositions()}
            </ScrollView>
        </View>
    );
};

export default InventarisationPositions;
