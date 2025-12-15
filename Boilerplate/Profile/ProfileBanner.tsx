import { cssVars } from "@/theme/cssVars";
import { Avatar, Box, Container, Divider, Grid, Typography } from "@mui/material";

export default function ProfileBanner() {

    return (<Box
        width="100%"
        sx={{
            pt: 5,
            background: cssVars.bgSurface,
            position: 'relative',
            overflow: 'visible', // allow image to overflow
            borderRadius: 3,
        }}
    >
        {/* Background container with blur and shadow */}
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden', // crop background only
                borderRadius: 3,
                zIndex: 1,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/123.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(8px)',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.6)',
                }}
            />
        </Box>
        <Container sx={{ position: 'relative', zIndex: 3 }}>
            <Grid container direction="row" height="100%">
                <Grid size={{md:12,xl:6}} zIndex={5}>
                    <Typography textAlign={'left'} variant="subtitle1" component="div">
                        Lead Software Engineer with nearly 9 years of professional experience in designing, developing, and deploying robust software solutions.<br />
                        <Divider sx={{ my: 1 }} />
                        Specializing in .Net framework(.Net Core/.Net), having a solid foundation in backend development (microservices) such as RESTful APIs while also being capable of handling full stack responsibilities.
                        <Divider sx={{ my: 1 }} />
                        Mentored and led a team of developers, thorugh Agile environments, ensuring the successful delivery of projects within deadlines.<br />
                    </Typography>
                </Grid>
                <Grid size={{md:12,xl:6}} display={{sm:'none',md:'flex'}} zIndex={4} position={'relative'}>
                    <Box sx={{ height: 250, overflow: 'visible'}}>
                        <Box
                            component="img"
                            src="/Banner1.png"
                            alt="Profile banner"
                            sx={{
                                position: 'absolute',
                                width: '50vh',
                                height: 'auto',
                                objectFit: 'contain',
                                display: 'block',
                                bottom: '0px',
                                right: 0,
                                // transform: 'translate(125px,-385px)',
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box >);
}