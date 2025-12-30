import { Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { Filter, FilterProps } from "../Filter"
import { styles } from "./styles"
import { FilterStatus } from "../../types/FilterStatus"

export type ItemProps = FilterProps & {
    id: string
    title: string
    label: string
    value: number
    created_at: string
    updated_at: string
}

export function Item({ id, status, title, label, value, created_at, ...rest}: ItemProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.content}>
                <Text style={[styles.title, {width: 240}]}>{title}</Text>

                <View style={styles.row}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>R$ {value},00</Text>
                </View>
            </View>
                <View style={styles.filter}>
                    <Filter status={status}/>
                </View>            
        </TouchableOpacity>
    )
}