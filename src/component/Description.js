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
import logo from '../img/logo123.jpg'
import ModalTeplo from './ModalTeplo';
import MessageGoTeplo from "./MessageGoTeplo";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import ExamplesTeplo from "./ExamplesTeplo"
import Paper from '@mui/material/Paper';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import BuildIcon from '@mui/icons-material/Build';

export default function StartScreen(){
    return(
        <div><Paper sx={{ textAlign: "center", position:"relative",top:-30,paddingBottom:1}}>
        <h1> О нашей кампании</h1></Paper>
        <Grid  container spacing={{ xs: 3, md: 3 }} columns={{ xs: 100, sm: 100, md: 100 }} sx={{alignItems:"center"}}>
            <Grid item xs={99} sm={99} md={49} >
                <Item >
                    <Paper sx={{borderRadius:"95px 95px", textAlign: "center",marginLeft:1,minHeight:100,minWidth:100}}>
                    <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 100, sm: 100, md: 100 }} sx={{alignItems:"center"}}>
                        <Grid item xs={19} sm={99} md={20} >
                            <Item >
                                <BuildCircleIcon sx={{ fontSize: 90 ,color:"white"}}/>
                            </Item>
                        </Grid>
                        <Grid item xs={79} sm={99} md={79} >
                            <Item>
                                <h1>Наши специалисты проведут комплексную консультацию  предварительный расчет системы, согласование объема работ.</h1>
                            </Item>
                        </Grid>
                    </Grid>    
                    </Paper>
                </Item>
            </Grid>  
            <Grid item xs={99} sm={99} md={49} >
                <Item >
                    <Paper sx={{borderRadius:"95px 95px", textAlign: "center",marginLeft:1}}>
                    <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 100, sm: 100, md: 100 }} sx={{alignItems:"center"}}>
                        <Grid item xs={19} sm={99} md={20} >
                            <Item >
                            <BuildCircleIcon sx={{ fontSize: 90 ,color:"white"}}/>
                            </Item>
                        </Grid>
                        <Grid item xs={79} sm={99} md={79} >
                            <Item  sx={{ minHeight:100}} >
                            <h1>Выезд мастера на объект, составление сметы на услуги и оборудование.</h1>
                            </Item>
                        </Grid>
                    </Grid>    
                    </Paper>
                </Item>
            </Grid>
            <Grid item xs={99} sm={99} md={49} >
                <Item >
                    <Paper sx={{borderRadius:"95px 95px", textAlign: "center",marginLeft:1}}>
                    <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 100, sm: 100, md: 100 }} sx={{alignItems:"center"}}>
                        <Grid item xs={19} sm={99} md={19} >
                            <Item >
                            <BuildCircleIcon sx={{ fontSize: 90 ,color:"white"}}/>
                            </Item>
                        </Grid>
                        <Grid item xs={79} sm={99} md={79} >
                            <Item >
                            <h1>Поможем скомплектовать и закупить необходимое для монтажа оборудование и материалы по оптовым ценам от производителя.</h1>
                            </Item>
                        </Grid>
                    </Grid>    
                    </Paper>
                </Item>
            </Grid>
            <Grid item xs={99} sm={99} md={49} >
                <Item >
                    <Paper sx={{borderRadius:"95px 95px", textAlign: "center",marginLeft:1}}>
                    <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 100, sm: 100, md: 100 }} sx={{alignItems:"center"}}>
                        <Grid item xs={19} sm={19} md={19} >
                            <Item >
                            <BuildCircleIcon sx={{ fontSize: 90 ,color:"white"}}/>
                            </Item>
                        </Grid>
                        <Grid item xs={79} sm={79} md={79} >
                            <Item >
                            <h1>Произведём Монтаж инженерных сетей профессиональной бригадой.</h1>
                            </Item>
                        </Grid>
                    </Grid>    
                    </Paper>
                </Item>
            </Grid>
            <Grid item xs={99} sm={99} md={49} >
                <Item >
                    <Paper sx={{borderRadius:"95px 95px", textAlign: "center",marginLeft:1}}>
                        <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 100, sm: 100, md: 100 }} sx={{alignItems:"center"}}>
                            <Grid item xs={19} sm={19} md={19} >
                                <Item >
                                <BuildCircleIcon sx={{ fontSize: 90 ,color:"white"}}/>
                                </Item>
                            </Grid>
                            <Grid item xs={79} sm={79} md={79} >
                                <Item >
                                <h1>Пуско-наладочные работы с полной проверкой работы оборудования с гарантией.</h1>
                                </Item>
                            </Grid>
                        </Grid>    
                    </Paper>
                </Item>
            </Grid>
            <Grid item xs={99} sm={99} md={49} >
                <Item >
                <Paper sx={{borderRadius:"95px 95px", textAlign: "center",marginLeft:1}}>
                        <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 100, sm: 100, md: 100 }} sx={{alignItems:"center"}}>
                            <Grid item xs={19} sm={19} md={19} >
                                <Item >
                                <BuildCircleIcon sx={{ fontSize: 90 ,color:"white"}}/>
                                </Item>
                            </Grid>
                            <Grid item xs={79} sm={79} md={79} >
                                <Item >
                                <h1>Сервисное обслуживание газовых и электрических котлов BAXI.</h1>
                                </Item>
                            </Grid>
                        </Grid>    
                    </Paper>
                </Item>
            </Grid>
        </Grid> 
        </div>
    )
}