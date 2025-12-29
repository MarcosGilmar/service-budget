import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    rounded: {
        width: 20,
        height: 20,
        borderWidth: 0.2,
        borderRadius: 30
    },
    square: {
        width: 20,
        height: 20,
        borderWidth: 0.2,
        borderRadius: 5
    },
    selected: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.principal["purple-base"]
    }
})