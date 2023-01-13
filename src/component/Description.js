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
export default function Description(){
  return (
  <div className='Background2'>
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
    </div>
  </div>
  );
}