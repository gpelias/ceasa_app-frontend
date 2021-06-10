import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create(
    {
        container:
            {
                marginTop: 50
            },
        topBar:
            {
                padding: 15,
            },
        buttonTab:
            {
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
                justifyContent: 'space-between',
                backgroundColor: 'white',
                // marginTop: -18,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20
            },
        listContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 15,
            marginLeft: 15,
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
        },
        name:
            {
                textAlign: 'left',
                width: 70
            },
        variedade:
            {
                width: 80
            },
        embalagem:
            {
                width: 60
            },
        type:
            {
                width: 59
            },
        price:
            {
                width: 64
            }
    }
);

export default styles;