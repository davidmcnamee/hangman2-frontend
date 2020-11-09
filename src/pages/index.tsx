import { useEffect } from "react";
import { wsClient } from '../util/websocket';

const Index = () => {
  useEffect(() => {
    wsClient.onopen = () => console.log('connected');
    wsClient.onmessage = (m) => console.log(m);
    console.log('useeffect');
  }, []);
  
  return (
    <main>
      <h1>Hangman 2.0</h1>
    </main>
  );
}

export default Index;
