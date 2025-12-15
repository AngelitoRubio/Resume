import { Avatar, Box, Grid, Typography } from "@mui/material";

export default function ProfileCard() {
    return (
        <Box width={'100%'}>
            <Grid container direction="column" gap={2}>
                <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                    <Avatar
                        alt="Angelito Rubio"
                        src="/banner.png"
                        sx={{ width: 120, height: 120 }} />
                </Grid>
                <Grid>
                    <Typography textAlign={'center'} variant="h5" component="div">
                        Angelito Mhari Rubio
                    </Typography>
                    <Typography textAlign={'center'} variant="subtitle1" component="div">
                        Lead Software Engineer
                    </Typography>
                </Grid>
            </Grid>
        </Box>);
}