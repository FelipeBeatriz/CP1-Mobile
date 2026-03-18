import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, TextInput, Button } from 'react-native';
import ShowData from './components/ShowData';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  
  const[nomeAluno, setNomeAluno] = useState('');
  const[cursoAluno, setCursoAluno] = useState('');
  const[disciplinaAluno, setDisciplinaAluno] = useState('');
  const[descricaoAluno, setDescricaoAluno] = useState('');
  const[mostrarDados, setMostrarDados] = useState(false);

  const exibirDados = () => {
    if(nomeAluno === '' || cursoAluno === '' || disciplinaAluno === '' || descricaoAluno === ''){
      setMostrarDados(false);
      alert('Por favor, preencha todos os campos antes de enviar.');
    } else {
      setMostrarDados(true);
      alert('Dados enviados com sucesso!');
    }
  };

  useEffect(() => {
    setMostrarDados(false);
    console.log("O componente foi montado ou atualizado com sucesso.");
  }, [nomeAluno, cursoAluno, disciplinaAluno, descricaoAluno]);

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Cadastro de Aluno</Text>
        <Image
        source={require('./assets/logo.png')}
        style={styles.image}/>

      <StatusBar style="auto" />

      <TextInput
        placeholder='Digite seu nome...'
        style={styles.input}
        maxLength={50}
        autoCapitalize='words'
        onChangeText={setNomeAluno}
      />

      <TextInput
        placeholder='Digite seu curso...'
        style={styles.input}
        autoCapitalize='words'
        onChangeText={setCursoAluno}
      />

      <TextInput
        placeholder='Digite sua disciplina...'
        style={styles.input}
        autoCapitalize='words'
        onChangeText={setDisciplinaAluno}
      />

      <TextInput
        placeholder='Digite sua descrição pessoal...'
        style={styles.inputMultiline}
        autoCapitalize='none'
        onChangeText={setDescricaoAluno}
      />

      <Button title='Enviar' color='#000' onPress={() => {exibirDados();}}/>

      {mostrarDados &&
        <ShowData
          nome={nomeAluno}
          curso={cursoAluno}
          disciplina={disciplinaAluno}
          descricao={descricaoAluno}
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  image: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderRadius: 6,
    borderWidth: 2,
    width: '80%',
    paddingHorizontal: 10,
  },
  inputMultiline: {
    height: 80,
    flexWrap: 'wrap',
    borderColor: '#ccc',
    borderRadius: 6,
    borderWidth: 2,
    width: '80%',
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});
