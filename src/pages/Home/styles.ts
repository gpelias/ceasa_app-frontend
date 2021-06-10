import {StyleSheet} from "react-native";

const styles = StyleSheet.create(
    {
        container:
            {
                flex: 1,
                backgroundColor: '#FFF',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                paddingTop: 130,
                paddingLeft: 30,
                paddingRight: 25
            },
        title:
            {},
        text:
            {},
        way:
            {
                padding: 15,
                borderWidth: 1,
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderRadius: 15,
                shadowColor: 'grey',
                shadowOffset:
                    {
                        width: 2,
                        height: 5
                    },
                shadowOpacity: 16,
                shadowRadius: 24,
                marginBottom: 30
            }
    },
);

export default styles;