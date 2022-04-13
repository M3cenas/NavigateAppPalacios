import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {signin, signup} from '../../store/actions/auth.action';
import {colors} from '../../constants/themes';
import Input from '../../components/atoms/input';

const Auth = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotValid, setIsNotValid] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);

  const onChangeInput = (value, type) => {
    if (type === 'email') {
      setEmail(value);
    }
    if (type === 'password') {
      setPassword(value);
    }

    if (
      emailInputRef.current.state.validate &&
      passwordInputRef.current.state.validate
    ) {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }
  };

  const handleAuth = () => {
    if (isLogin) {
      dispatch(signin(email, password));

      console.log(userId);
    } else {
      dispatch(signup(email, password));
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={50}
      enabled>
      <View style={styles.containerCard}>
        <Text style={styles.formTitle}>{isLogin ? 'Login' : 'Register'}</Text>
        <View style={styles.formContainer}>
          <Input
            ref={emailInputRef}
            label="Email"
            placeholder="Ingresa tu correo"
            placeholderTextColor={colors.placeholder}
            keyboardType="email-address"
            type="email"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeInput={value => onChangeInput(value, 'email')}
            value={email}
            maxLength={60}
          />
          <Input
            ref={passwordInputRef}
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            placeholderTextColor={colors.placeholder}
            type="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            onChangeInput={value => onChangeInput(value, 'password')}
            value={password}
            maxLength={20}
          />
        </View>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.linkText}>
            {isLogin
              ? '¿No tienes una cuenta? registrate'
              : '¿Ya tienes una cuenta? incia sesión'}
          </Text>
        </TouchableOpacity>
        <Button
          title={isLogin ? 'Ingresar' : 'Registrar'}
          onPress={() => handleAuth()}
          disabled={isNotValid}
          color={colors.primaryColor}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
