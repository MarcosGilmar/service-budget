import { TextInput, TextInputProps, View, ViewStyle } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "../../theme"

type Props = TextInputProps & {
    icon?: keyof typeof MaterialIcons.glyphMap
    containerStyle?: ViewStyle
}

export function Input({ icon, containerStyle, ...rest}: Props) {
    return (
        <View style={[styles.container, containerStyle ]}>
            {icon && (
                <MaterialIcons name={icon} size={24} color={colors.gray[600]}/>
            )}
            <TextInput 
                style={styles.input}
                {...rest}    
            >
            </TextInput>
        </View>
    )
}