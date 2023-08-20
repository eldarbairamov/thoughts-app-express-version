import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Toast } from "./component/UI/Toast/Toast.tsx";

import "./style/normalize.scss";
import './style/configuration.scss'

ReactDOM.createRoot( document.getElementById( "root" )! ).render(
    <Provider store={ store }>
       <App/>
       <Toast/>
    </Provider>
);
