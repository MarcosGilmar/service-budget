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
    content: {
        flexDirection: "column",
    },
    title: {
        color: colors.principal["purple-base"],
        ...typography.titleLg
    },
    text: {
        color: colors.gray[500],
        ...typography.textSm
    }
})