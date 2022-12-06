import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Calcula from './components/Calcula';

export default function App() {
	
	const [inputQtd, setInputQtd] = useState(0);
	const [qtd, setQtd] = useState(0);
	
	function enviaValor(){
		setQtd(inputQtd);
	}
  return (
    <View style={styles.container}>
    	<View style={styles.bloco}>
			<Text style={styles.titulo}>Calculadora Festa</Text>
		</View>
		  <View style={styles.bloco}>
			  <Text style={styles.label}>QTD.Convidades</Text>
			  <TextInput
				  style={styles.input}
				  value={inputQtd}  
				  onChangeText={(value) => setInputQtd(value)}
			  />
			  	  <TouchableOpacity style={styles.botao} onPress={enviaValor}>
			  	  	   <Text style={styles.txtBotao}>Calcular</Text>
			      </TouchableOpacity>
		  </View>
		  <View style={styles.bloco}>
			  <Calcula qtd={qtd} />
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    },
	
	
	bloco:{
		width:'80%',
		marginLeft:'10%'
	},
	
	
	titulo:{
		fontSize:20,
		marginLeft:'25git remote add origin https://github.com/EmanuelDeBrito/calculaFestaMobile.git%'
	},
	
	
	input:{
		borderWidth:'1',
		fontSize:20,
		width:'100%'
	},
	
	
	label:{
		marginTop: '10%',
		fontSize:'20'
	},
	
	
	botao:{
		width:'100%',
		backgroundColor:'#000',
		marginTop: '10%',
		alignItems:'center'
	},
	
	
	txtBotao:{
		fontSize:20,
		color:'#fff'
	},
});
