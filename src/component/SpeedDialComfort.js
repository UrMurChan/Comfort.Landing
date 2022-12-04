import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MailIcon from '@mui/icons-material/Mail'
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {blue, grey} from '@mui/material/colors';
const theme = createTheme({
    palette: {
        primary: {
            main: blue[800],
        },
        secondary: {
            main: grey[500],
        },
    },
  });
const actions = [
    {icon: <WhatsAppIcon />, name: 'Написать в Whats App', key: 'whatApp', func: () => { window.open("https://wa.me/79645545829?text=Здравствуйте, я сайта dmitrov-otoplenie.ru интересуют ваши услуги")}},
    {icon: <MailIcon/>, name: 'Написать письмо', key: 'mail', func: () => {  window.open("https://mail.yandex.ru/compose?mailto=dmitrov-otoplenie@yandex.ru")}},
    {icon: <TelegramIcon/>, name: 'Telegram', key: 'telegram', func: () => { window.open("https://t.me/DmitrovOtoplenie") }}, 
];

export default function SpeedDialComfort() {
    return (
        <SpeedDial
            ariaLabel="Бабл"
            sx={{position: 'fixed',bottom: 16, right: 40}}
            icon={<SpeedDialIcon/>}
        >
            {actions.map((action) => (
                <SpeedDialAction
                sx={{ color: 'primary.main',}}
                    onClick={() => action.func()}
                    key={action.key}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    
                />
            ))}
        </SpeedDial>
    );
}