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

export default function StartScreen(){
    const [modalActiveTeplo,setModalActiveTeplo] = useState(false)
    return(
            <div>
            <div className='Purum'>
            {/* <img src={logo} alt='logotip' className="logo" /> */}
                <div  className='Window1'>
                        <h1>ОТОПЛЕНИЕ И ВОДОСНАБЖЕНИЕ</h1>
                </div>
                </div>
                <div className='Knopka'>  
                <Button sx={{marginBottom:7}} variant="contained" size="large" className='open-btn'onClick={() => setModalActiveTeplo(true)}><h2>Оставить заявку</h2></Button>
                     
              
        
        </div>
        <div className='center' >
        <h1>Примеры наших работ</h1></div>
                <ExamplesTeplo/>   
  
        <ModalTeplo className="modalTeplo" active={modalActiveTeplo} setActive={setModalActiveTeplo}><MessageGoTeplo/></ModalTeplo>  
        </div>
    )
}