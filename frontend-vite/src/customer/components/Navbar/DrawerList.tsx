import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mainCategory } from '../../../data/category/mainCategory'
import CategorySheet from './CategorySheet';

const DrawerList = ({toggleDrawer}:any) => {
    const [selectedCategory,setSelectedCategory]=useState("");
    const navigate = useNavigate();

    const goTo = (path: string) => {
      navigate(path);
      toggleDrawer(false)();
    };

  return (
    <Box sx={{ width: 250 }} role="presentation" 
    // onClick={toggleDrawer(false)}
    >
    <List>

      <ListItem>
        <ListItemButton>

          <ListItemText primary={<h1 className='logo text-2xl brand-gradient-text'>ShopSphere</h1>} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton onClick={() => goTo("/")}>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
     
      {mainCategory.map((item) => <ListItem key={item.name} disablePadding>
        <ListItemButton onClick={()=>setSelectedCategory(item.categoryId)}>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
      )}
      <Divider />
      <ListItem disablePadding>
        <ListItemButton onClick={() => goTo("/about")}>
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => goTo("/services")}>
          <ListItemText primary="Services" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => goTo("/contact")}>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </ListItem>


    </List>

    {selectedCategory && <div
        // onMouseLeave={() => setShowSheet(false)}
        // onMouseEnter={() => setShowSheet(true)} 
        className='categorySheet absolute top-[4.41rem] left-0 right-0 h-[400px]'>
        <CategorySheet toggleDrawer={toggleDrawer} selectedCategory={selectedCategory}/>
      </div>}

  </Box>
  )
}

export default DrawerList
