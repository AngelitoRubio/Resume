import * as React from 'react';
import Button from '@mui/material/Button';
import styles from "../page.module.css";
import ExperienceSection from "@/components/ExperienceSection";

export default function ButtonUsage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button variant="contained">Hello world</Button>
      </main>
      <ExperienceSection />
      </div>
  )
}

