import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { typography } from "../../theme/fontFamily";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: colors.gray[400]
    },
    button: {
        marginRight: 16
    },
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: colors.gray[700],
        ...typography.titleSm
    }
})