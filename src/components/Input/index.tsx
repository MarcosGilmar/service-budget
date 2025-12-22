import { TextInput, TextInputProps, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "../../theme"


export function Input({ ...rest}: TextInputProps) {
    return (
        <View style={styles.container}>
            <MaterialIcons name="search" size={24} color={colors.principal["purple-base"]}/>
            <TextInput 
                placeholder="Título ou cliente"
                {...rest}    
            >
            </TextInput>
        </View>
    )
}