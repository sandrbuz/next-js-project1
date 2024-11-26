"use client";

//если оборачивать главный layout.js в <Provider/> от Redux, то нужно чтобы layout.js был клиентским. Либо использовать этот клиентский провайдер

import { Provider } from 'react-redux';
import store from './redux-store';

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
