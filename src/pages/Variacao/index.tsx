import React, {useEffect, useState} from "react";
import {
    DatePickerAndroid,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";

import styles from './styles';
import {DataTable} from "react-native-paper";
import Service from "../../services";
import {FilterInterface, PageInterface, VariacaoInterface} from "../../interface";

function VariacaoPage({navigation, route}: PageInterface) {
    const filter = route.params;
    const [produtoFilter, setProdutoFilter] = useState<FilterInterface>(filter);
    const [dateFrom, setDateFrom] = useState<Date>(new Date());
    const [dateTo, setDateTo] = useState<Date>(new Date());
    const [variacaoList, setVariacaoList] = useState<VariacaoInterface[]>([]);

    useEffect(
        () => {
            getVariacao().then();
        }, []
    )

    async function openDateFrom() {
        try {
            const {
                action,
                // @ts-ignore
                year,
                // @ts-ignore
                month,
                // @ts-ignore
                day
            } = await DatePickerAndroid.open(
                {
                    date: dateFrom
                }
            );
            if (action !== DatePickerAndroid.dismissedAction) {
                const data = new Date(year, month, day);
                produtoFilter.dataInicio = data.toISOString().slice(0, 10);
                setDateFrom(data);
                getVariacao().then();
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    async function openDateTo() {
        try {
            const {
                action,
                // @ts-ignore
                year,
                // @ts-ignore
                month,
                // @ts-ignore
                day
            } = await DatePickerAndroid.open(
                {
                    // Use `new Date()` for current date.
                    // May 25 2020. Month 0 is January.
                    date: dateTo
                }
            );
            if (action !== DatePickerAndroid.dismissedAction) {
                const data = new Date(year, month, day);
                produtoFilter.dataFim = data.toISOString().slice(0, 10);
                setDateTo(data);
                getVariacao().then();
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    async function getVariacao() {
        setVariacaoList(await Service.variacao(produtoFilter));
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
                    <View style={styles.date}>
                        <View style={styles.test}>
                            <Text>
                                de
                            </Text>
                            <TouchableHighlight
                                style={styles.dateButton}
                                onPress={openDateFrom}
                            >
                                <Text style={styles.textColor}>
                                    {dateFrom.toLocaleDateString()}
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.test}>
                            <Text>
                                ate
                            </Text>
                            <TouchableHighlight
                                style={styles.dateButton}
                                onPress={openDateTo}
                            >
                                <Text style={styles.textColor}>
                                    {dateTo.toLocaleDateString()}
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <TouchableHighlight onPress={
                        () => {
                            navigation.navigate('GraficoPage',
                                {
                                    variacaoList
                                })
                        }
                    }>
                        <View>
                            <Text>Grafico</Text>
                        </View>
                    </TouchableHighlight>
                    <View>
                        <DataTable>
                            <DataTable.Header style={{paddingRight: 0, paddingLeft: 0}}>
                                <DataTable.Title>Data</DataTable.Title>
                                <DataTable.Title> </DataTable.Title>
                                <DataTable.Title>Min</DataTable.Title>
                                <DataTable.Title>Comum</DataTable.Title>
                                <DataTable.Title>Max</DataTable.Title>
                                <DataTable.Title>Comum/kg</DataTable.Title>
                            </DataTable.Header>
                            {variacaoList.map(
                                (variacao, key) => (
                                    <DataTable.Row key={key} style={{paddingRight: 0, paddingLeft: 0}}>
                                        <DataTable.Cell>{new Date(variacao.data).toLocaleDateString()}</DataTable.Cell>
                                        <DataTable.Cell numeric>
                                            {parseFloat(variacao.minimo?.toString()).toFixed(2)}
                                        </DataTable.Cell>
                                        <DataTable.Cell numeric>
                                            {parseFloat(variacao.comum?.toString()).toFixed(2)}
                                        </DataTable.Cell>
                                        <DataTable.Cell numeric>
                                            {parseFloat(variacao.maximo?.toString()).toFixed(2)}
                                        </DataTable.Cell>
                                        <DataTable.Cell numeric>
                                            {parseFloat(variacao.convKg?.toString()).toFixed(2)}
                                        </DataTable.Cell>
                                    </DataTable.Row>
                                )
                            )}
                        </DataTable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default VariacaoPage;