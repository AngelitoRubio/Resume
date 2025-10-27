'use client';

import { Card, Typography, Box, Avatar, Stack } from '@mui/material';
import { cssVars } from '@/theme/cssVars';

type Experience = {
  role: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  techStack: string;
  location: string;
  logo?: string;
};

function computeYears(start: string, end: string): string {
  const startDate = new Date(`${start} 01`);
  const endDate = end.toLowerCase() === 'present' ? new Date() : new Date(`${end} 01`);
  const diffMs = endDate.getTime() - startDate.getTime();
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  const rounded = Math.round(diffYears * 10) / 10;
  return `${rounded} ${rounded === 1 ? 'year' : 'years'}`;
}

export default function WorkExperienceCard({ experience }: { experience: Experience }) {
  const { role, company, dateStart, dateEnd, techStack, location, logo } = experience;

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: cssVars.bgSurface,
        color: cssVars.textPrimary,
        borderRadius: 3,
        maxWidth: 400,
        minWidth: 400,
        minHeight: 200,
        maxHeight: 200,
        padding: 3,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        },
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {/* Top Section */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography fontWeight={500}>
            {company}
          </Typography>
          <Typography variant="body2" color={cssVars.textMuted}>
            {role} • {location}
          </Typography>
        </Box>
        <Avatar src={logo} alt={company} sx={{ width: 32, height: 32, position: 'relative'}} />
      </Stack>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2" fontStyle="italic">
          {dateStart} – {dateEnd} ({computeYears(dateStart, dateEnd)})
        </Typography>
        <Typography variant="body2" fontWeight={500}>
          Tech Stack:{' '}
          <Box component="span" sx={{ color: cssVars.accentGreen }}>
            {techStack}
          </Box>
        </Typography>
      </Box>
    </Card>
  );
}