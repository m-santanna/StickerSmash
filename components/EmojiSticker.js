import { Image, View } from "react-native"

const EmojiSticker = ({ imageSize, stickerSource }) => {
    return (
        <View style={{ top: -350 }}>
            <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} />
        </View>
    )
}

export default EmojiSticker