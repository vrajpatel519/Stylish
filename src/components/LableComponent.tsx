import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View, Image, Text } from 'react-native';

interface LableComponentProps extends TextInputProps {
  value:string
 
  style?:object
}

const LabelComponent: React.FC<LableComponentProps> = ({ 
 
  value, 
  
  style
 
}) => {
  return (

    <Text style={style}> {value}</Text>
 
  );
};



export default LabelComponent;
