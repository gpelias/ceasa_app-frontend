import {StyleSheet} from "react-native";

const styles = StyleSheet.create(
    {
        container:
            {
                marginRight: 15,
                marginLeft: 15,
                paddingRight: 5,
                paddingLeft: 5,
                paddingTop: 10,
                paddingBottom: 10,
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
                justifyContent: 'space-between'
            },
        item: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginRight: 15,
            // marginLeft: 15,
            paddingRight: 5,
            paddingLeft: 5,
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
        },
        name: {
            width: 50
        },
        detalhe: {
            display: 'flex',
            flexDirection: 'column',
            borderBottomWidth: 1,
            paddingBottom: 10,
            paddingLeft: 5,
            marginTop: 10
        },
        classificacao: {
            display: 'flex',
            flexDirection: 'column',
            borderBottomWidth: 1,
            paddingBottom: 80,
            paddingLeft: 5,
            marginTop: 10,
            marginBottom: 10
        },
        variacao: {
            display: 'flex',
            flexDirection: 'row',
        },
        price: {
            // width: 64
        },
        type: {
            // width: 59
        }
    }
);

export default styles;