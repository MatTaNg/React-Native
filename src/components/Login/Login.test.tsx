import { render, fireEvent } from '@testing-library/react-native';
import { Login } from './Login';
import { AsyncStorage } from 'react-native';

describe('Login', () => {

    AsyncStorage.setItem('userRegistry', JSON.stringify([]));

    const setup = () => {
        const utils = render(<Login />);
        const userNameLabel = utils.getByText('UserName')
        const passwordLabel = utils.getByText('Password')
        const userNameInput = utils.getByText('userNameInput')
        const passwordInput = utils.getByTestId('passwordInput')
        const submitButton = utils.getByTestId('submit')
        return ({
            ...utils,
            userNameLabel,
            passwordLabel,
            userNameInput,
            passwordInput,
            submitButton
       } )
    }
    it('should render UserName Input', () => {
        const { userNameInput } = setup();
        expect(userNameInput).toExist();
    })
    it('should render Password Input', () => {
        const { passwordInput } = setup();
        expect(passwordInput).toExist();
    })
    it('should render UserName Label', () => {
        const { userNameLabel } = setup();
        expect(userNameLabel).toExist();
    })
    it('should render Password Label', () => {
        const { passwordLabel } = setup();
        expect(userNameLabel).toExist();
    })

    describe('logic', () => {
        it('should reroute to the home page', () => {
            const { userNameInput, passwordInput, submitButton } = setup();
            fireEvent.changeText(userNameInput, 'Matt');
            passwordInput.changeText(userNameInput, 'Password');
            fireEvent.press(submitButton);
        })
        it('should reroute to the Register page', () => {
            
        })
        it('should open an error modal', () => {

        })
    })
})