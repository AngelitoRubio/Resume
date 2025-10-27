'use client';

import { AppBar, Link, Typography, Box, Avatar, Grid, Tooltip } from '@mui/material';
import { EmailOutlined, Call, GitHub, Instagram, LinkedIn } from '@mui/icons-material/';
import { cssVars } from '@/theme/cssVars';

export default function Header() {

    return (
        <div>
            <Box className="rounded flex items-center content-evenly py-10">
                <Grid className="flex flex-1 grow justify-end ml-0 md:ml-20">
                    <Avatar  sx={{ width: { xs: 40, sm: 56 }, height: { xs: 40, sm: 56 } }} alt="Logo" src="https://media.licdn.com/dms/image/v2/D5635AQE0PcHZSCRJ6Q/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1726673545800?e=1762023600&v=beta&t=_dw0Fk7IiH9A7ON2jRvYFBWoe_voIwYO7rIwda_i2M0" />
                </Grid>
                <Grid className="flex flex-11 flex-col md:mr-20">
                    <Typography className='flex' variant="h4" component="div" >
                        Angelito Mhari Rubio
                        <Link href=""><LinkedIn sx={{color: cssVars.accentGreen}} /></Link>
                        <Link href=""><GitHub sx={{color: cssVars.accentGreen}} /></Link>
                        <Link href=""><Instagram sx={{color: cssVars.accentGreen}} /></Link>
                    </Typography>
                    <Typography className="flex" component="div">
                        <Typography className="flex flex-1"variant='h6' >
                            Lead Software Engineer
                        </Typography>
                        <Typography className="flex flex-1 justify-end" component="div">
                            0945-384-4993
                            <Call className="mx-1" sx={{color: cssVars.accentGreen}} />
                            <Tooltip title="angelito.rubio@outlook.com">
                                <Link href="mailto:angelito.rubio@outlook.com" ><EmailOutlined sx={{color: cssVars.accentGreen}} /></Link>
                            </Tooltip>
                        </Typography>
                    </Typography>
                </Grid>
            </Box>
        </div>
    );
}