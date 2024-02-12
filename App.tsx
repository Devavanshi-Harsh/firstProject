import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native';

export default App = ()=> {
  const [display, setDisplay] = useState(true);
  return (
    <View>
      <Button color={"green"} onPress={()=>setDisplay(!display)} title={display?"Hide Data": "Show Data"}/>
      {
        display && <User/>
      }
      {
        display ? <User/> : null
      }
    </View>
  )
}
const User = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerData = setInterval(() => {
      setCount(count => count + 2);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(timerData);
      console.warn("Component Unmounted Finally");
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <View>
      <Text style={{ fontSize: 20, color: "orange" }}>
        This is User Component Count {count}
      </Text>
    </View>
  );
};
