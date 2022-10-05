import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import TelegramIcon from '@mui/icons-material/Telegram';

const actions = [
    {icon: <PhoneIcon/>, name: 'Позвонить', key: 'phone', func: () => { window.open("tel:+79999217597")}},
    {icon: <MailIcon/>, name: 'Написать письмо', key: 'mail', func: () => { window.open("mailto:test@mail.ru") }},
    {icon: <TelegramIcon/>, name: 'Telegram', key: 'telegram', func: () => { window.open("tg://resolve?domain=AlekhandroUp") }},
];

export default function SpeedDialComfort() {
    return (
        <SpeedDial
            ariaLabel="Бабл"
            sx={{position: 'fixed', bottom: 16, right: 16}}
            icon={<SpeedDialIcon/>}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    onClick={() => action.func()}
                    key={action.key}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
            ))}
        </SpeedDial>
    );
}