import { View, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { PropsWithChildren } from "react"

import { styles } from "./styles"
import { colors } from "../../theme"

type Props = PropsWithChildren<{
    icon: keyof typeof MaterialIcons.glyphMap
    title: string
}>

export function Wrapper({ icon, title, children }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <MaterialIcons name={icon} size={18} color={colors.principal["purple-base"]}/>
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.line}></View>
            
            <View style={styles.children}>
                {children}
            </View>

        </View>
    )
}