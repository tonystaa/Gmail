import React from 'react';
import { Text } from 'react-native';
import home from './home'

const { Home } = home.components

export default class Gmail extends React.Component {
    render(){
        return (
            <Home />
        )
    }
}