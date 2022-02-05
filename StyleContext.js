import { StyleSheet } from 'react-native';
import { createContext } from 'react';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button: {
    width:40,
    margin:5,
    marginTop:20,
  },
  wideButton: {
    width:120,
    margin:5,
    marginTop:20,
  },
  horizontal: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'space-evenly',
  }
});

export const StyleContext = createContext( styles );