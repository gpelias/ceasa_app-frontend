import React from "react";
import {Text, TouchableHighlight, TouchableWithoutFeedback, View} from "react-native";

import styles from './styles';
import {PageInterface} from "../../interface";

function HomePage({navigation}: PageInterface) {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => {
                navigation.navigate('ProdutoPage',
                    {
                        tipo: ['ORGANICO'],
                        loading: true,
                        dataInicio: '2018-04-02',
                        dataFim: '2018-04-02'
                    }
                );
            }}>
                <View style={styles.way}>
                    <Text>
                        Orgânicos
                    </Text>
                    <Text>
                        Produção sem uso de agrotoxicos trangenico, pesticidas sinteticos
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
                navigation.navigate('ProdutoPage',
                    {
                        tipo: ['NORMAL'],
                        loading: false,
                        dataInicio: '2018-04-02',
                        dataFim: '2018-04-02'
                    }
                );
            }}>
                <View style={styles.way}>
                    <Text>
                        Normal
                    </Text>
                    <Text>
                        Produção convencional com foco na qualidade do produto
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
            }}>
                <View style={[styles.way]}>
                    <Text>
                        O que procura?
                    </Text>
                    <Text>
                        Ex: Banana Prata
                    </Text>
                </View>
            </TouchableHighlight>
            <View style={[styles.way]}>
                <Text>
                    Não sei o que quero ainda
                </Text>
                <TouchableHighlight onPress={() => {
                    navigation.navigate('ProdutoPage',
                        {
                            tipo: null,
                            loading: false,
                            dataInicio: '2018-04-02',
                            dataFim: '2018-04-02'
                        }
                    );
                }}>
                    <View>
                        <Text>
                            ver a lista --
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default HomePage;