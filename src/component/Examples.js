import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import { EffectCoverflow, Pagination,Navigation } from "swiper";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import ModalTeplo from './ModalTeplo';
import MessageGoTeplo from "./MessageGoTeplo";
import ModalExample1 from './ModalExample1';
import ModalExample2 from './ModalExample2';
import ModalExample3 from './ModalExample3';
import ModalExample4 from './ModalExample4';
import {  useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Examples() {
  const [modalActiveTeplo,setModalActiveTeplo] = useState(false)
  const [modalActiveExample1,setModalActiveExample1] = useState(false)
  const [modalActiveExample2,setModalActiveExample2] = useState(false)
  const [modalActiveExample3,setModalActiveExample3] = useState(false)
  const [modalActiveExample4,setModalActiveExample4] = useState(false)
  return (
  <>
   <ModalTeplo className="modalTeplo" active={modalActiveTeplo} setActive={setModalActiveTeplo}><MessageGoTeplo/></ModalTeplo>
   <ModalExample1 className="modalExample" active={modalActiveExample1} setActive={setModalActiveExample1}>
   <div className='window'>
   <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <img src={img1} className="PhotoExample"/>
          <Typography gutterBottom variant="h5" component="h2">
              Отопление 2-х этажного дома площадью 160 кв.м.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Задача: Произвести монтаж отопления - тёплых полов, водоснабжения и канализации для круглогодичного проживания.
<br/>Срок выполнения: 19 дн.

              </Typography>
            </Item>
        </Grid>
        <Grid item xs>
          <Item><h6>
          <h3>Расширенное описание</h3>
<table><tr><th>
<h9> Смонтировано:</h9>
  </th></tr>
<tr><td>
<h9>Котельная:</h9> Электрический котёл,  Бойлер косвенного нагрева 150л для ГВС с рециркуляцией, Коллектор для Тёплых полов 11 контуров.
</td></tr>
<tr><td>
<h9>Система отопления:</h9> Состоит из системы Тёплого пола по всей площади отапливаемых помещений. Смонтированы трубой PEX-A/EVOH на матах для Тёплых полов с бобышками и утеплением 20мм.  
  </td></tr>
 <tr><td><h9>Система водоснабжения и водоотведения:</h9> Узел ввода ХВС с фильтром и запорной арматурой, греющий кабель и автоматизация подачи воды от насоса. Распределительные коллекторы ХВС, ГВС и рециркуляции. Магистрали для воды и полотенцесушителей с точками водоразбора. Точки водоотведения с магистралями до приёмной трубы для септика. Фановый стояк.
</td></tr> 
</table>
</h6>
            </Item>
        </Grid>
     

</Grid>   
      </div>
  </ModalExample1>
  <ModalExample2 className="modalExample" active={modalActiveExample2} setActive={setModalActiveExample2}>
  <div className='window'>
   <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <img src={img2} className="PhotoExample"/>
          <Typography gutterBottom variant="h5" component="h2">
          Отопление 2-х этажного дома площадью 195 кв.м.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Задача: Произвести монтаж отопления – Радиаторы отопления, водоснабжения и канализации для круглогодичного проживания.
<br/>Срок выполнения: 23 дн.
              </Typography>
            </Item>
        </Grid>
        <Grid item xs>
          <Item><h6>
          <h3>Расширенное описание</h3>
<table><tr><th>
<h9> Смонтировано:</h9>
  </th></tr>
<tr><td>
<h9>Котельная:</h9>Газовый настенный котёл, 
 Бойлер косвенного нагрева напольный 150л для ГВС с рециркуляцией, Резервный Электро-водонагреватель 50л, 
  Коллектор для Радиаторного отопления на 3 контура открытого двухтрубного типа. Предусмотрена группа безопасности Бойлера и системы отопления.
</td></tr>
<tr><td>
<h9>Система отопления:</h9> Состоит из Радиаторов отопления, рассчитанных по объёму отапливаемых помещений. Смонтированы трубой ППР открытым типом на 
клипсах. </td></tr>
 <tr><td><h9>Система водоснабжения и водоотведения:</h9> Узел ввода ХВС с фильтром и запорной арматурой, греющий кабель 
 и автоматизация подачи воды от насоса. Распределительные коллекторы ХВС, ГВС и рециркуляции. Магистрали для воды и полотенцесушителей с
  точками водоразбора. Точки водоотведения с магистралями до приёмной трубы для септика. Фановый стояк.
</td></tr> 
</table>
</h6>
            </Item>
        </Grid>
     

</Grid>   
      </div>
  </ModalExample2> 
    <ModalExample3 className="modalExample" active={modalActiveExample3} setActive={setModalActiveExample3}>
    <div className='window'>
   <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <img src={img3} className="PhotoExample"/>
          <Typography gutterBottom variant="h5" component="h2">
          Отопление 2-х этажного дома с отапливаемым подвалом, общей площадью 420 кв.м.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Задача: Произвести монтаж Радиаторного отопления, собрать котельную
<br/>Срок выполнения: 20 дн.
              </Typography>
            </Item>
        </Grid>
        <Grid item xs>
          <Item><h6>
          <h3>Расширенное описание</h3>
<table><tr><th>
<h9> Смонтировано:</h9>
  </th></tr>
<tr><td>
<h9>Котельная:</h9> Газовый напольный котёл, бойлер косвенного нагрева напольный 200л для ГВС с рециркуляцией, 
Главный коллектор котельной для Распределения теплоносителя по контурам отопления с индивидуальной термостатической регулировкой.
 Предусмотрена группа безопасности Бойлера и системы отопления.
</td></tr>
<tr><td>
<h9>Система отопления:</h9>  Состоит из Радиаторов отопления, рассчитанных по объёму отапливаемых помещений. 
Смонтированы трубой PEX-A/EVOH с утеплителем в стяжке пола с поэтажными коллекторами лучевой системы.
 Три отдельных контура обеспечивают оптимизацию температурного режима для каждого этажа. 
 На каждом радиаторе установлена Термоголовка для регулирования температуры воздуха в каждой отдельной комнате индивидуально.
 Режим подготовки ГВС обеспечивает насос загрузки бойлера, отрегулированный таким образом,
 что бы максимально быстро подготовить горячую воду и переключиться на поддержание отопления в доме.
 </td></tr>
</table>
</h6>
            </Item>
        </Grid>
     

</Grid>   
      </div>
  </ModalExample3> 
    <ModalExample4 className="modalExample" active={modalActiveExample4} setActive={setModalActiveExample4}>
    <div className='window'>
   <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <img src={img4} className="PhotoExample"/>
          <Typography gutterBottom variant="h5" component="h2">
          Отопление 2-х этажного дома площадью 230 кв.м.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Задача: Произвести монтаж отопления, водоснабжения и канализации для круглогодичного проживания.<br/>Срок выполнения: 21 дн.
              </Typography>
            </Item>
        </Grid>
        <Grid item xs>
          <Item><h6>
          <h3>Расширенное описание</h3>
<table><tr><th>
<h9> Смонтировано:</h9>
  </th></tr>
<tr><td>
<h9>Котельная:</h9>Газовый котёл настенный, Система удалённого контроля ZONT, 
 Коллектор Радиаторного отопления на 2 вых., Для поэтажного разделения и балансировки напора подачи, Бойлер косвенного нагрева настенного типа, 
 объёмом 150 л. для ГВС
</td></tr>
<tr><td>
<h9>Система Радиаторного отопления:</h9> Состоит из 9 радиаторов. Реализованы магистрали открытого типа из ППР с
 разделением поэтажно на 2 контура двухтрубной системой отопления. </td></tr>
 <tr><td><h9>Система водоснабжения и водоотведения:</h9> Узел ввода ХВС с фильтром и запорной арматурой, греющий кабель и автоматизация подачи воды от насоса. Распределительные коллекторы ХВС, ГВС и рециркуляции. Магистрали для воды и полотенцесушителей с точками водоразбора. Точки водоотведения с магистралями до приёмной трубы для септика. Фановый стояк.

</td></tr> 
</table>
</h6>
            </Item>
        </Grid>
     

</Grid>   
      </div>
  </ModalExample4>
  <Swiper
  breakpoints={{
    0: {
      slidesPerView:1,
      spaceBetween:10,
      coverflowEffect:{
        rotate: 30,
        stretch: 10,
        depth: 10,
        modifier: 1,
        slideShadows: false,
      }
    },
    1001: {
      slidesPerView:3,
      spaceBetween:150,
      coverflowEffect:{
        rotate: 30,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }
    },
  }}

        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination,Navigation]}
        className="mySwiper"
      >
        
      <SwiperSlide>
        <Card>
            <CardMedia>
              <img src={img1}/>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Отопление 2-х этажного дома площадью 160 кв.м.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Задача: Произвести монтаж отопления - тёплых полов, водоснабжения и канализации для круглогодичного проживания.
<br/>Срок выполнения: 19 дн.

              </Typography>
            </CardContent>
            <CardActions>
              <Button  variant="contained" size="large" 
              onClick={() => setModalActiveExample1(true)}>Подробнее</Button>
            </CardActions>
          </Card>
        </SwiperSlide>
      <SwiperSlide><Card>
            <CardMedia>
              <img src={img2}/>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Отопление 2-х этажного дома площадью 195 кв.м.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Задача: Произвести монтаж отопления – Радиаторы отопления, водоснабжения и канализации для круглогодичного проживания.
<br/>Срок выполнения: 23 дн.

              </Typography>
            </CardContent>
            <CardActions>
              <Button  variant="contained" size="big" 
              onClick={() => setModalActiveExample2(true)}>Подробнее</Button>
            </CardActions>
          </Card></SwiperSlide>
      <SwiperSlide><Card>
            <CardMedia>
              <img src={img3}/>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Отопление 2-х этажного дома с отапливаемым подвалом, общей площадью 420 кв.м.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Задача: Произвести монтаж Радиаторного отопления, собрать котельную
<br/>Срок выполнения: 20 дн.

              </Typography>
            </CardContent>
            <CardActions>
              <Button  variant="contained" size="big" 
              onClick={() => setModalActiveExample3(true)}>Подробнее</Button>
            </CardActions>
          </Card></SwiperSlide>
      <SwiperSlide><Card>
            <CardMedia>
              <img src={img4}/>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Отопление 2-х этажного дома площадью 230 кв.м.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Задача: Произвести монтаж отопления, водоснабжения и канализации для круглогодичного проживания.<br/>Срок выполнения: 21 дн.

              </Typography>
            </CardContent>
            <CardActions>
              <Button  variant="contained" size="big" 
              onClick={() => setModalActiveExample4(true)}>Подробнее</Button>
            </CardActions>
          </Card></SwiperSlide>
    </Swiper>
   </>
 );
}