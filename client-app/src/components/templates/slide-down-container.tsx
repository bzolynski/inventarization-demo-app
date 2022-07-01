import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BackgroundColors, Colors } from '@src/shared/theme/colors';
import NavigateBackButton from '@src/components/molecules/navigate-back-button';

type Props = {
    title: string;
};

export const SlideDownContainer: React.FC<Props> = ({ title, children }) => {
    return (
        <View style={styles.root}>
            <View style={styles.topSection}>
                <NavigateBackButton />
                <Text
                    style={{
                        color: Colors.main.constrast,
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}>
                    {title}
                </Text>
            </View>
            <View style={[styles.containerWrapper]}>
                <View style={[styles.relativeContainer]}>{children}</View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    topSection: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 20,
        marginHorizontal: 30,
        justifyContent: 'space-around',
        flex: 0.22,
    },
    containerWrapper: {
        padding: 25,
        flex: 1,
        backgroundColor: BackgroundColors.secondaryBgColor,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    relativeContainer: {
        position: 'relative',
        flex: 1,
    },
});
