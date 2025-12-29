import { TouchableOpacity, TouchableOpacityProps, Text, View, ActivityIndicator } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "../../theme"

type Props = TouchableOpacityProps & {
    icon?: keyof typeof MaterialIcons.glyphMap
    title: string
    isLoading?: boolean
    variant?: "white" | "purple"
}

export function Button({ icon, title, variant, isLoading = false, onPress, ...rest }: Props) {
    return (
        <TouchableOpacity 
            style={variant ? styles.white : styles.container} 
            activeOpacity={0.8}
            disabled={isLoading}
            onPress={onPress}
            {...rest}
        >
                <View style={{ flexDirection: "row", gap: 10, opacity: isLoading ? 0 : 1}}>
                    <MaterialIcons name={icon} size={20} color={variant ? colors.principal["purple-base"] : colors.gray[100]} />
                    <Text style={variant ? styles.titleVariant : styles.title}>{title}</Text>
                </View>
            { isLoading && (
                <ActivityIndicator size="small" color={colors.gray[100]} style={{ position: "absolute"}}/>
            )}
        </TouchableOpacity>
    )
}