import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Header, Card } from "@rneui/themed";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        backgroundColor="green"
        placement="center"
        centerComponent={{ text: "Comidas tipicas de El Salvador", style: styles.header }}
      />
      <ScrollView>
      <Card>
        <View style={styles.user}>
          <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{uri:'https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg'}}
          />
          <View>
            <Text style={{fontWeight:"bold", fontSize:32}}>Pupusas</Text>
            <Text style={{fontSize:16}}>256 calorias</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.user}>
          <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{uri:'https://tipsparatuviaje.com/wp-content/uploads/2020/02/tamales-comida.jpg'}}
          />
          <View>
            <Text style={{fontWeight:"bold", fontSize:32}}>Tamales Variados</Text>
            <Text style={{fontSize:16}}>150 calorias</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.user}>
          <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{uri:'https://tipsparatuviaje.com/wp-content/uploads/2020/02/yuca-frita-o-salcochada.jpg'}}
          />
          <View>
            <Text style={{fontWeight:"bold", fontSize:32}}>Yuca Frita</Text>
            <Text style={{fontSize:16}}>108 calorias</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.user}>
          <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{uri:'https://tipsparatuviaje.com/wp-content/uploads/2020/02/sopa-de-pata.jpg'}}
          />
          <View>
            <Text style={{fontWeight:"bold", fontSize:32}}>Sopa de Pata</Text>
            <Text style={{fontSize:16}}>727 calorias</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.user}>
          <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{uri:'https://tipsparatuviaje.com/wp-content/uploads/2020/02/panes-con-gallina.jpg'}}
          />
          <View>
            <Text style={{fontWeight:"bold", fontSize:32}}>Panes con Pavo</Text>
            <Text style={{fontSize:16}}>343 calorias</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.user}>
          <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{uri:'https://tipsparatuviaje.com/wp-content/uploads/2020/02/atol-bebida.jpg'}}
          />
          <View>
            <Text style={{fontWeight:"bold", fontSize:32}}>Atol</Text>
            <Text style={{fontSize:16}}>541 calorias</Text>
          </View>
        </View>
      </Card>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    color: "white",
    fontSize: 20,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});
