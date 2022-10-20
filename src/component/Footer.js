import * as React from 'react';
import Grid from '@mui/material/Grid';
import Item  from '@mui/material/Grid';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Footer(){
    return(
        <div>
            <div className='Up' id='Footer'>
                <div className='Setka'>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 10, md: 12 }}>
                    <Grid item xs={4}>
                        <Item><Card sx={{ borderRadius:"15px 15px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                           <CallIcon sx={{ fontSize: 40 ,color:"white"}}/>
                            <h8>Телефоны</h8>
                            <br/><h9>+7(925)739-93-03</h9>
                            <br/><h9>+7(495)642-24-31</h9>
                            </Typography>  
                        </CardContent>
                        </Card></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><Card sx={{ borderRadius:"15px 15px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                       <AlternateEmailIcon sx={{ fontSize: 40 ,color:"white"}}/>
                            <h8>Эл.Почта</h8>
                            <br/><h9>www.baxi-comfort.ru</h9>
                            <br/><h9>info@baxi-comfort.ru</h9>
                            </Typography>  
                        </CardContent>
                        </Card></Item>
                    </Grid>
                    {/* <Grid item xs={3}>
                        <Item><Card sx={{ borderRadius:"15px 15px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <AccessTimeIcon sx={{ fontSize: 40 }}/>
                            <h8>Мы работаем</h8>
                            <br/><h9>ПН-ПТ: 8.00 -19.00 </h9>
                            </Typography>  
                        </CardContent>
                        </Card></Item>
                    </Grid> */}
                    <Grid item xs={4}>
                        <Item><Card sx={{ borderRadius:"15px 15px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                          <AccessTimeIcon sx={{ fontSize: 40 ,color:"white"}}/>
                            <h8>Приезжайте</h8>
                            <br/><h9>МО, г.Дмитров,<br/>ул.Профессиональная ,д.135 </h9>
                            </Typography>  
                        </CardContent>
                        </Card></Item>
                    </Grid>
{/*                 
                
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
                    
                </div> */}
                {/* <Card sx={{ minWidth: 300 ,minHeight: 190,borderRadius:"25px 15px"}}></Card> */}
                </Grid>
                </div>
        </div>
        </div>
        
    )
}