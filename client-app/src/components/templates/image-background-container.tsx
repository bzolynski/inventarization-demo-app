import { ImageBackground } from 'react-native';
import backgroundImg from '@assets/background.png';

const ImageBackgroundContainer: React.FC = ({ children }) => {
    return (
        <ImageBackground
            source={backgroundImg}
            style={{ justifyContent: 'center', flex: 1 }}>
            {children}
        </ImageBackground>
    );
};
export default ImageBackgroundContainer;
