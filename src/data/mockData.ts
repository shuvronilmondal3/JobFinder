
import { BookOpen, Award, Lightbulb, Rocket } from "lucide-react";

// Dashboard stats
export const dashboardStats = [
  { 
    title: "Active Research Projects", 
    value: "42", 
    trend: { value: 12, positive: true },
    color: "hsl(var(--research))"
  },
  { 
    title: "Patent Applications", 
    value: "18", 
    trend: { value: 5, positive: true },
    color: "hsl(var(--ipr))"
  },
  { 
    title: "Innovation Initiatives", 
    value: "27", 
    trend: { value: 8, positive: true },
    color: "hsl(var(--innovation))"
  },
  { 
    title: "Active Startups", 
    value: "15", 
    trend: { value: 3, positive: true },
    color: "hsl(var(--startup))"
  },
];

// Chart data
export const performanceData = [
  { name: "Jan", research: 5, ipr: 2, innovation: 3, startups: 1 },
  { name: "Feb", research: 7, ipr: 3, innovation: 5, startups: 2 },
  { name: "Mar", research: 8, ipr: 4, innovation: 6, startups: 2 },
  { name: "Apr", research: 12, ipr: 5, innovation: 8, startups: 3 },
  { name: "May", research: 15, ipr: 7, innovation: 10, startups: 4 },
  { name: "Jun", research: 18, ipr: 9, innovation: 12, startups: 5 },
];

export const categoryChartData = [
  { name: "Engineering", value: 40, color: "#1E88E5" },
  { name: "Computer Science", value: 30, color: "#42A5F5" },
  { name: "Medical", value: 20, color: "#64B5F6" },
  { name: "Others", value: 10, color: "#90CAF9" },
];

export const fundingChartData = [
  { name: "Govt. Grants", value: 45, color: "#9575CD" },
  { name: "Industry", value: 30, color: "#B39DDB" },
  { name: "Private", value: 15, color: "#D1C4E9" },
  { name: "Others", value: 10, color: "#E8EAF6" },
];

export const performanceCategories = [
  { key: "research", name: "Research", color: "hsl(var(--research))" },
  { key: "ipr", name: "IPR", color: "hsl(var(--ipr))" },
  { key: "innovation", name: "Innovation", color: "hsl(var(--innovation))" },
  { key: "startups", name: "Startups", color: "hsl(var(--startup))" },
];

// Activity data
export const recentActivities = [
  {
    icon: BookOpen,
    title: "New Research Project",
    description: "AI for Sustainable Agriculture",
    timestamp: "Just now",
    category: "research",
    categoryColor: "bg-[hsl(var(--research))]",
  },
  {
    icon: Award,
    title: "Patent Filed",
    description: "Energy-efficient desalination method",
    timestamp: "2h ago",
    category: "ipr",
    categoryColor: "bg-[hsl(var(--ipr))]",
  },
  {
    icon: Lightbulb,
    title: "Innovation Challenge",
    description: "Green Tech Solutions 2025 announced",
    timestamp: "5h ago",
    category: "innovation",
    categoryColor: "bg-[hsl(var(--innovation))]",
  },
  {
    icon: Rocket,
    title: "New Startup Incubated",
    description: "BioSolutions Inc. joins incubation program",
    timestamp: "1d ago",
    category: "startups",
    categoryColor: "bg-[hsl(var(--startup))]",
  },
];

// Research data
export const researchProjects = [
  {
    id: 1,
    title: "Advanced Materials for Renewable Energy",
    investigators: ["Dr. Sarah Chen", "Dr. Robert Johnson"],
    department: "Material Science",
    funding: "$350,000",
    status: "Active",
    progress: 65,
  },
  {
    id: 2,
    title: "AI-Driven Drug Discovery",
    investigators: ["Dr. Michael Lee", "Dr. Emma Johnson"],
    department: "Bioinformatics",
    funding: "$420,000",
    status: "Active",
    progress: 45,
  },
  {
    id: 3,
    title: "Quantum Computing Applications",
    investigators: ["Dr. Alan Turing", "Dr. Lisa Meitner"],
    department: "Computer Science",
    funding: "$580,000",
    status: "Active",
    progress: 30,
  },
  {
    id: 4,
    title: "Sustainable Urban Development Models",
    investigators: ["Dr. Priya Sharma", "Dr. Carlos Rodriguez"],
    department: "Urban Planning",
    funding: "$290,000",
    status: "Active",
    progress: 75,
  },
];

// IPR data
export const iprApplications = [
  {
    id: 1,
    title: "Energy-efficient Desalination Method",
    inventors: ["Dr. Maria Rodriguez", "Dr. James Kim"],
    type: "Patent",
    filingDate: "2024-02-15",
    status: "Filed",
    reference: "PAT-2024-001",
  },
  {
    id: 2,
    title: "Carbon Capture Technology",
    inventors: ["Dr. David Park", "Dr. Emily Chen"],
    type: "Patent",
    filingDate: "2024-01-23",
    status: "Under Review",
    reference: "PAT-2024-002",
  },
  {
    id: 3,
    title: "EcoSync Platform",
    inventors: ["Dr. Samantha Lee", "Dr. Kevin Zhang"],
    type: "Copyright",
    filingDate: "2023-11-10",
    status: "Registered",
    reference: "CR-2023-015",
  },
  {
    id: 4,
    title: "Biodegradable Polymers Production Process",
    inventors: ["Dr. Rachel Green", "Dr. Ahmed Hassan"],
    type: "Patent",
    filingDate: "2023-12-07",
    status: "Granted",
    reference: "PAT-2023-045",
  },
];

// Innovation data
export const innovations = [
  {
    id: 1,
    title: "Green Tech Solutions Challenge 2025",
    category: "Challenge",
    deadline: "2025-05-30",
    participants: 32,
    status: "Active",
  },
  {
    id: 2,
    title: "AI for Good Hackathon",
    category: "Hackathon",
    deadline: "2025-03-15",
    participants: 48,
    status: "Active",
  },
  {
    id: 3,
    title: "Open Innovation Platform",
    category: "Platform",
    deadline: "Ongoing",
    participants: 120,
    status: "Active",
  },
  {
    id: 4,
    title: "Biomedical Innovation Workshop Series",
    category: "Workshop",
    deadline: "2025-06-20",
    participants: 25,
    status: "Upcoming",
  },
];

// Startup data
export const startups = [
  {
    id: 1,
    name: "BioSolutions Inc.",
    domain: "Biotechnology",
    founded: "2023",
    funding: "$1.2M",
    stage: "Seed",
    founders: ["Emma Richards", "David Kumar"],
  },
  {
    id: 2,
    name: "GreenEnergy Tech",
    domain: "CleanTech",
    founded: "2022",
    funding: "$3.5M",
    stage: "Series A",
    founders: ["Michael Chen", "Sarah Rodriguez"],
  },
  {
    id: 3,
    name: "MedAI Systems",
    domain: "Healthcare",
    founded: "2023",
    funding: "$850K",
    stage: "Pre-seed",
    founders: ["Dr. James Wilson", "Lisa Zhang"],
  },
  {
    id: 4,
    name: "SmartAgro",
    domain: "AgriTech",
    founded: "2022",
    funding: "$2.1M",
    stage: "Seed",
    founders: ["Robert Martinez", "Priya Patel"],
  },
];
