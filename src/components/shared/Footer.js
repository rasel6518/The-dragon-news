"use client"
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import { FacebookOutlined, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Link from 'next/link';
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

const Footer = () => {
    return (
        <Box className='bg-black px-3 py-10'>
            <Container>
                <Box className='w-full text-center'
                    sx={{
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


                </Box>
                <Box className='w-full text-center'>
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathName}>
                            <Button className='text-white'>{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant="body2" color="gray" textAlign="center">
                    @2024  The Dragon News Design by MD Rasel Khan
                </Typography>

            </Container>

        </Box>
    );
};

export default Footer;