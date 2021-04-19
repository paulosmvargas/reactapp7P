import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/services/api';
import Prodts from './src/components/Prodts';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      prodt:[]
    }
  }

  async componentDidMount(){
    const response = await api.get('items');
      this.setState({
        prodt: response.data
      })
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList data={this.state.prodt}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => <Prodts data={item}/>}>
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  }
});

