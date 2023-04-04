import * as React from 'react';
import Grid from '@mui/material/Grid';
import Item  from '@mui/material/Grid';
import ModalTeplo from './ModalTeplo';
import MessageGoTeplo from "./MessageGoTeplo";
import Button from '@mui/material/Button';
import {  useState } from "react";
import Examples from "./Examples"
import Description from './Description';

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
                <div className='Knopka'><Button sx={{marginBottom:7}} variant="contained" size="large" className='open-btn'onClick={() => setModalActiveTeplo(true)}><h2>Оставить заявку</h2></Button></div>
        <ModalTeplo className="modalTeplo" active={modalActiveTeplo} setActive={setModalActiveTeplo}><MessageGoTeplo/></ModalTeplo>  
        </div>
    )
}