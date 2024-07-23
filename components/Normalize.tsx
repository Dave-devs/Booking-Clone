import { Platform, PixelRatio, useWindowDimensions, } from "react-native";

export function pixelNormalize(size: number) {
    const { width } = useWindowDimensions();
    const scale = width / 360;

    const newSize = size * scale;
    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}