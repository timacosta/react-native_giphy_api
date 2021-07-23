import React, { Component } from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, Button} from 'react-native';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {launchImageLibrary} from 'react-native-image-picker';
import Input from '../../atoms/input';
import styles from './styles';
import colors from '../../../assets/colors';

class GifAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
        image: null,
        title: '',
        errors: {},
        };
        console.log(this.props.gif)
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
        console.log("data",data),
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
                        <Text style={styles.imageButtonLabel}>Choose an image</Text>
                        </View>
                    </TouchableOpacity>
                    {errors?.image ? (
                        <Text style={styles.error}>{'Choose an image'}</Text>
                    ) : null}
                </View>
            </KeyboardAvoidingScrollView>

            <Input
                style={styles.input}
                label="Title"
                placeholder="Enter title"
                value={title}
                onChangeText={text => this.setState({title: text})}
                error={errors?.title}
                keyboardType="default"
            />

            <Button
            title="Submit"
            onPress={this.onSubmit}
        
            />

            </SafeAreaView>
        )
    }
}


export default GifAdd;