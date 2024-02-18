import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

function SignUp() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Box maxWidth={450} padding={3} boxShadow={2} borderRadius={4} bgcolor="white">
                <Typography variant="h4" align="center" gutterBottom>
                    Cyber Guide
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                    Sign Up
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
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                        Sign Up
                    </Button>
                    <Button variant="contained" color="error" onClick={() => alert("hello " + userId)}>
                        Login
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default SignUp;
