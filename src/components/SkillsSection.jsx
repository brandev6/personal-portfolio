import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [

    { name: "HTML/CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 70, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    { name: "Node.js", level: 90, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },
  
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },

    { name: "Lua", level: 60, category: "other"},
    { name: "Blender", level: 85, category: "other"},
    { name: "Photoshop", level: 80, category: "other"},

]