import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: colors.gray[100],
        borderWidth: 1,
        borderColor: colors.gray[200],
        borderRadius: 25,
        width: 48,
        height: 48,
    }
})