import { StyleSheet } from "react-native";

import { colors, fontFamily } from "../../theme";
import { typography } from "../../theme/fontFamily";

export const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        height: 48,
        backgroundColor: colors.principal["purple-base"],
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        paddingHorizontal: 18

    },
    title: {
        color: colors.gray[100],
        ...typography.titleSm
    }
})