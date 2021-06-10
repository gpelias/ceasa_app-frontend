import React from "react";
import {Dimensions, Text, View} from "react-native";

import styles from './styles';
import {LineChart} from "react-native-chart-kit";
import {PageInterface, VariacaoInterface} from "../../interface";

const GraficoPage = ({route, navigation}: PageInterface) => {
    const variacaoList: VariacaoInterface[] = route.params.variacaoList;

    function getData(tipoValor: string): any {

        const labels: string[] = [];
        const datasets =
            [
                {
                    data: [],
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                }
            ];

        const legend = [tipoValor];

        variacaoList.map(
            (item) => {
                // @ts-ignore
                datasets[0].data.push(item[tipoValor]);
                labels.push(new Date(item.data).toLocaleDateString())
            }
        );
        return {labels, datasets, legend}
    }

    return (
        <View>
            <View style={styles.topBar}>
                <Text>
                    Variacao
                </Text>
            </View>
            <View>
                <View style={styles.container}>
                    <View>
                        <LineChart
                            data={getData('comum')}
                            height={220}
                            width={(Dimensions.get("window").width) - 40}
                            chartConfig={
                                {
                                    backgroundColor: "#e26a00",
                                    backgroundGradientFrom: "#fb8c00",
                                    backgroundGradientTo: "#ffa726",
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    style:
                                        {
                                            borderRadius: 16
                                        },
                                    propsForDots:
                                        {
                                            r: "1",
                                            strokeWidth: "1",
                                            stroke: "transparent"
                                        }
                                }
                            }
                            bezier
                            style={
                                {
                                    marginVertical: 8,
                                    borderRadius: 16
                                }
                            }
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GraficoPage;