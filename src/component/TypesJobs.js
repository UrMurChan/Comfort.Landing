import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item  from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Teplo from '../img/Teplo.jpeg';
import Voda from '../img/Voda.jpg';
import Truba from '../img/Truba.jpeg';
import ModalTeplo from './ModalTeplo';
import ModalVoda from './ModalVoda';
import ModalKanal from './ModalKanal';
import MessageGoTeplo from "./MessageGoTeplo";
import MessageGoVoda from "./MessageGoVoda";
import MessageGoKanal from "./MessageGoKanal";
import { useEffect, useState } from "react";



export default function TypesJobs(){
  const [modalActiveTeplo,setModalActiveTeplo] = useState(false)
  const [modalActiveVoda,setModalActiveVoda] = useState(false)
  const [modalActiveKanal,setModalActiveKanal] = useState(false)
    return(
        <div className='PriceLists' id='Jobs'>
            <h2>Виды работ, которые мы выполняем для наших клиентов</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 10, md: 12 }}>
  <Grid item xs={3.5}>
    <Item><Card sx={{ maxWidth: 345 ,borderRadius:"25px 15px"}}>
      <CardMedia
        component="img"
        height="240"
        image={Teplo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Отопление
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Монтаж автономного отопления любого типа (двухконтурные котлы, электрический обогрев,теплые полы). Установка радиаторов и конвекторов.
        </Typography>
      </CardContent>
      <CardActions>
      <Button  variant="contained" size="large" className='open-btn' onClick={() => setModalActiveTeplo(true)}>Заказать прайс</Button>
      </CardActions>
    </Card></Item>
  </Grid>
  <Grid item xs={3.5}>
    <Item><Card sx={{ maxWidth: 345 ,borderRadius:"25px 15px"}}>
      <CardMedia
        component="img"
        height="240"
        image={Voda}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Водоснабжение
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Все виды сантехнических
работ «под ключ»: установка
ванных, душевых кабинок,
монтаж джакузи,
гидроизоляция помещения.
        </Typography>
      </CardContent>
      <CardActions>
      <Button  variant="contained" size="large" className='open-btn' onClick={() => setModalActiveVoda(true)}>Заказать прайс</Button>
      </CardActions>
    </Card></Item>
  </Grid>
  <Grid item xs={3.5}>
  <Item>
                <Card sx={{ maxWidth: 345 ,borderRadius:"25px 15px"}}>
      <CardMedia
        component="img"
        height="240"
        image={Truba}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Канализация
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Монтаж канализационных
систем с использованием
современных материалов.
Установка систем
очистки сточных вод.
        </Typography>
      </CardContent>
      <CardActions>
      <Button  variant="contained" size="large" className='open-btn' onClick={() => setModalActiveKanal(true)}>Заказать прайс</Button>
      </CardActions>

    </Card>
    </Item>
    </Grid>
</Grid>
      <ModalTeplo className="modalTeplo" active={modalActiveTeplo} setActive={setModalActiveTeplo}><MessageGoTeplo/></ModalTeplo>
      <ModalVoda  active={modalActiveVoda} setActive={setModalActiveVoda}><MessageGoVoda/></ModalVoda>
      <ModalKanal  active={modalActiveKanal} setActive={setModalActiveKanal}><MessageGoKanal/></ModalKanal>
        </div>
    )
}