import { View, Text } from "react-native";

import { Button } from "../Button";
import { styles } from "./styles";

type Props = {
    onPress: () => void
    itemQuantity: number
}

export function HomeHeader({ itemQuantity, onPress }: Props) {
    const message = itemQuantity === 0 
        ? "Você não tem nenhum item listado"
        : `Você tem ${itemQuantity} items listados`
        
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Orçamentos</Text>
                <Text style={styles.text}>{message}</Text>
            </View>
            <Button icon="add" title="Novo" onPress={onPress} />
        </View>
    )
}