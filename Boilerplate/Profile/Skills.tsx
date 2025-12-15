import { Box, Grid, Typography } from "@mui/material";
import SkillDetail from "./Skilldetail";
const skills =
    [
        { name: "C#", proficiency: 90, yrsExperience: 8, type: 'language' },
        { name: "JavaScript", proficiency: 50, yrsExperience: 5, type: 'language' },
        { name: "HTML & CSS", proficiency: 60, yrsExperience: 4, type: 'language' },
        { name: ".Net/ .Net Core", proficiency: 90, yrsExperience: 8, type: 'framework' },
        { name: "Angular", proficiency: 30, yrsExperience: 1, type: 'framework' },
        { name: "React", proficiency: 30, yrsExperience: 1, type: 'framework' },
        { name: "DevOps", proficiency: 45, yrsExperience: 5, type: 'Azure' },
        { name: "Service Bus", proficiency: 30, yrsExperience: 3, type: 'Azure' },
        { name: "Azure Funucions", proficiency: 35, yrsExperience: 3, type: 'Azure' },
        { name: "Kubernetes", proficiency: 20, yrsExperience: 2, type: 'Azure' },
        { name: "APIM", proficiency: 30, yrsExperience: 3, type: 'Azure' },
        { name: "Leading, SCRUM, Agile and Waterfall methodology", proficiency: null, yrsExperience: 2, type: 'soft skills' },
        { name: "Postman, RabbitMQ, Unit Tests", proficiency: null, yrsExperience: 8, type: 'soft skills' },
        { name: "Coding Patterns and principles", proficiency: null, yrsExperience: 8, type: 'soft skills' },
    ]
export default function Skills() {
    const grouped = skills.reduce((acc, skill) => {
        acc[skill.type] = acc[skill.type] || [];
        acc[skill.type].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    return (
        <Box>
            {Object.entries(grouped).map(([type, skills]) => (
                <Box my={2} key={type}>
                    <Typography variant="subtitle2" textAlign={"right"}>{type.toUpperCase()}</Typography>
                    {skills.map((skill, i) => (
                        <SkillDetail key={i} skill={skill} />
                    ))}
                </Box>
            ))}
        </Box>
    );

}