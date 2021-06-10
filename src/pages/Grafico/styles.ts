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
            textAlign: 'left',
            width: 200
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
            textAlign: 'right',
            width: 100
        },
        type: {
            marginLeft: '20%',
            textAlign: 'center',
            width: 120
        },
        test: {
            width: '45%'
        },
        de: {},
        ate: {},
        date: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

        },
        textColor: {
            color: 'gray',
            textAlign: 'center',
            textAlignVertical: "center"
        },
        dateButton: {
            borderWidth: 2,
            borderRadius: 5,
            borderColor: 'blue',
            height: 45,
            paddingTop: '6%'
        },
        row: {

        },
        tableTitle: {
        }
    }
);

export default styles;