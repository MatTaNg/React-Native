import { Home } from './Home';
import { render, fireEvent } from '@testing-library/react-native';
import { AsyncStorage } from 'react-native';

describe('Home', () => {

    AsyncStorage.setItem('userRegistry', JSON.stringify([
        {
            userName: 'Matt',
            password: 'Password'
        }
    ]));

    const setup = () => {
        const utils = render(<Home/>);
        const signOut = utils.getByTestId('signOut');
        return ({
            ...utils,
            signOut
        })
    }

    it('should sign out', () => {
        const { signOut, queryByText } = setup();
        fireEvent.press(signOut);
        expect(queryByText('Login')).toExist();
    })
    it('should render the users from storage', () => {
        const { queryByText } = setup();
        expect(queryByText('Matt')).toExist();
    })
})