import { StyleSheet } from "react-native";
import { typography } from "../../theme/fontFamily";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        height: 25,
        paddingHorizontal: 8,
        borderRadius: 5,
        gap: 6
    }, 
    title: {
        ...typography.textXs
    }
})