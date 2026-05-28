import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
export default function App() {
 const [visibleSolo, setVisibleSolo] = useState('solo1');
 return (
   <View style={{ padding: 20 }}>
     {/* Buttons to switch visibility */}
     <Button title="Show Solo 1" onPress={() => setVisibleSolo('solo1')} />
     <Button title="Show Solo 2" onPress={() => setVisibleSolo('solo2')} />
     {/* Conditional Rendering */}
     {visibleSolo === 'solo1' && (
       <Text style={{ fontSize: 18, marginTop: 20 }}>This is Solo 1</Text>
     )}
     {visibleSolo === 'solo2' && (
       <Text style={{ fontSize: 18, marginTop: 20 }}>This is Solo 2</Text>
     )}
   </View>
 );
}