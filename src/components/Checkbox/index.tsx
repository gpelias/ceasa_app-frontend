import React, {useState} from "react";
import {Text, View} from "react-native";

import styles from "./styles";
import {Checkbox} from "react-native-paper";
import {CheckInterface} from "../../interface";

const Check: React.FunctionComponent<CheckInterface> = (
    {
        i,
        list,
        value,
        handlePress,
        updateFilter,
        name,
        getStatus
    }
) => {
    const [status, setStatus] = useState<'checked' | 'unchecked' | 'indeterminate'>(getStatus);
    return (
        <View key={i} style={styles.checkbox}>
            <Checkbox
                status={status}
                onPress={
                    () => {
                        setStatus(handlePress(list, status, i, name));
                        setTimeout(
                            () => {
                                updateFilter();
                            }, 500
                        )

                    }
                }
            />
            <Text style={styles.text}>
                {value.descricao}
            </Text>
        </View>

    )
}

export default Check;