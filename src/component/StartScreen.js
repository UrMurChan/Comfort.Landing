import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Item  from '@mui/material/Grid';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function StartScreen(){
    return(
        <div className='BigPhoto' id='Start'>
            <div className='Up'>
                {/* <h2> <img src={Comfort}/>  </h2> */}
                <div className='Setka'>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 10, md: 12 }}>
                    <Grid item xs={4}>
                        <Item><Card sx={{ borderRadius:"15px 15px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                           <CallIcon sx={{ fontSize: 40 }}/>
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
                       <AlternateEmailIcon sx={{ fontSize: 40 }}/>
                            <h8>Эл.Почта</h8>
                            <br/><h8>www.baxi-comfort.ru</h8>
                            <br/><h8>info@baxi-comfort.ru</h8>
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
                          <AccessTimeIcon sx={{ fontSize: 40 }}/>
                            <h8>Приезжайте</h8>
                            <br/><h8>МО, г.Дмитров,<br/>ул.Профессиональная ,д.135 </h8>
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

            <div className='Purum'>
                <div  className='Window1'>
                        <h1>Проектирование <IconButton aria-label="delete" size="medium">
                            <ArrowForwardIosIcon sx={{ fontSize: 25 }} />
                        </IconButton> Монтаж <IconButton aria-label="delete" size="medium">
                            <ArrowForwardIosIcon sx={{ fontSize: 25 }} />
                        </IconButton> Обслуживание </h1>
                </div>
                <div className='Purum'>
                <Grid container spacing={{ xs: 5, md: 5 }} columns={{ xs: 1, sm: 2, md: 12 }}>
                    <Grid item xs={5}>
                        <Item><Card sx={{ borderRadius:"15px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <h2>Проектирование и монтаж инженерных систем в доме «под ключ» от 10 дней</h2>
                            </Typography>  
                        </CardContent>
                        </Card></Item>
                    </Grid>
                    <Grid item xs={5.5}>
                    <Item>
                    <Grid container spacing={{ xs: 5, md: 5 }} columns={{ xs: 1, sm: 1, md: 1 }}>
                    <Grid item xs={4}>
                        <Item>
                        <Card sx={{ borderRadius:"15px 15px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <h3>194 реализованниых проекта</h3>
                            </Typography>  
                        </CardContent>
                        </Card>
                        </Item>
                        </Grid>
                    <Grid item xs={4}>
                        <Item><Card sx={{ borderRadius:"15px 15px"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <h3>Гарантия до 5 лет</h3>
                            </Typography>  
                        </CardContent>
                        </Card></Item>
                            </Grid>
                        </Grid>
                        </Item>
                    </Grid>
                </Grid>
                </div>
            </div> 
        </div>
    )
}