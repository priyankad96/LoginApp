import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '../index';
import Login from '../components/login';


const AppNavigator = createStackNavigator({
    Home,
    Login,
},{
  headerMode:'none',
});

export default createAppContainer(AppNavigator);
