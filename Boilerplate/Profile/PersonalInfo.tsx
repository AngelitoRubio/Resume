import { Box, Grid, Typography } from "@mui/material";
function computeAge(): string {
    const birthDay = new Date(`1996 09 05`);
    const today = new Date();

    let age = today.getFullYear() - birthDay.getFullYear();
    const monthDiff = today.getMonth() - birthDay.getMonth();
    const dayDiff = today.getDate() - birthDay.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    return age.toString();
}

export default function PersonalInfo() {
    return (
        <Box>
            <Grid container direction='row' sx={{ justifyContent: 'space-between' }}>
                <Grid>
                    <Typography variant="subtitle2">
                        <strong>Country:</strong>
                    </Typography>
                    <Typography variant="subtitle2">
                        <strong>City:</strong>
                    </Typography>
                    <Typography variant="subtitle2">
                        <strong>Age:</strong>
                    </Typography>
                    <Typography variant="subtitle2">
                        <strong>Degree:</strong>
                    </Typography>
                </Grid>
                <Grid textAlign={'end'}>
                    <Typography variant="subtitle2">
                        Philippines
                    </Typography>
                    <Typography variant="subtitle2">
                        Santa Rosa, Laguna
                    </Typography>
                    <Typography variant="subtitle2">
                        {computeAge()}
                    </Typography>
                    <Typography variant="subtitle2">
                        Bachelor's in IT
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}