import { Dimensions } from "react-native";

export const dimensions = Dimensions.get("window");

export const colors = {
    blackText: "black",
};

export const font = {
    mainFamily: '"Prompt", sans-serif',
};

export const theme = {
    deviceHeight: dimensions.height,
    deviceWidth: dimensions.width,
};
