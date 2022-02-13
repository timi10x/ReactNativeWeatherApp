import React from "react";
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = text => {
        this.setState({text});
    };

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if(!text) return

        onSubmit(text);
        this.setState({ text: '' });
    }

    render() {
        const { placeholder } = this.props;
        const { text } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='white'
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666',
        height: 30,
        marginTop: 20,
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    textInput: {
        flex: 1,
        color: 'white'
    }
})