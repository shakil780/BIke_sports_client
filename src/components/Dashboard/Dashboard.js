import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid, ListItem, ListItemIcon } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import Addbook from '../Addbook/Addbook.js'
import MangeAllorder from '../MangeAllorder/MangeAllorder';
import MakeAdmin from '../MakeAdmin/MakeAdmin.js';
import UseAuth from '../../Context/UseAuth/UseAuth.js';
import axios from 'axios';
import Order from '../Order/Order.js';
import Reviews from '../Reviews/Reviews.js';
import Prayment from '../Prayment/Prayment.js';
import Allservices from '../Allservices/Allservices.js';
import MangeOrder from '../MangeOrder/MangeOrder.js';
const drawerWidth = 240;


function Dashboard(props) {
     const{setLoding}=UseAuth()
    const [admin,setAdmin]=React.useState("")
    React.useEffect(() => {


        axios(`https://damp-ridge-45794.herokuapp.com/users/${user.email}`).then(res => {
          setLoding(false);
          setAdmin(res.data.role)
        })
    
    
      }, [])
    const { window }=props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
     const{user}=UseAuth()

    const drawer = (
        <div>

            <Toolbar />                   
            <Divider />
        
               
        {admin? <Box>
        <Link to={`${url}/addbook`}> 
                    <Button sx={{width:'35%'}} variant="contained">addok</Button>
                </Link> 
                    <br />
                    <br />
                    
                <Link to={`${url}/makeadmin`}> 
                    <Button sx={{width:'55%'}} variant="contained">MakeAdmin</Button>
                </Link> 
                 <br />
                    <br />
                <Link to={`${url}/mangeorder`}> 
                    <Button sx={{width:'55%'}} variant="contained">manageOrder</Button>
                </Link> 
                <br />
                <br /> 
                <Link to={`${url}/orders`}> 
                    <Button sx={{width:'55%'}} variant="contained">Oders</Button>
                   
                </Link>
                <br />
            </Box>:<Box> <Link to={`${url}/order`}> 
                    <Button sx={{width:'55%'}} variant="contained">Myorder</Button>
                    <br />
                </Link>
                  <br />
                <Link to={`${url}/review`}> 
                    <Button sx={{width:'55%'}} variant="contained">Review</Button>
                    <br /> 
                </Link>
                <br />
                <Link to={`${url}/prayment`}> 
                    <Button sx={{width:'55%'}} variant="contained">paymetn</Button>
                    <br /> 
                </Link>
              
             

                <br />
                </Box> } 
                <br />
             <Link to="/home"><Button sx={{width:'55%'}} variant="contained">Home</Button> </Link>
            <List>
            
            </List>

            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <AppBar
            
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                <Typography>Dashboard</Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography >

                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, height:'', p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
          <Route exact path={path}>

          
          </Route>
          <Route path={`${path}/mangeorder`}>
              <MangeAllorder></MangeAllorder>
           
          </Route>
          <Route path={`${path}/addbook`}>
              <Addbook></Addbook>
           
          </Route>
          <Route path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
           
          </Route>
          <Route path={`${path}/order`}> 
           <Order></Order>
          </Route>
          <Route path={`${path}/review`}> 
          <Reviews></Reviews>
          </Route>
          <Route path={`${path}/prayment`}> 
          <Prayment></Prayment>
          </Route>
          <Route path={`${path}/orders`}> 
          <MangeOrder></MangeOrder>
          </Route>
         
        </Switch>
               
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;