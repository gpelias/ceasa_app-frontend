import React, {useEffect, useState} from "react";
import {Text, TouchableHighlight, TouchableWithoutFeedback, View} from "react-native";

import styles from './styles';
import Service from "../../services";
import {PageInterface, ProdutoInterface} from "../../interface";

const ProdutoDetalhePage = ({route, navigation}: PageInterface) => {
    const produtoFilter = route.params;
    const [produto, setProduto] = useState<ProdutoInterface>();
    useEffect(
        () => {
            getDetalhe().then();
        }
        , []);

    async function getDetalhe() {
        const {id} = produtoFilter;

        setProduto(await Service.detalhe({id}));
    }

    return (
        <View>
            <View style={styles.topBar}>
                <Text>
                    Produtos
                </Text>
            </View>
            <View>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Text style={styles.name}>
                            {produto?.produto}
                        </Text>
                        <Text style={styles.type}>
                            {produto?.tipo}
                        </Text>
                        <Text style={styles.price}>
                            R$ {produto?.comum}
                        </Text>
                    </View>
                    <View style={styles.detalhe}>
                        <Text>
                            Detalhe
                        </Text>
                        <Text>
                            {produto?.tipo} / {produto?.embalagem} / {produto?.origem}
                        </Text>
                    </View>
                    <View style={styles.classificacao}>
                        <Text>
                            Classificacao
                        </Text>
                        <Text>
                            {produto?.classificacao ? produto?.classificacao.map(({classificacao}) => classificacao) : 'Nâo Informado'}
                        </Text>
                    </View>
                    <View style={styles.variacao}>
                        <TouchableHighlight onPress={
                            () => {
                                navigation.navigate('VariacaoPage',
                                    {
                                        classificacao: produtoFilter.classificacao && produtoFilter.classificacao.length > 0 ? produtoFilter.classificacao[0].classificacao: null,
                                        dataInicio: '2018-04-02',
                                        dataFim: '2018-04-02',
                                        embalagem: produtoFilter.embalagem,
                                        id: null,
                                        origem: produtoFilter.origem,
                                        produto: produtoFilter.produto,
                                        tipo: produtoFilter.tipo,
                                        variedade: produtoFilter.variedade
                                    }
                                )
                            }
                        }
                        >
                            <Text>
                                Variacao
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProdutoDetalhePage;