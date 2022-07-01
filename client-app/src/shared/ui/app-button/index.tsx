import React from 'react';
import {
    ButtonProps,
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from 'react-native';
import { ColorSet, Colors } from '@src/shared/theme/colors';

type ButtonStyle = 'basic' | 'raised' | 'stroked';

type CustomProps = {
    buttonStyle?: ButtonStyle;
    color?: ColorSet;
    styles?: StyleProp<ViewStyle>;
};

type Props = CustomProps & Omit<ButtonProps, 'color'>;

export const AppButton: React.FC<Props> = (props) => {
    const styles = createStyles(props.color);

    const overlayColor: string =
        (props.buttonStyle == 'raised'
            ? props.color?.constrast
            : props.color?.default) ?? Colors.main.constrast;
    const buttonStyles: any = [styles.button];
    const textStyles: any = [styles.text];

    switch (props.buttonStyle) {
        case 'basic':
            buttonStyles.push(styles.basic);
            textStyles.push(styles.textBasic);
            break;
        case 'raised':
            buttonStyles.push(styles.raised);
            textStyles.push(styles.textRaised);
            break;
        case 'stroked':
            buttonStyles.push(styles.stroked);
            textStyles.push(styles.textStroked);
            break;
        default:
            break;
    }
    const buttonPressed = () => {};

    return (
        <Pressable
            style={[...buttonStyles, props.styles]}
            disabled={props.disabled}
            accessibilityLabel={props.accessibilityLabel}
            onPress={props.onPress}>
            {({ pressed }) => (
                <>
                    <View
                        style={
                            pressed
                                ? [
                                      styles.overlay,
                                      {
                                          backgroundColor: overlayColor,
                                      },
                                  ]
                                : undefined
                        }></View>
                    <Text style={textStyles}>{props.title}</Text>
                </>
            )}
        </Pressable>
    );
};
const radius: number = 15;

const createStyles = (color?: ColorSet) =>
    StyleSheet.create({
        overlay: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 0.3,
            borderRadius: radius,
        },
        button: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            minWidth: 64,
            paddingVertical: 0,
            paddingHorizontal: 16,
            borderRadius: radius,
        },
        text: {
            lineHeight: 40,
            fontWeight: 'bold',
        },
        raised: {
            backgroundColor: color?.default ?? Colors.main.default,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: radius,

            elevation: 5,
        },
        textRaised: {
            color: color?.constrast ?? Colors.main.constrast,
        },
        basic: {
            backgroundColor: 'transparent',
        },
        textBasic: {
            color: color?.default ?? Colors.main.default,
        },
        stroked: {
            borderColor: color?.default ?? Colors.main.default,
            borderWidth: 1,
            backgroundColor: 'transparent',
        },
        textStroked: {
            color: color?.default ?? Colors.main.default,
        },
    });
