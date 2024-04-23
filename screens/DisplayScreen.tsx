import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useStudentContext } from '../StudentContext';

type RootStackParamList = {
  DisplayScreen: {
    registration: string;
    name: string;
    grade: number;
  };
};

type DisplayScreenRouteProp = RouteProp<RootStackParamList, 'DisplayScreen'>;

type DisplayScreenProps = {
  route: DisplayScreenRouteProp;
};

const DisplayScreen: React.FC = () => {
  const { students } = useStudentContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Alunos:</Text>
      {students.length > 0 ? (
        students.map((student, index) => (
          <View key={index} style={styles.studentContainer}>
            <Text style={styles.studentText}>Matrícula: {student.registration}</Text>
            <Text style={styles.studentText}>Nome: {student.name}</Text>
            <Text style={styles.studentText}>Média: {student.grade}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noStudentsText}>Nenhum aluno registrado ainda.</Text>
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1B22', // Cor de fundo da InputScreen
  },
  
  title: {
    color: 'white',
    fontSize: width > 600 ? 32 : 24,
    marginBottom: 20,
  },

  studentContainer: {
    borderWidth: 1,
    borderColor: '#440000',
    padding: 10,
    marginVertical: 10,
    width: width >  600 ? '60%' : '80%',
    elevation: 3, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#303030', // Cor de fundo para cada aluno
    borderRadius: 8,
  },

  studentText: {
    color: 'white',
    fontSize: width > 600 ? 18 : 16,
  },

  noStudentsText: {
    color: '#990000',
    fontSize: width > 600 ? 18 : 16,
    textAlign: 'center',
  },
});

export default DisplayScreen;
