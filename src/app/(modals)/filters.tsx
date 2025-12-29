import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

import { typography } from "../../theme/fontFamily";
import { colors } from "../../theme";

import { CheckboxFilter } from "../../components/CheckboxFilter";
import { FilterStatus } from "../../types/FilterStatus";
import { Button } from "../../components/Button";

export default function Filters() {
    return (
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'}}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Filtrar e ordenar</Text>
                        <TouchableOpacity 
                            onPress={() => router.back()}
                        >
                            <MaterialIcons name="close" size={25}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.content}>
                        <Text style={{ marginBottom: 16 }}>Status</Text>
                        <View style={{ gap: 12 }}>
                            <CheckboxFilter status={FilterStatus.DRAFT}/>
                            <CheckboxFilter status={FilterStatus.SEND}/>
                            <CheckboxFilter status={FilterStatus.APPROVED}/>
                            <CheckboxFilter status={FilterStatus.DENIED}/>
                        </View>

                        <Text style={{ marginVertical: 16 }}>Ordenação</Text>
                        <View style={{ gap: 12 }}>
                            <CheckboxFilter isRounded={false} title="Mais recente"/>
                            <CheckboxFilter isRounded={false} title="Mais antigo"/>
                            <CheckboxFilter isRounded={false} title="Maior valor"/>
                            <CheckboxFilter isRounded={false} title="Menor valor"/>
                        </View>
                    </View>

                        <View style={styles.buttons}>
                            <Button variant="white" title="Resetar filtros" />
                            <Button icon="check" title="Aplicar"/>
                        </View>

                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],
        marginTop: "auto",
        height: 562,
        borderRadius: 15
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: colors.gray[400]
    },
    title: {
        color: colors.gray[700],
        ...typography.titleSm
    },
    content: {
        flexDirection: "column",
        padding: 20,        
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 16,
        borderTopWidth: 0.2,
        borderTopColor: colors.gray[400]
    }
})