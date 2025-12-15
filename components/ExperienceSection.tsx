import * as React from 'react';
import ExperienceCard from './ExperienceCard';
import { Grid, Typography } from '@mui/material';
import { Block } from '@mui/icons-material';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Yondu (EssilorLuxottice Deployed)',
    dateStart: 'March 2024',
    dateEnd: 'Present',
    techStack: '.Net Core, Github, Kubernetes, React, Sql Server',
    location: 'BGC, Taguig City, Philippines',
    logo: 'Company/Essilor.png'
  },
  {
    role: 'Lead Software Engineer',
    company: 'Yondu (Accenture Deployed)',
    dateStart: 'November 2022',
    dateEnd: 'December 2023',
    techStack: ',Net Core, RazorPages, Javascript, HTML& CSS',
    location: 'BGC, Taguig City, Philippines',
    logo: 'Company/Acn.png'
   },
  {
    role: 'Senior FullStack Developer',
    company: 'ConnectOs',
    dateStart: 'May 2022',
    dateEnd: 'October 2022',
    techStack: 'Jenkins, .Net, Javascript, HTML & CSS',
    location: 'BGC, Taguig City, Philippines',
    logo: 'Company/ConnectOs.jpg'
  },
  {
    role: 'Senior Software Engineer',
    company: 'Accenture Philippines',
    duration: 'March 2021 - 2022',
    dateStart: 'April 2021',
    dateEnd: 'May 2022',
    techStack: '.Net Core, Azure, Azure DevOps, Sql Server',
    location: 'BGC, Taguig City, Philippines',
    logo: 'Company/Acn.png'
  },
  {
    role: 'Web Development Coordinator',
    company: 'Kamal Osman Jamjoom Philippines Inc.',
    dateStart: 'February 2020',
    dateEnd: 'February 2021',
    techStack: '.Net, Angular, Storyline, AnimateCC, HTML & CSS',
    location: 'Makati, NCR, Philippines',
    logo: 'Company/KOJ.jpg'
  },
  {
    role: 'Senior Web Developer',
    company: 'Civil Aviation Authority of the Philippines',
    dateStart: 'March 2019',
    dateEnd: 'October 2019',
    techStack: '.Net',
    location: 'Pasay, Metro Manila (NCR)',
    logo: 'Company/CAAP.jpg'
  },
  {
    role: 'Full Stack Developer',
    company: 'Chase Technologies Corporation',
    dateStart: 'June 2017',
    dateEnd: 'February 2019',
    techStack: '.Net',
    location: 'Pasay, Metro Manila (NCR)',
    logo: 'https://chasetech.com/wp-content/uploads/2020/08/cropped-chaselogo-e1620563802241-1.jpg'
  }
];

export default function ExperienceSection() {
  return (
    <Grid container spacing={3}>
      <Grid size={12} mt={2}>
        <Typography variant="h5" display={'Block'}>
          Work Experience
        </Typography>
      </Grid>
      {
        experiences.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} />
        ))
      }
    </Grid >
  );
}
