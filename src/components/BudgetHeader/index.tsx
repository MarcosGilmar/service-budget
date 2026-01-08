import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { FilterStatus } from "../../enums/FilterStatus"
import { Filter } from "../Filter"

type Props = TouchableOpacityProps &{
    icon: keyof typeof MaterialIcons.glyphMap
    title: string
    status?: FilterStatus
    onPress: () => void
}

export function BudgetHeader({ icon, title, status, onPress }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <MaterialIcons name={icon} size={24}/>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {status && <Filter status={status}/> }
            </View>
        </View>
    )
}