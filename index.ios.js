import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Component1 from './app/components/Component2/Component2'

export default class myapp extends Component{
 render(){
   return(
      <View>
       <Component1 />
      </View>
   );
 }
}

AppRegistry.registerComponent('myapp', () => myapp);