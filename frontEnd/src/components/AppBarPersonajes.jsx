import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import AccordionPersonajes from '../components/AccordionPersonajes';
import { useState, useEffect } from 'react';
import BasicModal from './BasicModal';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function AppBarPersonajes(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const container = window !== undefined ? () => window().document.body : undefined;

    const [rows, setRows] = useState(null)

    useEffect(() => {
        if (rows == null) {
            obtenerDatos()
        }
    }, [rows])

    const onClick = () => {
        console.log(rows)
    }

    const obtenerDatos = async () => {
        const api = await fetch("http://127.0.0.1:8000/api/");
        const characterApi = await api.json();
        setRows(characterApi)
        
    }

    return (
        
        <div>
            {rows?(
                <Box sx={{ display: 'flex', marginTop: '100px' }}>
                    <AppBar component="nav" sx={{ display: 'flex', marginTop: '65px', marginRight: '200px', width: '700px ', bgcolor: 'red' }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                Personajes
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                                <Button /*key={item}*/ sx={{ color: '#fff' }}>
                                    <BasicModal rows={rows} setRows={setRows} />
                                </Button>

                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box component="nav">

                    </Box>
                    <Box component="main" sx={{ p: 3 }}>
                        <Toolbar />
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                            fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                            aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                            cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                            at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                            Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
                            numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
                            asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
                            assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
                            soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
                            ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
                            soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
                            Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
                            delectus quo eius exercitationem tempore. Delectus sapiente, provident
                            corporis dolorum quibusdam aut beatae repellendus est labore quisquam
                            praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
                            deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
                            fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
                            recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
                            debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
                            praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
                            voluptate iure labore, repellendus beatae quia unde est aliquid dolor
                            molestias libero. Reiciendis similique exercitationem consequatur, nobis
                            placeat illo laudantium! Enim perferendis nulla soluta magni error,
                            provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
                            iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
                            Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
                            reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
                            cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
                            consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
                            Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
                            dolores sunt inventore perferendis, aut sapiente modi nesciunt.
                        </Typography>
                    </Box>
                </Box>
            ):(
                <div></div>
            )}
        </div>
        
    );
}

AppBarPersonajes.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default AppBarPersonajes;
