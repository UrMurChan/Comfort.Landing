import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import Comfort from "../img/Comfort.png";
import Grid from '@mui/material/Grid';

export default function StartScreen(){
    return(
        <div >
            <div className='Up'>
                <h2> <img src={Comfort}/>  </h2>
                <div className='Setka'>
                {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6}>
                        <Item>1</Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>2</Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>3</Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>4</Item>
                    </Grid>
                    </Grid> */}
                </div>
                <div className='Icons'>
                    <Stack direction="row" spacing={2}>
                        <IconButton aria-label="delete" size="large">
                            <TelegramIcon sx={{ fontSize: 40 }}/>
                        </IconButton>
                        <IconButton aria-label="delete" size="large">
                            <PhoneIcon sx={{ fontSize: 40 }}/>
                        </IconButton>
                        <IconButton aria-label="delete" size="large">
                            <MailIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Stack>  
                </div> 
            </div>

            <div className='BigPhoto'>
                Стартовый экран
            </div> 
        </div>
    )
}