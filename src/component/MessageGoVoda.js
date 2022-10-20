import * as React from 'react';
import {Button, MenuItem, Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'; 
import emailjs from 'emailjs-com';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+7(###)###-##-##"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });
  TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default function MessageGoVoda() {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_fl1i9yr', 'template_o50oojl', e.target, 'hdSSajA8pXWKAi7HN')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }
    const [values, setValues] = React.useState({
        textmask: '+9(  )   -  - ',
        numberformat: '1320',
      });
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768
    const direction = isMobile ? "column" : "row";
    const alignItems = isMobile ? "stretch" : "center";
    return (
        <form className="contact-form" onSubmit={sendEmail}>
        <Stack className='Window'

            style={isMobile ? {marginLeft: "10%", marginRight: "10%", marginBottom: "10%"} : {marginBottom: "10%"}}
            spacing={4}
               direction={direction}
               justifyContent="space-around"
               alignItems={alignItems}>
            <div className='Feedback'>
            <h2>Получите прайс на услуги монтажа системы водоснабжения!</h2>
            <h9>Оставьте ваши данные и мы перезвоним в течении 15 минут в рабочее время с 09.00 до 20.00</h9>
            <input type="hidden" name="Type_job" value="Монтаж системы водоснабжения" />
            <Stack spacing={2} direction="column" alignItems="baseline" style={{flex:0.3}}>
            <div className='formControl'>
                <TextField 
                onChange={e => setName(e.target.value)}
                name="from_name"
                value={name}
                id="outlined-basic"
                type="text"
                required
                fullWidth
                label="Имя"
                variant="outlined"/></div>
                   <div className='formControl' ><FormControl variant="standard" >
                        <InputLabel htmlFor="formatted-text-mask-input">Телефон</InputLabel>
                        <Input
                        value={values.textmask}
                        onChange={handleChange}
                        name="textmask"
                        id="formatted-text-mask-input"
                        inputComponent={TextMaskCustom}
                        />
                    </FormControl></div>
                <Button variant="contained" type="submit" value="Send">
                  Отправить</Button>
                    <p>Ваши данные в надёжных руках!</p>
            </Stack>
            </div>
        </Stack>
        </form>
    );
}