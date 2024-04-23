import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useStudentContext } from '../StudentContext';

type InputScreenProps = {
  navigation: any; // Você pode substituir "any" por um tipo mais específico se souber o tipo exato da prop navigation
};

const InputScreen: React.FC = () => {
  const navigation = useNavigation();
  const { storeStudentData } = useStudentContext(); // Use o hook useStudentContext para acessar o contexto do estudante
  const [registration, setRegistration] = useState('');
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = () => {
    // Converta a grade para um número
    const gradeNumber = parseFloat(grade);
    // Armazenar temporariamente os dados antes de navegar
    const studentData = { registration, name, grade: gradeNumber };
    storeStudentData(studentData); // Armazenar os dados no contexto do estudante
    // Navegar para a tela de exibição
    navigation.navigate('DisplayScreen');
  };


  const handleRegistrationChange = (text: string) => {
    setRegistration(text);
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleGradeChange = (text: string) => {
    setGrade(text);
  };

  const handleDisplayScreen = () => {
    navigation.navigate('DisplayScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={ styles.title }>Insira seus Dados</Text>
      <TextInput
        placeholder="Matrícula"
        value={registration}
        onChangeText={handleRegistrationChange}
        style={styles.input}
      />
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={handleNameChange}
        style={styles.input}
      />
      <TextInput
        placeholder="Média"
        value={grade}
        onChangeText={handleGradeChange}
        style={styles.input}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.displayButton} onPress={handleDisplayScreen}>
        <Text style={styles.displayButtonText}>Ver Alunos Registrados</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1B22',
    paddingHorizontal: width > 600 ? 50 : 20,
  },

  title: {
    color: 'white',
    fontSize: width > 600 ? 32 : 24,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: width > 1000 ? 600 : 200,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  submitButton: {
    marginTop: 20, // Aumenta a margem do botão "Enviar"
    backgroundColor: '#440000',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 8,
  },

  submitButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  displayButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#440000',
    borderRadius: 8,
  },

  displayButtonText: {
    color: 'white',
    fontSize: 16,
  },
  
});
export default InputScreen;
