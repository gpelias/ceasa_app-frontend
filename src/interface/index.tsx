export interface ProdutoInterface {
    id: number | null | undefined,
    produto: string | null | undefined,
    classificacao: ClassificacaoInterface[] | null | undefined,
    embalagem: string | null | undefined,
    origem: string | null | undefined,
    tipo: string | null | undefined,
    variedade: string | null | undefined,
    convKg: string | null | undefined,
    minimo: string | null | undefined,
    comum: string | null | undefined,
    maximo: string | null | undefined,
    medioKg: string | null | undefined,
    data: Date | null | undefined,
}

export interface VariacaoInterface {
    convKg: number,
    minimo: number,
    comum: number,
    maximo: number,
    medioKg: number,
    data: Date
}

export interface ProdutoPage {
    open: boolean,
    closeModal: any,
    enums: EnumsInterface,
    enumsCheckbox: CheckboxInterface,
    updateFilter: any,
    onPress: any
}

export interface ItemInterface {
    item: ProdutoInterface
    index: number,
    separators: object
}

export interface NavigationInterface {
    addListener: () => {},
    canGoBack: () => {},
    dangerouslyGetParent: () => {},
    dangerouslyGetState: () => {},
    dispatch: () => {},
    goBack: () => {},
    isFocused: () => {},
    navigate: (pageName: string, FilterInterface: object) => {},
    pop: () => {},
    popToTop: () => {},
    push: () => {},
    removeListener: () => {},
    replace: () => {},
    reset: () => {},
    setOptions: () => {},
    setParams: () => {},
}

export interface RouteInterface {
    key: string,
    name: string,
    params: FilterInterface
}

export interface PageInterface {
    navigation: NavigationInterface,
    route: RouteInterface
}

export interface EnumsInterface {
    classificacao: enunInterface[],
    embalagem: enunInterface[],
    origem: enunInterface[],
    produto: enunInterface[],
    tipo: enunInterface[],
    variedade: enunInterface[]
}

export interface FilterInterface {
    id: number | null,
    produto: string[],
    classificacao: ClassificacaoInterface[],
    embalagem: string[],
    origem: string[],
    tipo: string[],
    variedade: string[],
    dataInicio: Date | string,
    dataFim: Date | string,
    variacaoList: VariacaoInterface[]
}

export interface DetalheFilterInterface {
    id: number | null | undefined,
}

export interface CheckboxInterface {
    classificacao: checkbox[],
    embalagem: checkbox[],
    origem: checkbox[],
    produto: checkbox[],
    tipo: checkbox[],
    variedade: checkbox[]
}

export interface enunInterface {
    nome: string,
    descricao: string
}

export interface checkbox {
    nome: string,
    descricao: string,
    status: string,
    enabled: boolean
}

export interface MapInterface {
    value: object,
    index: number,
    arrays: string[]
}

export interface CheckInterface {
    i: number,
    list: checkbox[],
    value: enunInterface,
    handlePress: any,
    updateFilter: any,
    name: string,
    getStatus: any
}

export interface ClassificacaoInterface {
    classificacao: string
}