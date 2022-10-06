import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import Comfort from "../img/Comfort1.png";
import Grid from '@mui/material/Grid';
import Item  from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';



export default function Footer(){
    return(
        <div>
            <div className='Footer'>
                <h2> <img src={Comfort}/>  </h2>
                <div className='Setka'>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        width: 190,
                        height: 120,
                        },
                    }}
                    >
                    <Paper elevation={0} >
                        <Item>
                            <CallIcon sx={{ fontSize: 40 }}/>
                            <h8>Телефоны</h8>
                            <br/><h9>+7(925)739-93-03</h9>
                            <br/><h9>+7(925)739-93-03</h9>
                            <br/><h9>+7(495)642-24-31</h9>
                        </Item>
                    </Paper>
                    <Paper elevation={0} >
                        <Item>
                            <AlternateEmailIcon sx={{ fontSize: 40 }}/>
                            <h8>Эл.Почта</h8>
                            <br/><h9>www.baxi-comfort.ru</h9>
                            <br/><h9>info@baxi-comfort.ru</h9>
                        </Item>
                    </Paper>
                    <Paper elevation={0} >
                        <Item>
                            <AccessTimeIcon sx={{ fontSize: 40 }}/>
                            <h8>Мы работаем</h8>
                            <br/><h9>ПН-ПТ: 8.00 -19.00 </h9>
                        </Item>
                    </Paper>
                    <Paper elevation={0} >
                        <Item>
                            <AccessTimeIcon sx={{ fontSize: 40 }}/>
                            <h8>Приезжайте</h8>
                            <br/><h9>МО, г.Дмитров ,ул.Профессиональная ,д.135 </h9>
                        </Item>
                    </Paper>
                    </Box>
                </div>
                <div className='Icons'>
                    <Stack direction="row" spacing={2}>
                        <IconButton aria-label="delete" size="large">
                            <TelegramIcon sx={{ fontSize: 40 }}/>
                        </IconButton>
                        <IconButton aria-label="delete" size="large">
                            <CallIcon sx={{ fontSize: 40 }}/>
                        </IconButton>
                        <IconButton aria-label="delete" size="large">
                            <MailIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Stack>  
                </div>
            </div>
        </div>
    )
}