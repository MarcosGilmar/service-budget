import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { colors } from "../../theme";
import { typography } from "../../theme/fontFamily";
import { Input } from "../../components/Input";
import { ButtonCircle } from "../../components/ButtonCircle";
import { Button } from "../../components/Button";

export default function Service() {
    return (
        <View style={{ flex: 1, backgroundColor:'rgba(0,0,0,0.3)' }}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <KeyboardAvoidingView
                    style={{ flex: 1}}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Serviço</Text>
                            <TouchableOpacity 
                                onPress={() => router.back()}
                            >
                                <MaterialIcons name="close" size={25}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputs}>
                            <Input 
                                placeholder="Título do serviço"
                            />
                            <Input 
                                variant="sized"
                                placeholder="Descrição do serviço"    
                            />
                            <View style={{ width: "100%", flexDirection: "row", gap: 12}}>
                                <Input 
                                    style={{ width: 220}}
                                    variant= "value"
                                    placeholder="3847,50"
                                />
                                <View
                                    style={styles.countView}
                                >
                                    <View style={styles.count}>
                                        <TouchableOpacity>
                                            <MaterialIcons name="add" size={18} color={colors.principal["purple-base"]}/>
                                        </TouchableOpacity>
                                        <Text>1</Text>
                                        <TouchableOpacity>
                                            <MaterialIcons name="remove" size={18} color={colors.principal["purple-base"]}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            
                        </View>

                        <View style={styles.buttons}>
                            <ButtonCircle 
                                icon="delete" 
                                color={colors.feedback["danger-base"]}
                            />
                            <Button 
                                icon="check"
                                title="Salvar"
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: colors.gray[100],
        marginTop: "auto",
        height: 464,
        borderRadius: 15,
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
    inputs: {
        padding: 20,
        gap: 12,
    },
    valueInput: {
        flexDirection: "row"
    },
    countView: {
        width: 80,
        height: 48,
        borderWidth: 0.2,
        borderColor: colors.gray[400],
        borderRadius: 15,
        padding: 13
    },
    count: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        paddingVertical: 20,
        borderTopWidth: 0.2,
        borderColor: colors.gray[400]
    }
})