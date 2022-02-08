// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://unstoppable.io" target="_blank" underline="hover">
            unstoppable.io
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://unstoppable.com" target="_blank" underline="hover">
            &copy; unstoppable.com
        </Typography>
    </Stack>
);

export default AuthFooter;
