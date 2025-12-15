import PersonalInfo from "@/Boilerplate/Profile/PersonalInfo";
import ProfileBanner from "@/Boilerplate/Profile/ProfileBanner";
import ProfileCard from "@/Boilerplate/Profile/ProfileCard";
import Skills from "@/Boilerplate/Profile/Skills";
import { cssVars } from "@/theme/cssVars";
import { Box, Divider, Grid, Container, Stack } from "@mui/material";
import ExperienceSection from "../ExperienceSection";

export default function About() {
    return (
        <>
            <Grid container justifyContent={"space-evenly"} my={5}>
                <Grid position={"sticky"} height={"80vh"} sx={{overflowY: "auto", background: cssVars.bgSurface, borderRadius:3 }} size={{xs: 11, md: 3, lg: 2}} >
                    <Stack gap={3} sx={{ py:3, mx:3}}>
                        <ProfileCard />
                        <PersonalInfo />
                        <Skills />
                    </Stack>
                </Grid>
                <Grid size={{xs: 11, md: 7, lg: 9}}>
                    <Stack gap={3}>
                    <ProfileBanner />
                    <ExperienceSection />
                    </Stack>
                </Grid>
            </Grid >
        </>
    );
}