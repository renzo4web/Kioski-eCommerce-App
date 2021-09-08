import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {styles} from '../theme/appTheme';
import data from '../assets/data.json';

interface Props extends StackScreenProps<any, any> {}

export interface Planet {
  name: string;
  overview: Geology;
  structure: Geology;
  geology: Geology;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
}

export interface Geology {
  content: string;
  source: string;
}

export interface Images {
  planet: string;
  internal: string;
  geology: string;
}

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Home</Text>
      <FlatList
        data={data}
        keyExtractor={({name}) => name}
        renderItem={({item}: {item: Planet}) => {
          return (
            <View style={{alignSelf: 'center', marginVertical: 30}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Planet', {item})}>
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    resizeMode: 'stretch',
                  }}
                  source={{
                    uri: item.images.planet,
                  }}
                />
                <Text style={styles.title}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
