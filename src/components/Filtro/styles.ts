import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create(
    {
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            overflow: "scroll"
        },
        modalView: {
            margin: 0,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            // alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            height: Dimensions.get("window").height - 50,
            width: Dimensions.get("window").width - 50,
            overflow: "scroll"
        },
        openButton: {
            backgroundColor: "#F194FF",
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 0,
            textAlign: "center"
        },
        line: {
            display: 'flex',
            flexDirection: "row"
            // width:200
        }
    }
    )
;

export default styles;