import * as React from 'react';
import ExperienceCard from './ExperienceCard';
import { Grid } from '@mui/material';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Yondu (EssilorLuxottice Deployed)',
    dateStart: 'March 2024',
    dateEnd: 'Present',
    techStack: '.Net Core, Github, Kubernetes, React, Sql Server',
    location: 'BGC, Taguig City, Philippines',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQH_Sj9ZfN8pAQ/company-logo_200_200/company-logo_200_200/0/1642704101327/essilorluxottica_logo?e=1762992000&v=beta&t=faeYk2qDJE504bQtGXz4o3b8aVGD_l-m7Dpc1Bby1bQ'
  },
  {
    role: 'Lead Software Engineer',
    company: 'Yondu (Accenture Deployed)',
    dateStart: 'November 2022',
    dateEnd: 'December 2023',
    techStack: ',Net Core, RazorPages, Javascript, HTML& CSS',
    location: 'BGC, Taguig City, Philippines',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEgtOEcxlXMog/company-logo_200_200/B4DZfqEQWkHAAQ-/0/1751978673981/accenture_logo?e=1762992000&v=beta&t=SpVaRJKt08wY-ihomVD6gdKuPSxaVqzETcb5MykhCAI'
  },
  {
    role: 'Senior FullStack Developer',
    company: 'ConnectOs',
    dateStart: 'May 2022',
    dateEnd: 'October 2022',
    techStack: 'Jenkins, .Net, Javascript, HTML & CSS',
    location: 'BGC, Taguig City, Philippines',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQHhq6KNwpJBxQ/company-logo_200_200/company-logo_200_200/0/1687384770756?e=1762992000&v=beta&t=8ysHXgz_h1sYAnNm6-O6lMvhl5j55ZdFPTF5cJfOSeU'
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
  },
  {
    role: 'Web Development Coordinator',
    company: 'Kamal Osman Jamjoom Philippines Inc.',
    dateStart: 'February 2020',
    dateEnd: 'February 2021',
    techStack: '.Net, Angular, Storyline, AnimateCC, HTML & CSS',
    location: 'Makati, NCR, Philippines',
    logo: 'https://media.licdn.com/dms/image/v2/C510BAQEsPAtuGf5_zw/company-logo_200_200/company-logo_200_200/0/1630564410403/kamal_osman_jamjoom_logo?e=1762992000&v=beta&t=D1OOv6BPicGdXiay_UkVl3aNrcQ6uge_pmclALUkzOs'
  },
  {
    role: 'Senior Web Developer',
    company: 'Civil Aviation Authority of the Philippines',
    dateStart: 'March 2019',
    dateEnd: 'October 2019',
    techStack: '.Net',
    location: 'Pasay, Metro Manila (NCR)',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGo1R4Q7-z45g/company-logo_200_200/company-logo_200_200/0/1631308109001?e=1762992000&v=beta&t=ly7onxHeuhBKYaxRf-nA4rP0i1owbxx_w7UPxuj9v90'
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
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} experience={exp} />
      ))}
    </Grid>
  );
}
