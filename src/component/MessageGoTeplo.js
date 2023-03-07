import * as React from 'react';
import {Button, MenuItem, Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect, useState, useRef} from "react";
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
import ReCaptchaV2 from 'react-google-recaptcha'


// const captchaRef = useRef(null);
const types = [
  {
      value: 'Монтаж отопления',
      label: 'Монтаж отопления',
  },
  {
      value: 'Монтаж водоснабжения и канализации',
      label: ' Монтаж водоснабжения',
  },
  {
      value: 'Монтаж котельной',
      label: 'Монтаж котельной',
  },
  {
    value: 'Комплексный монтаж',
    label: 'Комплексный монтаж',
} 
];
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

export default function MessageGoTeplo() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    // const token = captchaRef.current.getValue();
    // captchaRef.current.reset();

    emailjs.sendForm('service_iojnvul', 'template_x5r9a6b', e.target, 'Vl_HlLVXzsL1XaN8Y')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

    const [values, setValues] = React.useState({
        textmask: '+0(  )   -  - ',
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

            <h2>Оставьте заявку на услуги монтажа любого типа!</h2>
            <h9>Оставьте ваши данные и мы перезвоним в течении 15 минут в рабочее время с 09.00 до 20.00<br/> </h9>
            {/* <input type="hidden" name="g-recaptcha-response" value={token} /> */}
            <Stack spacing={2} direction="column" alignItems="baseline" style={{flex:0.3}}>
            <div className='formControl' >
            <TextField
                      id="outlined-basic"
                      required
                      fullWidth
                      select
                      label="Вид работы"
                      name='Type_job'
                      variant="outlined">
                      {types.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                              {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    </div>
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
                    {/* <ReCaptchaV2
                     sitekey={process.env.REACT_APP_SITE_KEY}
                     ref={captchaRef}
                     /> */}
                <Button variant="contained" type="submit" value="Send"  sx={{borderWidth:2,borderColor:'white',borderStyle:'solid'}}>
                  Отправить</Button>
                  <h9>Ваши данные в надёжных руках!</h9>
            </Stack>
            </div>
        </Stack>
        </form>
    );
}