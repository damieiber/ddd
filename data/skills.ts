import { Skill } from '@/types'

export const skills: Skill[] = [
  { name: 'Frontend', value: 90, fullMark: 100 },
  { name: 'Backend', value: 85, fullMark: 100 },
  { name: 'Data Viz', value: 80, fullMark: 100 },
  { name: 'SQL/ETL', value: 85, fullMark: 100 },
  { name: 'Machine Learning', value: 70, fullMark: 100 },
  { name: 'DevOps', value: 75, fullMark: 100 },
]

export const techStack = {
  dev: [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Node.js',
    'Python',
    'Go',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'Kubernetes',
  ],
  data: [
    'Python',
    'SQL',
    'Pandas/NumPy',
    'Spark',
    'Airflow',
    'TensorFlow',
    'scikit-learn',
    'Tableau',
    'Power BI',
    'dbt',
  ],
}
