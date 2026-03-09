export type Project = {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Smart Learning Platform",
    description:
      "A backend-focused learning platform designed to support scalable course delivery, progress tracking, and personalized learning flows.",
    techStack: ["NestJS", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/your-username/smart-learning-platform",
    liveUrl: "https://dozu.blog/en",
  },
  {
    name: "Authentication API",
    description:
      "A secure authentication service with JWT-based login, role-based access control, and clean API architecture for modern applications.",
    techStack: ["Node.js", "NestJS", "JWT", "MongoDB"],
    githubUrl: "https://github.com/your-username/authentication-api",
  },
  {
    name: "Task Management API",
    description:
      "A RESTful task management backend that supports task CRUD, filtering, authentication, and production-ready service structure.",
    techStack: ["Node.js", "Express", "PostgreSQL", "Postman"],
    githubUrl: "https://github.com/your-username/task-management-api",
  },
];
