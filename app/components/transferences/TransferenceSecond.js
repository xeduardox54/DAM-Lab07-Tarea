import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

export default function TransferenceSecond(props) {

    const {params} = props.route;
    var notificar = 'NO';
    if(params.object.isEnabled) notificar= 'SI';

    return (
        <View style={styles.container}>
            <Text>Cuenta origen</Text>
                <TextInput value={params.object.origen} editable={false} style={styles.input}/>
            <Text>Cuenta destino</Text>
                <TextInput value={params.object.destino} editable={false} style={styles.input}/>
            <Text>Importe</Text>
                <TextInput value={params.object.importe} editable={false} style={styles.input}/>
            <Text>Referencia</Text>
                <TextInput value={params.object.referencia} editable={false} style={styles.input}/>
            <Text>Fecha</Text>
                <TextInput value={params.object.fecha} editable={false} style={styles.input}/>
            <Text>Notificarme al mail</Text>
                <TextInput value={notificar} editable={false} style={styles.input}/>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonVolver} onPress={()=>params.navigator.navigate('First')}>
                    <Text style={{color:'black'}}>VOLVER</Text>
                </TouchableOpacity>
                <View style={{width:30}}/>
                <TouchableOpacity style={styles.ButtonSiguiente} onPress={()=>params.navigator.navigate('Third',{navigator:params.navigator})}>
                    <Text style={{color:'white'}}>SIGUIENTE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = {
    container: {
        margin: 30,
    },
    input: {
        backgroundColor: '#858a964d',
        height: 40,
    },
    buttons: {
        marginTop: 30,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonVolver: {
        backgroundColor:'gray',
        fontSize:20,
        width:100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
    ButtonSiguiente: {
        backgroundColor:'blue',
        fontSize:20,
        width:130,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
}