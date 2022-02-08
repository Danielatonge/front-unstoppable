// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Berry" width="100" />
         *
         */
        <svg width="42" height="40" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.1373" cy="5.51909" r="2.2" fill="#6DCE9E" />
            <circle cx="11.1182" cy="5.5" r="5" stroke="#6DCE9E" />
            <circle cx="16.5193" cy="14.5191" r="2.2" fill="#6DCE9E" />
            <circle cx="16.5" cy="14.5" r="5" stroke="#6DCE9E" />
            <circle cx="5.51908" cy="14.5191" r="2.19999" fill="#6DCE9E" />
            <circle cx="5.49997" cy="14.5" r="5" stroke="#6DCE9E" strokeWidth="0.999939" />
        </svg>
    );
};

export default Logo;
