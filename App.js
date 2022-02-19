import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TouchableOpacity,onSubmitEditing,TextInput, ScrollView,Text,Image, View, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';



const App = () => {

  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const onChangeText = (payload) => setText(payload);
  
  const Hi = {};
  
  const AddToDO =() =>{
    if(text ==""){return;}
  const newToDos = {
    ...toDos,  // ...toDos는 toDos라는 새로운 객체가 아닌 이전 object를 가진 새로운 object를 만듬
    [Date.now()]:{text}, //새로운 todo도 추가함
};
  setToDos(newToDos);
  setText("");
};

const DeleteToDo = (key) => {
    const newToDos ={...toDos}; // toDos 객체를 ...으로 불러와서 다시 만들어 새 객체를 만듬
    delete newToDos[key]; //이 오브젝트에서 key를 삭제함
    setToDos(newToDos);  //
};

console.log(toDos);
return (
  <SafeAreaView>
    <TextInput style={{marginTop:250,height:50,backgroundColor:"yellow"}} onSubmitEditing={AddToDO} onChangeText={onChangeText} value={text}/>
       {Object.keys(toDos).map((key) =>(
         <View key={key} style={{}}>
           <Text>{toDos[key].text}</Text>
           <TouchableOpacity onPress={() => DeleteToDo(key)} >
           <Text>X</Text>
           </TouchableOpacity>
         </View>
       ))}
       <Text style={{marginTop:50, fontSize:25, left:110}}>넌 정말 멍청하다</Text> 
    <StatusBar/>
  </SafeAreaView>
)
}

export default App;