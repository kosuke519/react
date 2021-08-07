import theme from "./theme/theme";
import { Router } from "./router/Router";
import {  ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter} from "react-router-dom"

export default function App() {
  return (

      <ChakraProvider theme={theme}>
        <BrowserRouter>
       <Router/>
        </BrowserRouter>
      </ChakraProvider>
   
  );
}

