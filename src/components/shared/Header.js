import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerlogo from '../../assets/header-logo.png'
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box className="w-full py-5">
            <Container>
                <Image className="mx-auto" src={headerlogo} height={400} width={400} alt="logo" />
                <Typography variant="body2" color="gray" textAlign="center" className="py-2">
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign="center">
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;