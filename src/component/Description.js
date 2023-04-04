import React from 'react';
import Gal from "../img/gal.png"
import Gal1 from "../img/Gal1.png"
import Gal2 from "../img/Gal2.png"
import doc from "../img/document.png"
import plumb from "../img/plumber.png"
import business from "../img/business.png"
import eng from "../img/engineer.png"
import free from "../img/free.png"
import boiler from "../img/boiler.png"
import map from "../img/map.png"
import Grid from '@mui/material/Grid';
import Item  from '@mui/material/Grid';
import ModalTeplo from './ModalTeplo';
import MessageGoTeplo from "./MessageGoTeplo";
import Button from '@mui/material/Button';
import {  useState } from "react";
import Examples from "./Examples"

export default function Description(){
  return (
    
  <div className='Background2'>
            <div className='center' ><h1>Наши работы</h1></div>
            <div className='container'><Examples className="Examples"/></div>
    <div className='Textbox'>
         <h1>  О нас </h1>

            <div className='flex'>
              <img src={doc} className="Gal"/><h3>Наши специалисты проведут комплексную консультацию  предварительный расчет системы, согласование объема работ.</h3>
            </div>
            <div className='flex'>
              <img src={plumb} className="Gal"/>
                  <h3>Выезд мастера на объект, составление сметы на услуги и оборудование.</h3>
            </div>
            <div className='flex'>
              <img src={business} className="Gal"/>
              <h3>Поможем скомплектовать и закупить необходимое для монтажа оборудование и материалы по оптовым ценам от производителя.</h3>
            </div>
            <div className='flex'>
              <img src={eng} className="Gal"/>
              <h3> Произведём Монтаж инженерных сетей профессиональной бригадой.</h3>
            </div>
            <div className='flex'>
              <img src={free} className="Gal"/>
              <h3>Пуско-наладочные работы с полной проверкой работы оборудования с гарантией.</h3>
            </div>
            <div className='flex'>
              <img src={boiler} className="Gal"/>
              <h3>Сервисное обслуживание газовых и электрических котлов BAXI.</h3>
            </div>
            <div className=''>
                <h1>Промокод!</h1>
                <h3>Скажите фразу "Хочу тепло в дом24!" и Получите скидку в 10% на монтаж"</h3>
            </div>
            {/* <div className='flex'>
            <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 10, sm: 10, md: 10 }} className="flex">
            <Grid item xs={3} sm={3} md={1} ></Grid>
            <img src={map} className="map"/>
            <Grid item xs={30} sm={3} md={3} >
                <ul><h3>Область работы нашей кампании</h3><br/>
                    <li><h6>Дмитров</h6></li>
                    <li><h6>Дмитровский Район</h6></li>
                    <li><h6>Яхрома</h6></li>
                    <li><h6>Талдом</h6></li>
                    <li> <h6>Дубна</h6></li>
                    <li>  <h6>Запрудня</h6></li>
                </ul></Grid>
            </Grid>

                
            </div> */}
    </div>
  </div>
  );
}