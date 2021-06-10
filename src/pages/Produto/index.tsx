import React, {useEffect, useState} from "react";
import {FlatList, SafeAreaView, Text, TouchableHighlight, TouchableWithoutFeedback, View} from "react-native";

import styles from './styles';
import FiltroModal from "../../components/Filtro";
import Service from "../../services";
import {
    checkbox,
    CheckboxInterface,
    EnumsInterface,
    enunInterface,
    FilterInterface,
    NavigationInterface,
    PageInterface,
    ProdutoInterface
} from "../../interface";

const produtoFilter: FilterInterface = {
    classificacao: null,
    dataFim: '2018-04-02',
    dataInicio: '2018-04-02',
    embalagem: null,
    id: null,
    produto: null,
    origem: null,
    tipo: null,
    variedade: null
};

function fillProdutoFilter(params: FilterInterface) {
    Object.keys(produtoFilter).map(
        (key) => {
            // @ts-ignore
            if (params[key]) {
                // @ts-ignore
                produtoFilter[key] = params[key];
            } else {
                // @ts-ignore
                produtoFilter[key] = null;
            }
        }
    )
}

function Item(item: ProdutoInterface, navigation: NavigationInterface) {
    return (
        <TouchableHighlight onPress={
            () => {
                navigation.navigate('DetalhePage',
                    item
                );
            }
        }>
            <View style={styles.listContainer}>
                <Text style={styles.name}>
                    {item.produto}
                </Text>
                <Text style={styles.variedade}>
                    {item.variedade}
                </Text>
                <Text style={styles.embalagem}>
                    {item.embalagem}
                </Text>
                <Text style={styles.type}>
                    {item.tipo}
                </Text>
                <Text style={styles.price}>
                    {item.comum ? `R$ ${parseFloat(item.comum).toFixed(2)}` : `-`}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

function ProdutoPage({route, navigation}: PageInterface) {
    const {params} = route;

    const [data, setData] = useState<ProdutoInterface[]>([]);

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const [enums, setEnums] = useState<EnumsInterface>(
        {
            classificacao: [],
            embalagem: [],
            origem: [],
            produto: [],
            tipo: [],
            variedade: []
        }
    );

    const [enumsCheckbox, setEnumsCheckbox] = useState<CheckboxInterface>(
        {
            classificacao: [],
            embalagem: [],
            origem: [],
            produto: [],
            tipo: [],
            variedade: []
        }
    );

    const [filter] = useState<FilterInterface>(
        {
            id: undefined,
            classificacao: [],
            embalagem: [],
            origem: [],
            produto: [],
            tipo: [],
            variedade: [],
            dataFim: undefined,
            dataInicio: undefined
        }
    );

    fillProdutoFilter(params);

    useEffect(
        () => {
            loadEnum().then();
            getListagem().then()
        },
        [])

    async function getEnums() {
        return await Service.enuns();
    }

    async function loadEnum() {
        const {classificacao, embalagem, origem, produto, tipo, variedade} = await getEnums();

        setEnums({classificacao, embalagem, origem, produto, tipo, variedade});

        setEnumsCheckbox(
            {
                classificacao: parseList(classificacao, 'classificacao'),
                embalagem: parseList(embalagem, 'embalagem'),
                origem: parseList(origem, 'origem'),
                produto: parseList(produto, 'produto'),
                tipo: parseList(tipo, 'tipo'),
                variedade: parseList(variedade, 'variedade'),
            }
        )

        setLoading(false);
    }

    async function getListagem() {
        const data = await Service.listagem(produtoFilter);

        Object.keys(enumsCheckbox)
            .map(
                (key, index, array) => {
                    // @ts-ignore
                    enumsCheckbox[key]
                        .map(
                            // @ts-ignore
                            (a, i) => {
                                // @ts-ignore
                                enumsCheckbox[key][i].enabled = false;
                            }
                        )
                }
            );

        Object
            .keys(enumsCheckbox)
            .map(
                (key) => {
                    // @ts-ignore
                    enumsCheckbox[key]
                        .map(
                            // @ts-ignore
                            (a, i) => {
                                data.map(
                                    (produto, index) => {
                                        // @ts-ignore
                                        if (Array.isArray(produto[key])) {
                                            // @ts-ignore
                                            produto[key]
                                                .map(
                                                    // @ts-ignore
                                                    ({classificacao}) => {
                                                        // @ts-ignore
                                                        if (enumsCheckbox[key][i].descricao === classificacao) {
                                                            // @ts-ignore
                                                            enumsCheckbox[key][i].enabled = true;
                                                        }
                                                    }
                                                )
                                        } else {
                                            // @ts-ignore
                                            if (enumsCheckbox[key][i].descricao === produto[key]) {
                                                // @ts-ignore
                                                enumsCheckbox[key][i].enabled = true;
                                            }
                                        }

                                    }
                                );
                            }
                        );
                }
            );

        setData(data);
    }

    function parseList(enums: enunInterface[], enun: string) {
        const list: checkbox[] = [];
        enums.map(
            ({nome, descricao}) => {
                list.push(
                    {
                        nome,
                        descricao,
                        status: 'unchecked',
                        enabled: true
                    }
                );
            }
        )
        return list;
    }

    function updateFilter() {
        Object.keys(enumsCheckbox)
            .map(
                (key) => {
                    const list: string[] = [];
                    // @ts-ignore
                    enumsCheckbox[key]
                        .map(
                            // @ts-ignore
                            (value) => {
                                if (value.status === 'checked' && value.enabled) {
                                    // @ts-ignore
                                    list.push(value.nome);
                                    // @ts-ignore
                                }
                            }
                        );
                    // @ts-ignore
                    filter[key] = list;
                }
            );

        fillProdutoFilter(
            {
                classificacao: filter.classificacao && filter.classificacao.length == 0 ? null : filter.classificacao,
                embalagem: filter.embalagem && filter.embalagem.length == 0 ? null : filter.embalagem,
                variedade: filter.variedade && filter.variedade.length == 0 ? null : filter.variedade,
                tipo: filter.tipo && filter.tipo.length == 0 ? null : filter.tipo,
                origem: filter.origem && filter.origem.length == 0 ? null : filter.origem,
                produto: filter.produto && filter.produto.length == 0 ? null : filter.produto,
                id: null,
                dataInicio: params.dataInicio,
                dataFim: params.dataFim
            }
        )
        getListagem().then();
    }

    function onPress(list: checkbox[], status: 'checked' | 'unchecked' | 'indeterminate', i: number, type: string): 'checked' | 'unchecked' | 'indeterminate' {
        status = status === 'checked' ? 'unchecked' : 'checked';
        list[i].status = status;

        Object.keys(enumsCheckbox)
            .map(
                (key) => {
                    // @ts-ignore
                    if (type === key) {
                        // @ts-ignore
                        enumsCheckbox[key] = list;
                    }
                }
            )

        return status;
    }

    const closeModal = () => {
        setOpen(false);
        updateFilter();
    }

    const openModal = () => {
        setOpen(true);
    }

    return (<>
            {loading ? (
                    <Text>
                        Loading
                    </Text>
                )
                :
                (
                    <View style={styles.container}>
                        <View style={styles.topBar}>
                            <Text>
                                Produtos
                            </Text>
                        </View>
                        <View>
                            <View style={styles.buttonTab}>
                                <TouchableHighlight onPress={() => {
                                }}>
                                    <View>
                                        <Text>
                                            Lista
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={openModal}>
                                    <View>
                                        <Text>
                                            Pesquise
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => {
                                }}>
                                    <View>
                                        <Text>
                                            Variação
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => {
                                }}>
                                    <View>
                                        <Text>
                                            Favoritos
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <SafeAreaView>
                                    <FlatList
                                        data={data}
                                        // @ts-ignore
                                        renderItem={({item}) => Item(item, navigation)}
                                        keyExtractor={item => (item.id ? item.id.toString() : 0) + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                                    />
                                </SafeAreaView>
                            </View>
                        </View>
                        <FiltroModal
                            open={open}
                            closeModal={closeModal}
                            enums={enums}
                            enumsCheckbox={enumsCheckbox}
                            onPress={onPress}
                            updateFilter={updateFilter}
                        />
                    </View>
                )
            }
        </>
    )
}

export default ProdutoPage;