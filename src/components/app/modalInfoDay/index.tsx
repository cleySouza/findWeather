import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {styles} from './styles';
import {ListNextHours} from '../listNextHours';

interface Props {
  item: any;
  setOpen: (open: boolean) => void;
}

export function ModalInfoDay({item, setOpen}: Props) {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        paddingHorizontal: 20,
      }}>
      <Pressable
        style={{width: '100%', height: '50%'}}
        onPress={() => setOpen(false)}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentTemp}>
            <Text style={styles.temp}>{Math.floor(item?.day?.maxtemp_c)}</Text>
            <Text style={styles.grau}>º</Text>
          </View>
          <View style={styles.contentTemp2}>
            <Text style={styles.temp2}>
              /{Math.floor(item?.day?.mintemp_c)}
            </Text>
            <Text style={styles.grau}>º</Text>
          </View>
          <Image
            style={styles.image}
            source={{uri: `https:${item?.day?.condition?.icon}`}}
          />
        </View>
        <Text style={styles.climate}>{item?.day?.condition?.text}</Text>
        <ListNextHours item={item} />
      </View>
      <Pressable
        style={{width: '100%', height: '50%'}}
        onPress={() => setOpen(false)}
      />
    </View>
  );
}
