import { Box, LinearProgress, Typography } from "@mui/material";

export default function SkillDetail({ skill }: { skill: { name: string; proficiency: number | null; yrsExperience: number } }) {
    
    if (skill.proficiency !== null && skill.proficiency !== undefined) {
        return (<Box>
            <button className="text-left text-(--accent-green) font-medium hover:underline">
                {skill.name} {skill.yrsExperience ? `(${skill.yrsExperience} yrs)` : ""}
            </button>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={skill.proficiency ?? 0} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography
                        variant="subtitle1"
                    >{`${Math.round(skill.proficiency ?? 0)}%`}</Typography>
                </Box>
            </Box>
        </Box>);
        }
        else {
            return (
            <Box>
                {skill.name}
            </Box>);
        }
    }