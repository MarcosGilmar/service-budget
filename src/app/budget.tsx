import { router } from "expo-router";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BudgetHeader } from "../components/BudgetHeader";
import { FilterStatus } from "../types/FilterStatus";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/Input";
import { Filter } from "../components/Filter";
import { Checkbox } from "../components/Checkbox";

import { StatusWrapper } from "../coreComponents/statusWrapper";


export default function Budget() {
    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <BudgetHeader 
                icon={"arrow-back-ios"}
                title="Orçamentos"   
                status={FilterStatus.SEND} 
                onPress={() => router.back()}
            />
            <Wrapper icon={"store"} title="Informações Gerais">
                <Input placeholder="Título"/>
                <Input placeholder="Cliente"/>
            </Wrapper>

            <Wrapper icon="sell" title="Status">
                <StatusWrapper />
            </Wrapper>
        </SafeAreaView>
    )
}