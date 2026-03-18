import { StyleSheet, Text, View } from "react-native";

const ShowData = ({nome, curso, disciplina, descricao}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.field}>Nome: {nome}</Text>
        <Text style={styles.field}>Curso: {curso}</Text>
        <Text style={styles.field}>Disciplina: {disciplina}</Text>
        <Text style={styles.field}>Descrição pessoal: {descricao}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  field: {
    fontSize: 20,
  }
});

export default ShowData