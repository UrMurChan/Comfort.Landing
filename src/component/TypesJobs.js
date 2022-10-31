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
import "./TypeJobs.css"


export default function TypesJobs(){
  const [modalActiveTeplo,setModalActiveTeplo] = useState(false)
  const [modalActiveVoda,setModalActiveVoda] = useState(false)
  const [modalActiveKanal,setModalActiveKanal] = useState(false)
    return(
        <div className='PriceLists' id='Jobs'>
          <div className='Window2'>
            <h2>Виды работ, которые мы выполняем для наших клиентов</h2>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 10, md: 12 }}>
  <Grid item xs={3.5}>
    <Item><Card sx={{ maxWidth: 345 ,minHeight:"580px",borderRadius:"25px 15px"}}>
      <CardMedia
        component="img"
        height="240"
        image={Teplo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h2> Отопление</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <h5> Монтаж автономного отопления любого типа (котлы, электрический обогрев,теплые полы). Установка радиаторов и конвекторов.</h5>
        </Typography>
      </CardContent>
      <CardActions>
      <Button  variant="contained" size="large" className='open-btn' color='success' onClick={() => setModalActiveTeplo(true)}>Заказать прайс</Button>
      </CardActions>
    </Card></Item>
  </Grid>
  <Grid item xs={3.5}>
    <Item><Card sx={{ maxWidth: 345 ,minHeight:"580px",borderRadius:"25px 15px"}}>
      <CardMedia
        component="img"
        height="240"
        image={Voda}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h2>Водоснабжение</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h5>  Все виды сантехнических работ «под ключ»: установка ванных, душевых кабинок, монтаж джакузи, гидроизоляция помещения.</h5>
        </Typography>
      </CardContent>
      <CardActions>
      <Button  variant="contained" size="large" className='open-btn'color='success' onClick={() => setModalActiveVoda(true)}>Заказать прайс</Button>
      </CardActions>
    </Card></Item>
  </Grid>
  <Grid item xs={3.5}>
  <Item>
                <Card sx={{ maxWidth: 345 ,minHeight:"580px",borderRadius:"25px 15px"}}>
      <CardMedia
        component="img"
        height="240"
        image={Truba}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h2>Канализация</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h5>Монтаж канализационных
систем с использованием
современных материалов.
Установка систем
очистки сточных вод.</h5>
        </Typography>
      </CardContent>
      <div className='buttonplace'>
      <CardActions>
      <Button  variant="contained" size="large" className='open-btn' color='success' onClick={() => setModalActiveKanal(true)}>Заказать прайс</Button>
      </CardActions>
      </div>
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