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
//import Logo from '../img/logo123.png';
import {Box} from "@mui/material";
const drawerWidth = 240;
const title = "ДМИТРОВ ОТОПЛЕНИЕ"
const navItems = [ 
    {name: 'НАЧАЛО', link: '#Start'},
    {name: 'УСЛУГИ', link: '#Jobs'},
    {name: 'ГАЛЕРЕЯ', link: '#Examples'},
    {name: 'КОНТАКТЫ', link: '#Footer'},
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
                        <ListItemButton variant="h6 "sx={{textAlign: 'center'}} href={item.link} >
                            <ListItemText primary={item.name}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{display: 'flex'}}>
            <AppBar component="nav" className='AppBar'>
                <Toolbar>

                    {/*<Box
                        component="img"
                        sx={{
                            height: 48,
                            marginRight: 0
                        }}
                        alt="logo"
                        src={Logo}
                    />*/}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 0, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        {title}
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>       
                        {navItems.map((item) => (
                            <Button href={item.link} key={item.name} sx={{mr: 1, color: '#fff'}} className='AppBar'>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor="left"
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
    );
}

export default AppBarComfort;