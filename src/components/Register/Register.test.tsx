import { render, fireEvent } from '@testing-library/react-native';
import { Register } from './Register';
import { AsyncStorage } from 'react-native';

describe('Register', () => {

    AsyncStorage.setItem('userRegistry', JSON.stringify([]));

    const setup = () => {
        const utils = render(<Register />);
        const cancel = utils.getByTestId('cancel');
        const submit = utils.getByTestId('submit');
        const userNameInput = utils.getByTestId('userNameInput');
        const passwordInput = utils.getByTestId('passwordInput');
        return ({
            ...utils,
            submit,
            cancel,
            userNameInput,
            passwordInput
        })
    }

    describe('logic', () => {
        it('should register a new user', () => {
            const { userNameInput, passwordInput, submitButton } = setup();
            fireEvent.changeText(userNameInput, 'Matt');
            passwordInput.changeText(userNameInput, 'Password');
            fireEvent.press(submitButton);
            const actual = AsyncStorage.getItem('userRegistry');
            expected(actual['Matt']).toExist();
        })
        it('should reroute to the Login page', () => {
            const { cancel, queryByText } = setup();
            fireEvent.press(cancel);
            expect(queryByText('Login')).toExist();
        })
        it('should show an error if the user name exists', () => {
            AsyncStorage.setItem('userRegistry', JSON.stringify([{userName: 'Matt', password: 'Password'}]))
            const { userNameInput, passwordInput, submitButton, queryByText } = setup();
            fireEvent.changeText(userNameInput, 'Matt');
            passwordInput.changeText(userNameInput, 'Password');
            fireEvent.press(submitButton);
            expect(queryByText('User name already exists!')).toExist();
        })
    })
})