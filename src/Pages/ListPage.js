import React from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import List from '../Components/List';

class ListPage extends React.Component {
    constructor(props){
        super(props);
        // React com states (estados) alem das props, os states são as variaveis que definem o componente e ditam o seu comportamento
        this.state = {
            data: []
        }
    }
    static navigationOptions = {
        title: 'Lista'
    }
    // Função que faz uma chamada externa utilizando fetch, uma função nativa do EcmaScript para fazer requisições sejam http ou não
    // aqui vamos fazer um GET para receber um array de objetos
    getPeople(){
        // Configuração da requisição http
        let config = {
            method:'GET'
        }
        // a função fetch utiliza Promises que são promessas feitas pela função que ela ira retornar um resultado mas isso não impede do restante do
        // codigo de ser executado, é o que chamamos de chamada assincrona ou seja ela executa paralelamente a execução do resto da aplicação
        // o fetch me retorna 2 resultados um de sucesso que é recebido pela função THEN e um de erro pego pela funçao CATCH
        fetch('http://swapi.co/api/people',config).then((response) => {
            return response.json()
        }).then((responseJson) =>{
            console.log(responseJson.results)
            // função para atualizar um ou varios status do componente
            this.setState({
                data: responseJson.results
            })
        }).catch((err) => {
            Alert.alert('Opss!! Deu Ruim')
        })
    }
    // Função de ciclo de vida do componente, é executada logo apos o componente ser renderizado(exibido) na tela
    componentDidMount() {
        this.getPeople()
    }

    render() { 
        
        return (
           <List data={this.state.data}/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flex:1,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    listItem:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 2,
        marginRight: 2,
        padding: 5,
        borderRadius: 4,
        borderWidth: 0.4,
        borderColor: '#d6d7da',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
    title: {
        fontSize: 24
    },
    body: {
        flex: 4, 
    }
})

export default ListPage;