import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IAuthState } from '@redux-store/reducers/auth-reducers';
import { IStore } from '@redux-store/reducers/reducers';
import MenuTile from '@components/molecules/menu-tile';
import { signOut } from '@redux-store/actions/auth-actions';
import { Colors } from '@theme/colors';
import inventorizationImg from '@assets/stocktaking.png';
import warehouseImg from '@assets/warehouse.png';
import PaddingContainer from '@src/components/templates/padding-container';
import TopBarSafeContainer from '@src/components/templates/top-bar-safe-container';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@src/routing';

type HomeNavigationProp = NativeStackScreenProps<AuthStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeNavigationProp) => {
    const state = useSelector<IStore, IAuthState>((state) => state.authReducer);
    const dispatch = useDispatch();

    return (
        <TopBarSafeContainer>
            <PaddingContainer>
                <View style={styles.topBar}>
                    <View>
                        <Text style={[{ fontSize: 16 }, styles.topBarText]}>
                            Welcome back
                        </Text>
                        <Text style={[{ fontSize: 23 }, styles.topBarText]}>
                            {state.username}
                        </Text>
                    </View>
                    <View>
                        <Ionicon
                            name="exit-outline"
                            size={40}
                            color={Colors.main.constrast}
                            onPress={() => dispatch(signOut())}
                            style={{ transform: [{ rotate: '180deg' }] }}
                        />
                    </View>
                </View>
                <View style={styles.content}>
                    <MenuTile
                        onPress={() =>
                            navigation.navigate('InventarisationStack')
                        }
                        title="Inventarisation"
                        img={inventorizationImg}
                        styles={styles.menuTile}></MenuTile>
                    <MenuTile
                        onPress={() =>
                            navigation.navigate('InventarisationStack')
                        }
                        title="Warehouse receptions"
                        img={warehouseImg}
                        styles={styles.menuTile}></MenuTile>
                </View>
            </PaddingContainer>
        </TopBarSafeContainer>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    topBarText: {
        color: Colors.main.constrast,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 50,
    },
    menuTile: {
        width: '48%',
    },
});
