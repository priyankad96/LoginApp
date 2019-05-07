import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import Constant from '../helper/constant';

const AppButton = (props) => {
    const {btnOuter,btnText} = styles;
    const {title, onPress, extraStyle} = props;
    return(
        <TouchableOpacity style={[btnOuter,extraStyle && extraStyle]}
                          onPress={onPress}>
            <Text style={btnText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btnOuter:{
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    btnText:{
        color:'#000',
        fontWeight: '600'
    }
});

export {AppButton};
