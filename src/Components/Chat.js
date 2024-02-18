import React, { useState, useEffect } from 'react';
import { Box, Button, Chip, List, ListItem, Paper, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DrawerComponent from './DrawerComponent';
import BottomNavigationComponent from './BottomNavigationComponent';
import NavComponent from './NavComponent';

function Chat() {
    const [chats, setChats] = useState([]);
    const [userId, setUserId] = useState("Pratik123");
    const [chat, setChat] = useState("");

    let dt = [
        { userId: 'Pratik123', text: 'Where are you' },
        { userId: 'Ayush123', text: 'I am here' },
        { userId: 'Ayush123', text: 'Where are you' },
        { userId: 'Pratik123', text: 'Where are you' },
        { userId: 'Ayush123', text: 'I am here' },
        { userId: 'Ayush123', text: 'Where are you' }
    ];

    useEffect(() => {
        setChats(dt);
    }, []);

    const renderChats = () => {
        if (chats.length === 0) {
            return <Box />;
        } else {
            return chats.map((e, key) => (
                <ListItem key={key} sx={{ justifyContent: e.userId === userId ? 'flex-end' : 'flex-start' }}>
                    <Box>
                       <Chip label={e.text} color={e.userId === userId ? 'primary' : 'secondary'} variant="outlined">
                          <h4>{e.text}</h4>
                       </Chip>
                    </Box>
                </ListItem>
            ));
        }
    };

    return (
        <Box>
            <NavComponent drawerElements={['Option 1', 'Option 2', 'Option 3']} />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent:'flex-end' }}>
                <Box sx={{ flex: 1, overflowY: 'auto', padding: '20px', maxWidth:800  }}>
                    <List sx={{ padding: 2, borderRadius: 4, boxShadow: 1, justifyContent:'center', alignItems:'center' }}>
                        {renderChats()}
                    </List>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', borderTop: '1px solid #ccc', maxWidth:800}}>
                    <TextField sx={{ flex: 1, margin: '40px' }} variant="outlined" placeholder="Chat" onChange={(e) => setChat(e.target.value)} />
                    <Button>
                        <SendIcon />
                    </Button>
                </Box>
                <Paper>
                    <BottomNavigationComponent />
                </Paper>
            </Box>
        </Box>
    );
}

export default Chat;
