import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Email, Home, LocationCity, PhoneInTalk } from '@material-ui/icons';
import '../../Css/aboutUs.css';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: 'none',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function GridTemplateColumns() {
  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <Item>
            <h3>O-Shop</h3>
            <p>Logo</p>
        </Item>
        <Item className="categories">
            <h3>Categories</h3>
            <ul>
            <li><a href="#">Grocery & Staples</a></li>
            <li><a href="#">Dry Fruits</a></li>
            <li><a href="#">Soft Drinks</a></li>
            <li><a href="#">Masala</a></li>
          </ul>
        </Item>
        <Item className="about">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">Our Policy</a></li>
            <li><a href="#">O-Shop Team</a></li>
            <li><a href="#">Location</a></li>
          </ul>
        </Item>
        <Item className="contact">
            <h3>Contact Us</h3>
            <ul>
                <li><a href="#"><PhoneInTalk /> +88013090755551</a></li>
                <li><a href="#"><Email /> oshop24@gmail.com</a></li>
                <li><a href="#"><LocationCity /> 86/6, East Maniknagar, Dhaka</a></li>
            </ul>
        </Item>
      </Box>
    </div>
  );
}
