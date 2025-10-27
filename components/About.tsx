import { AppBar, Link, Typography, Box, Avatar, Grid, Tooltip, Card, CardContent, Paper } from '@mui/material';
import { EmailOutlined, Call, GitHub, Instagram, LinkedIn } from '@mui/icons-material/';
import { cssVars } from '@/theme/cssVars';
import { useState } from 'react';

const details = [
    { section: 'Summary', content: ['I am a Lead Software Engineer with over 8 years of experience in designing, developing, and managing complex applications and systems.', ' My passion lies in creating efficient, scalable, and user-friendly solutions that drive business success.'] },
    { section: 'Education', content: ['Graduated Bachelors degree in Information Technology,', 'Polytechnic University of the Philippines, 2017'] },
];
type Tech = {
    name: string;
    proficiency: number; // 0–100
    // description: string;
};

const techStack = [
    { name: 'C#/.Net Core', proficiency: 80, yearExp: '8' },
    { name: 'JavaScript/TypeScript', proficiency: 80, yearExp: '5' },
    { name: 'Azure', proficiency: 30, yearExp: 3 },
    { name: 'React.js', proficiency: 30, yearExp: 3 },

];

export default function About() {
    return (
        <>
            <Box sx={{ background: cssVars.bgSurface }} className="rounded-lg shadow-lg ">
                <div className="p-3">
                    {details.map((detail, index) => (
                        <Box key={index} mb={2}>
                            <Typography variant="h5" gutterBottom>
                                {detail.section}
                            </Typography>
                            {detail.content.map((line, idx) => (
                                <Typography key={idx} variant="body1">
                                    {line}
                                </Typography>
                            ))}
                        </Box>
                    ))}
                </div>
                <TechStackSection />
            </Box>
        </>
    );
}
export function TechStackSection() {
    const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

    return (
        <section className="flex flex-col gap-6 w-full max-w-3xl mx-auto p-3">
            <h2 className="text-2xl font-bold">Tech Stacks</h2>

            {techStack.map((tech) => (
                <Box key={tech.name} className="flex flex-col gap-2">
                    <button
                        onClick={() => setSelectedTech(tech)}
                        className="text-left text-(--accent-green) font-medium hover:underline"
                    >
                        {tech.name}
                    </button>
                    <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-(--accent-green) transition-all"
                            style={{ width: `${tech.proficiency}%` }}
                        />
                    </div>
                </Box>
            ))}
        </section>
    );

}
