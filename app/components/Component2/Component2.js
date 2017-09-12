import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Component2 extends Component {
    render() {
        return (
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}>Hello Bui</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.v1}>
                        <Text>View 1</Text>
                    </View>
                    <View style={styles.v2}>
                        <Text>View 2</Text>
                    </View>
                    <View style={styles.v3}>
                        <Text>View 3</Text>
                    </View>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    myText: {
        color: 'white'
    },
    container:{
        flexDirection: 'row',
        height:100
    },
    v1:{
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    v2:{
        flex:1,
        backgroundColor:'green',
        padding:10
    },
    v3:{
        flex:1,
        backgroundColor:'black',
        padding:10
    },
});

AppRegistry.registerComponent('Component2', () => Component2);