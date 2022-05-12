import { Dimensions, ImageBackground } from 'react-native';
import backgroundImg from '@assets/background.png';

const ImageBackgroundContainer: React.FC = ({ children }) => {
    return (
        <ImageBackground
            source={backgroundImg}
            style={{
                justifyContent: 'center',
                flex: 1,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
            }}>
            {children}
        </ImageBackground>
    );
};
export default ImageBackgroundContainer;
