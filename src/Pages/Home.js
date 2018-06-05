import React from 'react';
// importações dos componentes do React-native
import {View, Text, StyleSheet, Button} from 'react-native';

// Modulo Home 
class Home extends React.Component{
    // Props são as informações passadas de um componente para o outro
    constructor(props){
        super(props);
        this.handleButton = this.handleButton.bind(this);
    }
    // Opções de navegação deste componente por exemplo o titulo da pagina
    static navigationOptions = {
        title: "Home"
    }

    // Controlador do botão, react usa funções para controlar eventos (onPress, onChange, etc.) de seus componentes
    handleButton(event) {
        this.props.navigation.navigate('FormTest');
    }

    // Função herdada do React.Component que renderiza o objeto no DOM, ela é obrigatoria em uma classe
    render(){
        return(
                <View style={styles.container}>
                    <Text style={styles.title}>Personagens de StarWars</Text>
                    <Button title='Mostrar' color='#841584' onPress={this.handleButton}/>
                </View>
        );
    }
}

// Estilos dos componentes deste modulo, eles são baseados no css normal mas utiliza camelCase e o padrao flexbox para criar grid
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 30    
    }
})
// exportando a classe HOME
export default Home;