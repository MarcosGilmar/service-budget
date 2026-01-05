import { PropsWithChildren } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "../../theme";

export function DismissKeyboardView({ children }: PropsWithChildren) {    
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray[100], padding: 20}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView 
                    style={{ flex: 1}}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    {children}
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}