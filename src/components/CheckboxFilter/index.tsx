import { View, Text } from "react-native";

import { Checkbox } from "../../components/Checkbox";
import { Filter } from "../../components/Filter";

import { FilterStatus } from "../../types/FilterStatus";
import { colors, fontFamily } from "../../theme";
import { typography } from "../../theme/fontFamily";
import { CheckboxProps } from "../../components/Checkbox";

type Props = CheckboxProps & {
    status?: FilterStatus
    title?: string
}

export function CheckboxFilter({ status, title, ...rest }: Props) {
    return (
        <View style={{ flexDirection: "row", gap: 12 }}>
            <Checkbox {...rest}/>
            { status ? 
                <Filter status={status}/> 
                : 
                <Text style={{ color: colors.gray[600], ...typography.textMd }}>{title}</Text>
            }
        </View>
    )
}