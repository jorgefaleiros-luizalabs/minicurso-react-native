import React from "react";
import { View, TextInput, Text, StyleSheet, Alert, FlatList } from "react-native";
// Este é o exemplo de um componente sera utilizado no modulo ListPage, note que os dados da lista são enviados para este componente
// atraves de props
class List extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let itens =(({item})=> {
            return (
                <View style={styles.listItem}>
                    <Text onPress={() => Alert.alert(item.name)}>{item.name}</Text>
                </View>
            )
        })
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Personagens de Star Wars</Text>
                </View>
                <View style={styles.body}>
                {/* Dados enviados por props para criar as linhas da lista */}
                    <FlatList data={this.props.data} renderItem={itens}/>
                </View>
            </View>
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
export default List;