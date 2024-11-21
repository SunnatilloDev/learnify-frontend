import { Feature } from "@/types/feature";
import { BadgeDollarSign, BrainCircuit, Earth, HandCoinsIcon, Swords, TvMinimalPlayIcon, Users } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
    <Earth size={"40px"}/>
    ),
    title: "Accessible Learning for Everyone",
    paragraph:
      "Our platform makes education accessible and affordable, empowering students and teachers to connect and grow from anywhere.",
  },
  {
    id: 2,
    icon: (
      <TvMinimalPlayIcon size={"40px"}/>
    ),
    title: "High-Quality Video Courses",
    paragraph:
      "Experience learning like never before with 4K-quality courses designed to provide clarity and engagement for students.",
  },
  {
    id: 3,
    icon: (
      <BrainCircuit size={"40px"}/>
    ),
    title: "AI-Powered Learning",
    paragraph:
      "Leverage the power of AI to recommend courses, answer questions, and help both students and teachers improve faster.",
  },
  {
    id: 4,
    icon: (
     <HandCoinsIcon size={"40px"}/>
    ),
    title: "Empowering Teachers",
    paragraph:
      "Teachers can monetize their skills with ease, focusing on creating quality content while we handle the rest.",
  },
  {
    id: 5,
    icon: (
     <Users size={"40px"}/>
    ),
    title: "Collaborative Study Rooms",
    paragraph:
      "Join study rooms to learn and grow with like-minded individuals working towards similar goals. Share insights, discuss topics, and stay motivated.",
  },
  {
    id: 6,
    icon: (
      <Swords size={"40px"}/>

    ),
    title: "Gamified Learning Experience",
    paragraph:
      "Stay motivated with leaderboards, achievements, and rewards for completing courses and engaging with the platform. Learning has never been this fun!",
  }


];

export default featuresData;
