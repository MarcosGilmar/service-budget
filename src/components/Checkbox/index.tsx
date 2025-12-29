import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "../../theme"

export type CheckboxProps = TouchableOpacityProps & {
    isRounded?: boolean
    isSelected?: boolean
}

export function Checkbox({ isSelected = false, isRounded = true }: CheckboxProps) {
    return (
            <TouchableOpacity style={[
                isRounded ? styles.rounded : styles.square,
                isSelected && styles.selected,
            ]}>
                {isSelected && !isRounded && (
                    <MaterialIcons name="check" size={15} color={colors.gray[100]}/>
                )}
                {isSelected && isRounded && (
                    <MaterialIcons name="fiber-manual-record" size={10} color={colors.gray[100]}/>
                )}
            </TouchableOpacity>

    
    )
}