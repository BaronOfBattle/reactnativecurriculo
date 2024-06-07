import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu Portfolio!</Text>
      <Image
        style={styles.image}
        source={require('./assets/Lightcast.png')} 
      />
      <Text style={styles.title}>Davi Barros</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#808080' }]}
        onPress={() => navigation.navigate('Curriculo')}
      >
        <Text style={styles.buttonText}>Acesse meu Currículo</Text>
      </TouchableOpacity>
    </View>
  );
}


function CurriculoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currículo</Text>
      <Text>Experiência:</Text>
      <Text>- GLOBO.COM</Text>
      <Text>- Monitoramento dos colaboradores que necessitavam de ajuda no geral </Text>
      <Text>- Administramento do painel de atividade dos colaboradores </Text>
      <View style={styles.separator} />
      <Text>Escolaridade:</Text>
      <Text>- Escola Técnica Estadual Dom Bosco 2020 ~ 2022</Text>
      <Text>- Faculdade SENAC - ADS 2023 ~ 2025</Text>
      <View style={styles.separator} />
      <Text>Objetivo:</Text>
      <Text>- Desenvolver habilidades em React Native</Text>
      <Text>- Contribuir para projetos de grande impacto</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Curriculo" component={CurriculoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    width: '100%', 
    height: 1, 
    backgroundColor: '#000',
    marginVertical: 30, 
  },
});
