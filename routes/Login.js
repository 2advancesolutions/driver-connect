import React, { useState } from 'react';
import { View } from 'react-native';
import { Text ,TextInput, Button, Paragraph } from 'react-native-paper';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // handle login
    };

    return (
        <View>
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCompleteType="email"
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCompleteType="password"
            />
            <Button mode="contained" onPress={handleSubmit}>
                Login
            </Button>
            <Paragraph>Don't have an account? <Text>Sign up</Text> </Paragraph>
            </View>
    )
}

export default Login;
