export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "REST API", "JWT Authentication"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Postman"],
  },
];
