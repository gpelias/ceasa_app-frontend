import axios from 'axios'
import {
    DetalheFilterInterface,
    EnumsInterface,
    FilterInterface,
    ProdutoInterface,
    VariacaoInterface
} from "../interface";

const url = 'http://192.168.2.106:8080/produto'

async function enuns(): Promise<EnumsInterface> {
    const {data} = await axios.get(`${url}/enums`);

    return data;
}

async function listagem(produtoFilter: FilterInterface): Promise<ProdutoInterface[]> {
    const {data} = await axios.post(`${url}/listagem`, produtoFilter);

    return data;
}

async function detalhe(detalheFilterInterface: DetalheFilterInterface): Promise<ProdutoInterface> {
    const {data} = await axios.post(`${url}/detalhe`, detalheFilterInterface);

    return data;
}

async function variacao(produtoFilter: FilterInterface): Promise<VariacaoInterface[]> {
    console.log(produtoFilter.dataInicio, produtoFilter.dataFim);
    const {data} = await axios.post(`${url}/variacao`, produtoFilter);

    return data;
}

const Service =
    {
        enuns,
        listagem,
        variacao,
        detalhe
    }
export default Service;