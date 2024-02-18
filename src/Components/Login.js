import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Box maxWidth={400} padding={3} boxShadow={2} borderRadius={4} bgcolor="white">
                <Typography variant="h4" align="center" gutterBottom>
                    Cyber Guide
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                    Login
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    label="User Id"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Box display="flex" justifyContent="space-between" marginTop={3}>
                    <Button variant="contained" color="primary" onClick={() => alert("hello " + userId)}>
                        Login
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => alert("hello " + userId)}>
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;
