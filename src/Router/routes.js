import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Home from '../Pages/Home';
import ListPage from '../Pages/ListPage';

// Componente de rotas, este componente cria um gerenciador de rotas no formato de stack (pilha) mas é possivel 
// criar gerenciadores em outros modelo: drawer (menu lateral) e tab
// Documentação: https://reactnavigation.org/docs/en/custom-navigator-overview.html
const Router = createStackNavigator(
    {
        HomeScreen: {
            screen: Home
        },
        FormTest: {
            screen: ListPage
        }
    },
    {
        initalRoute: 'HomeScreen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff'
        }
    }
);

// const Router = createDrawerNavigator(
//     {
//         HomeScreen: {
//             screen: Home
//         },
//         FormTest: {
//             screen: ListPage
//         }
//     },
//     {
//         initalRoute: 'HomeScreen',
//         navigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#f4511e'
//             },
//             headerTintColor: '#fff'
//         }
//     }
// );


export default Router; 