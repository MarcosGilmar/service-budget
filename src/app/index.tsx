import { router } from "expo-router";
import { View, Text, Button, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, fontFamily } from "../theme";

import { HomeHeader } from "../components/HomeHeader";
import { Input } from "../components/Input";
import { ButtonCircle } from "../components/ButtonCircle";
import { Filter } from "../components/Filter";
import { FilterStatus } from "../types/FilterStatus";

export default function Index() {
    return (
        <SafeAreaView>
            <View style={{ padding: 20 }}>
                <StatusBar barStyle="dark-content"/>
                <HomeHeader />

                <View style={{ paddingTop: 24, flexDirection: "row", gap: 8 }}>
                    <Input />
                    <ButtonCircle icon={"tune"} color={colors.principal["purple-base"]}/>
                </View>
                <Filter status={FilterStatus.APPROVED}/>
            </View>
        </SafeAreaView>
    )
}