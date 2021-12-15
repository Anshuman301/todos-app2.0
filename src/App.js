import logo from './logo.svg';
import './App.css';
import { Box, Flex, Image, keyframes, Link, Text, usePrefersReducedMotion } from '@chakra-ui/react';
const spin = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(360deg);}
`
function App() {
  const preferedReducedMotion = usePrefersReducedMotion();
  const animation = preferedReducedMotion ? undefined : `${spin} infinite 20s linear`
  return (
    <Box w='100%' >
      <Flex backgroundColor={'#282c34'} 
      minHeight={'100vh'} 
      direction={'column'} 
      align={'center'} 
      justify={'center'} 
      color='white' 
      fontSize= {'2xl'}
      >
        <Image animation={animation} height={'40vmin'}
        src={logo} className="App-logo" alt="logo" pointerEvents={'none'}
        />
        <Text>
          Edit <code>src/App.js</code> and save to reload.
        </Text>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          color={'#61dafb'}
        >
          Learn React
        </Link>
      </Flex>
    </Box>
  );
}

export default App;
