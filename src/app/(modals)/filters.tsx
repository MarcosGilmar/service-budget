import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

import { useContext, useState } from "react";
import { FilterContext, SortOption } from "../../context/FilterContext";

import { typography } from "../../theme/fontFamily";
import { colors } from "../../theme";

import { CheckboxFilter } from "../../components/CheckboxFilter";
import { Button } from "../../components/Button";
import { FilterStatus } from "../../enums/FilterStatus";

export default function Filters() {
    const {selectedStatus, sortBy, setFilters} = useContext(FilterContext)

    const [statusLocal, setStatusLocal] = useState(selectedStatus || [])
    const [sortLocal,setSortLocal] = useState(sortBy)

    function handleToggleStatus(item: FilterStatus) {
        if(statusLocal.includes(item)) {
            const newListStatus = statusLocal.filter((status) => ( 
                status !== item
            ))
            setStatusLocal(newListStatus)
        } else {
            setStatusLocal((prev) => [...prev, item])
        }
    }

    function handleSort(option: SortOption) {
        if(sortLocal === option) {
            setSortLocal(null)
        } else {
            setSortLocal(option)
        }
    }

    function handleResetFilters() {
        setStatusLocal([])
        setSortLocal(null)
    }

    function handleApplyFilters() {
        setFilters(statusLocal, sortLocal)
        router.back()
    }

    return (
        <View style={{ flex: 1, backgroundColor:'rgba(0,0,0,0.3)'}}>
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
                        <CheckboxFilter 
                            status={FilterStatus.DRAFT}
                            isSelected={statusLocal.includes(FilterStatus.DRAFT)}
                            onPress={() => handleToggleStatus(FilterStatus.DRAFT)}
                        />
                        <CheckboxFilter 
                            status={FilterStatus.SEND}
                            isSelected={statusLocal.includes(FilterStatus.SEND)}
                            onPress={() => handleToggleStatus(FilterStatus.SEND)}
                        />
                        <CheckboxFilter 
                            status={FilterStatus.APPROVED}
                            isSelected={statusLocal.includes(FilterStatus.APPROVED)}
                            onPress={() => handleToggleStatus(FilterStatus.APPROVED)}
                        />
                        <CheckboxFilter 
                            status={FilterStatus.DENIED}
                            isSelected={statusLocal.includes(FilterStatus.DENIED)}
                            onPress={() => handleToggleStatus(FilterStatus.DENIED)}
                        />
                    </View>

                    <Text style={{ marginVertical: 16 }}>Ordenação</Text>
                    <View style={{ gap: 12 }}>
                        <CheckboxFilter 
                            isRounded={false} 
                            title="Mais recente"
                            isSelected={sortLocal === "latest"}
                            onPress={() => handleSort("latest")}
                        />
                        <CheckboxFilter 
                            isRounded={false} 
                            title="Mais antigo"
                            isSelected={sortLocal === "oldest"}
                            onPress={() => handleSort("oldest")}
                        />
                        <CheckboxFilter 
                            isRounded={false} 
                            title="Maior valor"
                            isSelected={sortLocal === "biggestValue"}
                            onPress={() => handleSort("biggestValue")}
                        />
                        <CheckboxFilter 
                            isRounded={false} 
                            title="Menor valor"
                            isSelected={sortLocal === "smallestValue"}
                            onPress={() => handleSort("smallestValue")}
                        />
                    </View>
                </View>

                    <View style={styles.buttons}>
                        <Button 
                            variant="white" 
                            title="Resetar filtros" 
                            onPress={() => handleResetFilters()}
                        />
                        <Button 
                            icon="check" 
                            title="Aplicar"
                            onPress={() => handleApplyFilters()}
                        />
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