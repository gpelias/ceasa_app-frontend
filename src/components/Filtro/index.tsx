import React from "react";
import {Modal, ScrollView, Text, TouchableHighlight, View} from "react-native";

import styles from "./styles";
import Checkbox from "../Checkbox";
import {ProdutoPage} from "../../interface";

const FiltroModal: React.FunctionComponent<ProdutoPage> = (
    {
        open,
        closeModal,
        enums,
        enumsCheckbox,
        updateFilter,
        onPress
    }
) => {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={open}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView>
                            <View>
                                <Text>Classificacoes</Text>
                                {enums.classificacao.map(
                                    (item, key) =>
                                        enumsCheckbox.classificacao[key].enabled ?
                                            (
                                                <Checkbox
                                                    key={key}
                                                    i={key}
                                                    handlePress={onPress}
                                                    updateFilter={updateFilter}
                                                    list={enumsCheckbox.classificacao}
                                                    value={item}
                                                    name={'classificacao'}
                                                    getStatus={enumsCheckbox.classificacao[key].status}
                                                />
                                            )
                                            :
                                            (<View key={key}/>)
                                )}
                            </View>
                            <View>
                                <Text>Embalagem</Text>
                                {enums.embalagem.map(
                                    (item, key) => enumsCheckbox.embalagem[key].enabled ?
                                        (
                                            <Checkbox
                                                key={key}
                                                i={key}
                                                handlePress={onPress}
                                                updateFilter={updateFilter}
                                                list={enumsCheckbox.embalagem}
                                                value={item}
                                                name={'embalagem'}
                                                getStatus={enumsCheckbox.embalagem[key].status}
                                            />
                                        )
                                        :
                                        (<View key={key}/>)
                                )}
                            </View>
                            <View>
                                <Text>Origem</Text>
                                {enums.origem.map(
                                    (item, key) => enumsCheckbox.origem[key].enabled ?
                                        (
                                            <Checkbox
                                                key={key}
                                                i={key}
                                                handlePress={onPress}
                                                updateFilter={updateFilter}
                                                list={enumsCheckbox.origem}
                                                value={item}
                                                name={'origem'}
                                                getStatus={enumsCheckbox.origem[key].status}
                                            />
                                        )
                                        :
                                        (<View key={key}/>)
                                )}
                            </View>
                            <View>
                                <Text>Produtos</Text>
                                {enums.produto.map(
                                    (item, key) => enumsCheckbox.produto[key].enabled ?
                                        (
                                            <Checkbox
                                                key={key}
                                                i={key}
                                                handlePress={onPress}
                                                updateFilter={updateFilter}
                                                list={enumsCheckbox.produto}
                                                value={item}
                                                name={'produto'}
                                                getStatus={enumsCheckbox.produto[key].status}
                                            />
                                        )
                                        :
                                        (<View key={key}/>)
                                )}
                            </View>
                            <View>
                                <Text>Tipo</Text>
                                {enums.tipo.map(
                                    (item, key) => enumsCheckbox.tipo[key].enabled ?
                                        (
                                            <Checkbox
                                                key={key}
                                                i={key}
                                                handlePress={onPress}
                                                updateFilter={updateFilter}
                                                list={enumsCheckbox.tipo}
                                                value={item}
                                                name={'tipo'}
                                                getStatus={enumsCheckbox.tipo[key].status}
                                            />
                                        )
                                        :
                                        (<View key={key}/>)
                                )}
                            </View>
                            <View>
                                <Text>Variedade</Text>
                                {enums.variedade.map(
                                    (item, key) => enumsCheckbox.variedade[key].enabled ?
                                        (
                                            <Checkbox
                                                key={key}
                                                i={key}
                                                handlePress={onPress}
                                                updateFilter={updateFilter}
                                                list={enumsCheckbox.variedade}
                                                value={item}
                                                name={'variedade'}
                                                getStatus={enumsCheckbox.variedade[key].status}
                                            />
                                        )
                                        :
                                        (<View key={key}/>)
                                )}
                            </View>
                            <TouchableHighlight
                                style={{...styles.openButton, backgroundColor: "#2196F3"}}
                                onPress={closeModal}
                            >
                                <Text style={styles.textStyle}>Filtrar</Text>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default FiltroModal;