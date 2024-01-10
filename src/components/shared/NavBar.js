"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '../../assets/logo.png'
import { IconButton, Stack } from '@mui/material';
import { FacebookOutlined, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Link from 'next/link';
import Header from './Header';


const navItems = [
    {
        route: 'Home',
        pathName: '/'
    },
    {
        route: 'Pages',
        pathName: '/pages'
    },
    {
        route: 'Categories',
        pathName: '/categories'
    },
    {
        route: 'About',
        pathName: '/about'
    },
    {
        route: 'Contact',
        pathName: '/contact'
    },
];


function NavBar() {

    return (
        <>
            <Header />
            <AppBar position="static" className=' bg-black'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image className=' rounded-full' src={logo} height={50} width={50} alt='logo' />


                        <Box className='w-full text-center'>
                            {navItems.map((item) => (
                                <Link key={item} href={item.pathName}>
                                    <Button className='text-white'>{item.route}</Button>
                                </Link>
                            ))}
                        </Box>

                        <Box>
                            <Stack direction="row" spacing={2} sx={{
                                '& svg': {
                                    color: 'white'
                                }
                            }}>
                                <IconButton aria-label="delete">
                                    <FacebookOutlined />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <Instagram />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <Twitter />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <LinkedIn />
                                </IconButton>
                            </Stack>

                        </Box>


                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default NavBar;