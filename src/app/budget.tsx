import { router } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BudgetHeader } from "../components/BudgetHeader";
import { FilterStatus } from "../types/FilterStatus";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/Input";
import { Filter } from "../components/Filter";
import { Checkbox } from "../components/Checkbox";
import { StatusWrapper } from "../components/StatusWrapper";
import { ServicesWrapper } from "../components/ServicesWrapper";
import { Button } from "../components/Button";
import { InvestmentWrapper } from "../components/InvestmentWrapper";
import { colors } from "../theme";

export default function Budget() {
    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <BudgetHeader 
                    icon="arrow-back-ios"
                    title="Orçamentos"   
                    onPress={() => router.back()}
                />
                <Wrapper icon={"store"} title="Informações Gerais">
                    <View style={{ padding: 20, gap: 12 }}>
                        <Input placeholder="Título"/>
                        <Input placeholder="Cliente"/>
                    </View>
                </Wrapper>

                <Wrapper icon="sell" title="Status">
                    <StatusWrapper />
                </Wrapper>

                <Wrapper icon="notes" title="Serviços inclusos">
                    <ServicesWrapper />
                </Wrapper>

                <Wrapper icon="credit-card" title="Investimento">
                    <InvestmentWrapper />
                </Wrapper>

                <View style={{ 
                    flexDirection: "row", 
                    justifyContent: "center", 
                    alignItems: "center",
                    gap: 16,
                    padding: 20,
                    marginTop: 20,
                    borderTopWidth: 0.2,
                    borderTopColor: colors.gray[400]


                }}>
                    <Button 
                        title="Cancelar"
                        variant="white"

                    />
                    <Button 
                        icon={"check"}
                        title="Salvar"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}