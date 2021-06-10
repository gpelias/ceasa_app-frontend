import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../pages/Home";
import ProdutoPage from "../pages/Produto";
import VariacaoPage from "../pages/Variacao";
import ProdutoDetalhePage from "../pages/ProdutoDetalhe";
import GraficoPage from "../pages/Grafico";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="HomePage" component={HomePage}/>
                <Screen name="ProdutoPage" component={ProdutoPage}/>
                <Screen name="DetalhePage" component={ProdutoDetalhePage}/>
                <Screen name="VariacaoPage" component={VariacaoPage}/>
                <Screen name="GraficoPage" component={GraficoPage}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes;