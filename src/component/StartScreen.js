import * as React from 'react';
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

export default function StartScreen(){
    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: '#0069d9',
          borderColor: '#0062cc',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#005cbf',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      });
      
      const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));
    return(
        <div >
            <div className='Up'>
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

            <div className='BigPhoto'>
                <h1>Проектирование <IconButton aria-label="delete" size="large">
                            <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
                        </IconButton> Монтаж <IconButton aria-label="delete" size="large">
                            <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
                        </IconButton> Обслуживание </h1>
                        <h1>Проектирование и монтаж инженерных систем в доме «под ключ» от 10 дней</h1> <br/>
                        <h3>194 реализованниых проекта</h3> <h3>Гарантия до 5 лет</h3>
                        <ColorButton variant="contained">Custom CSS</ColorButton>

            </div> 
        </div>
    )
}