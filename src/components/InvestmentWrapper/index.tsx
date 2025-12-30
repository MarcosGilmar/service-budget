import { View, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

type Props = {
    icon?: keyof typeof MaterialIcons.glyphMap
}

export function InvestmentWrapper({ icon }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.subtotal}>
                <Text style={styles.subtotalValue}>Subtotal</Text>
                <View style={styles.itemsvalue}>
                    <Text style={styles.items}>8 items</Text>
                    <Text style={styles.subtotalValue}>R$ 3.847,50</Text>
                </View>
            </View>
            <View style={styles.discount}>
                <View style={styles.percentage}>
                    <Text style={styles.subtotalValue}>Desconto</Text>
                    <View style={styles.percentageWrapper}>
                        <Text> 8 </ Text>
                            <MaterialIcons name="percent" size={15} />
                    </View>
                </View>
                <Text style={styles.discountValue}>- R$ 200,00</Text>
            </View>
            <View style={styles.totalValueWrapper}>
                <Text style={styles.totalValueText}>Valor total</Text>
                <View style={styles.finalInvestment}>
                    <Text style={styles.strikethroughText}>R$ 4.050,00</Text>
                    <Text style={styles.totalValue}>3.847,50</Text>
                </View>
            </View>

        </View>
    )
}