import React, { Component } from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, Button} from 'react-native';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {launchImageLibrary} from 'react-native-image-picker';
import Input from '../../atoms/input';
import styles from './styles';

class GifAdd extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
        errors: {},
        };
    }

    onSubmit = () => {
        const valid = this.validateForm();
        if(!valid) {
            return;
        }

        const {image, title} = this.state;
        const data = {
            image: image.base64 ? `data:image/jpeg;base64,${image?.base64}` : null,
            title: title,
        }
        this.props.onSubmit(data);
    };

    validateForm = () => {
        const {title, image} = this.state;

        let valid = true;
        let errors = {};

        if(!image) {
            errors.image = 'Select image';
            valid = false;
        }

        if(!title) {
            errors.title = 'Enter name';
            valid = false;
        }

        this.setState({errors});
        return valid;

    } 


    onOpenImageLibrary = () => {
        const imageOptions = {
            mediaType: 'photo',
            maxWidth: 1280,
            maxHeigth: 1280,
            includeBase64: true,
    };
    launchImageLibrary(imageOptions, media => {
        if(media.assets?.length) {
            this.setState({image: media.assets[0]});
        }
    });
}

    render() {
        const {image, title, errors} = this.state;
        return(
            <SafeAreaView style={styles.container}>
            <KeyboardAvoidingScrollView>
                <View style={styles.imageContainer}>
                    <TouchableOpacity
                        style={styles.imageButtonContainer}
                        onPress={this.onOpenImageLibrary}>
                        {image ? (
                            <Image style={styles.image} source={{uri: image.uri}}/>
                        ) : null}
                        <View>
                        <Text style={styles.imageButtonLabel}>Seleccionar Imagen</Text>
                        </View>
                    </TouchableOpacity>
                    {errors?.image ? (
                        <Text style={styles.error}>{'Seleccione una image'}</Text>
                    ) : null}
                </View>
            </KeyboardAvoidingScrollView>

            <Input></Input>

            </SafeAreaView>
        )
    }
}


export default GifAdd;