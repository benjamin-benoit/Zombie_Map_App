import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    ActivityIndicator
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import Environment from '../../../Environment';

export default class Game extends Component {

    static navigationOptions = {
        title: 'Map',
    };

    render() {
        return (
            <Container>
                <Content>

                </Content>
            </Container>
        )
    }
}