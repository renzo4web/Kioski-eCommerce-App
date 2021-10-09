import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenu} from './src/navigator/SideMenu';
import {ProductsProvider} from "./src/context/ProductsContext/ProductsContext";

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <SideMenu/>
            </AppState>
        </NavigationContainer>
    );
};

const AppState: React.FC = ({children}) => {
    return (
        <ProductsProvider>
            {children}
        </ProductsProvider>
    )
}

export default App;

/* Copyright Renzo Barrios 2021. All Rights Reserved */
