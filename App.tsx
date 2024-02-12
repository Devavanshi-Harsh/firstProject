import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native';

export default App =()=> {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.warn(count);
  }, [])
  return (
    <View>
      <Text>UseEffect Mounting Phase count: {count} </Text>
      <Button color={"green"} onPress={()=>setCount(count+2)} title='Add 2'/>
    </View>
  )
}
