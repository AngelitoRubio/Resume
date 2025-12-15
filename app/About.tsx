'use client';
import About from "@/components/About";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceSection from "@/components/ExperienceSection";
import { theme } from "@/theme";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'EssilorLuxottica',
    dateStart: 'March 2024',
    dateEnd: 'Present',
    techStack: '.Net Core, Github, Kubernetes, React, Sql Server',
    location: 'BGC, Taguig City, Philippines',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEgtOEcxlXMog/company-logo_200_200/B4DZfqEQWkHAAQ-/0/1751978673981/accenture_logo?e=1762992000&v=beta&t=SpVaRJKt08wY-ihomVD6gdKuPSxaVqzETcb5MykhCAI'
  },
  {
    role: 'Senior Software Engineer',
    company: 'Accenture Philippines',
    duration: 'March 2021 - 2022',
    dateStart: 'April 2021',
    dateEnd: 'May 2022',
    techStack: '.Net Core, Azure, Azure DevOps, Sql Server',
    location: 'BGC, Taguig City, Philippines',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEgtOEcxlXMog/company-logo_200_200/B4DZfqEQWkHAAQ-/0/1751978673981/accenture_logo?e=1762992000&v=beta&t=SpVaRJKt08wY-ihomVD6gdKuPSxaVqzETcb5MykhCAI'
  }
];
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Grid className="flex flex-col md:flex-row gap-6">
        <Grid className="md:w-1/2 lg:w-1/3">
          <About />
        </Grid>
        <Grid className="md:w-1/2 lg:w-2/3">
          <ExperienceSection />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
