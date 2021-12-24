import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Box, ChakraProvider, Text} from "@chakra-ui/react"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodosApp from './routes/TodosApp';
import { pxToRem } from './utils/theme.utils';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <ChakraProvider >
      <BrowserRouter>
      <Routes>
        <Route path="/todos-app2.0" element={<App/>}/>
        <Route path="/todos-app2.0/todo-app" element={<TodosApp/>}/>
        <Route path="*" element={<Box as="main" p={pxToRem(5)}><Text>There's nothing here</Text></Box>}/>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
