var moment = require('moment');
moment.locale('es');

import React, {Component} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity, Switch, Alert} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const data = [
    { key: 1, section: true, label: 'Cuentas' },
    { key: 2, label: '0000026597832' },
    { key: 3, label: '0000095641321' },
    { key: 4, label: '0000025487951' },
];

export default class TransferenceFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            isEnabled: false,
            origen: '',
            destino: '',
            importe: 0,
            referencia: '',
            fecha: '',
            message: '',
        };
    }

    render() {
        //Métodos para el Datetime Picker
        const showDatePicker = () => this.setState({isDatePickerVisible: true});
        const hideDatePicker = () => this.setState({isDatePickerVisible: false});
        const handleConfirm = (date) => {this.setState({fecha: moment(date).format("YYYY/MM/DD")}); hideDatePicker()};
        //Método para el Switch
        const toggleSwitch = () => this.setState({isEnabled: !this.state.isEnabled});

        const validate = () => {
            const data = {
                object:this.state,
                navigator:this.props.navigation}
            if(this.state.origen==''||this.state.destino==''||this.state.referencia==''||this.state.fecha==''){
                alert('No se han llenado todos los campos');
                return;
            }
            if(parseInt(this.state.importe)>=0){
                this.props.navigation.navigate('Second',data);
                return;
            }
            alert('El importe debe ser un número y positivo');
        };

        return (
            <View style={styles.container}>
                <Text>Cuenta origen</Text>
                <ModalSelector
                    data={data}
                    initValue="Seleccciona una cuenta"
                    style={styles.input} 
                    onChange={(option)=>this.setState({origen:option.label})}/>
                <Text>Cuenta destino</Text>
                <ModalSelector
                    data={data}
                    initValue="Seleccciona una cuenta" 
                    style={styles.input}
                    onChange={(option)=>this.setState({destino:option.label})}/>
                <Text>Importe</Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={(text)=>this.setState({importe:text})}/>
                <Text>Referencia</Text>
                    <TextInput style={styles.input} onChangeText={(text)=>this.setState({referencia:text})}/>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={showDatePicker}>
                        <Text style={styles.date}>{this.state.fecha}</Text>
                    </TouchableOpacity>
                </View>
                <DateTimePickerModal
                    isVisible={this.state.isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <View style={styles.switch}>
                    <Text>Notificarme al mail</Text>    
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={this.state.isEnabled}
                    />
                </View>
                <View style={{ alignItems: 'center'}}>
                    <View style={{width:120,}}>
                        <Button title="Siguiente" onPress={validate} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        margin: 30,
    },
    input: {
        backgroundColor: '#858a964d',
        height: 40,
    },
    switch: {
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom:10
    },
    date: {
        marginTop: 30,
        marginBottom: 10,
        width: 110,
        height: 30,
        fontSize: 20,
        backgroundColor: '#858a964d',
    }
}