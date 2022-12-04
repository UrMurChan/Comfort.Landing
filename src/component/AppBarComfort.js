import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../img/logo123.jpg';
import {Box} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {blue, grey} from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[800],
        },
        secondary: {
            main: grey[500],
        },
    },
  });
  
const drawerWidth = 240;
const title = "КОНТАКТЫ"
const navItems = [ 
    {name: '+7(495)642-24-31', link: 'tel:+74956422431'},
    {name: '+7(925)739-93-03', link: 'tel:+79257399303'},
    {name: 'dmitrov-otoplenie@ya.ru', link: 'https://mail.yandex.ru/compose?mailto=dmitrov-otoplenie@yandex.ru'},
    {name: 'Наш Адрес', link: 'https://yandex.ru/maps/-/CCU6VISgKB'},
    {name: 'WhatsApp', link: 'https://wa.me/79645545829?text=Здравствуйте, я сайта dmitrov-otoplenie.ru интересуют ваши услуги'},

];

function AppBarComfort(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}} className='AppBar'>
                {title}
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton variant="h2 "sx={{color: '#fff',textAlign: 'center'}} href={item.link} >
                            <ListItemText primary={item.name}/>
                            
                        </ListItemButton>
                        
                    </ListItem>
                    
                ))}
                <Box
                        component="img"
                        sx={{

                            height: 128,
                        }}
                        alt="logo"
                        src={Logo}
                    />
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex'}}>
            <AppBar component="nav" className='AppBar'>
                <Toolbar>
                <Box
                        component="img"
                        sx={{

                            height: 48,
                            marginRight: 2
                        }}
                        alt="logo"
                        src={Logo}
                    />
                    <Typography variant='h5'>
                        Дмитров Отопление
                    </Typography>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ position: 'absolute',right: 4,display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1,pl:5, display: {xs: 'none', sm: 'block'}}}
                    >
                        {title}
                    </Typography>
                    <Box variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>      
                        {navItems.map((item) => (
                            <Button  variant='h6' href={item.link} key={item.name} sx={{mr: 1, color: '#fff'}} className='AppBar'>
                                {item.name}
                            </Button>
                        ))}

                    </Box>

                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor="right"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
        </ThemeProvider>
    );
}

export default AppBarComfort;