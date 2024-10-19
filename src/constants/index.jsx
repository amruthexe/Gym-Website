import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


// Importing FontAwesome icons
import { FaDumbbell, FaRunning, FaWeight, FaChartLine, FaUserCheck, FaTachometerAlt, FaUsers,FaWind,FaWalking } from 'react-icons/fa';


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [ 
  {
    user: "Rahul Mehta",
    company: "Private Job Worker",
    image: user1,  // Replace with an actual image reference
    text: "JBS Gym has been a life-changing experience for me. The facilities are top-notch, and the trainers have helped me achieve my fitness goals faster than I expected. Highly recommend it to anyone serious about fitness!",
  },
  {
    user: "Anita Sharma",
    company: "Bank Manager",
    image: user2,  // Replace with an actual image reference
    text: "As someone with a busy schedule, I appreciate how the trainers at JBS Gym customize workout plans to fit my needs. The 24/7 access to the gym makes it easy for me to work out whenever I find time. The personal training sessions are incredibly effective.",
  },
  {
    user: "Vikas Reddy",
    company: "Local Business Owner",
    image: user3,  // Replace with an actual image reference
    text: "I've tried several gyms, but JBS Gym stands out for its excellent equipment and knowledgeable trainers. I’ve made great progress with their weight loss programs, and the atmosphere is always motivating.",
  },
  {
    user: "Priya Kapoor",
    company: "Private Sector Employee",
    image: user4,  // Replace with an actual image reference
    text: "Joining JBS Gym has been one of the best decisions for my health. The gym is always clean, well-maintained, and the staff is very supportive. The group fitness classes have been a lot of fun and have helped me stay consistent with my fitness journey.",
  },
  {
    user: "Rohan Deshmukh",
    company: "Bank Officer",
    image: user5,  // Replace with an actual image reference
    text: "I’m extremely happy with the results I’ve achieved at JBS Gym. The personal trainers are very professional and dedicated to helping you succeed. It’s not just a gym; it’s a community that pushes you to be your best.",
  },
  {
    user: "Sakshi Nair",
    company: "IT Professional",
    image: user6,  // Replace with an actual image reference
    text: "The personal training sessions at JBS Gym are excellent! The trainers really take the time to understand your fitness goals and help you work towards them with a solid plan. The environment is motivating, and the equipment is high quality.",
  },
];


export const features = [
  {
    icon: <FaDumbbell />, // Dumbbell icon for strength training
    text: "Strength Training",
    description:
      "Build muscle and increase strength with expert guidance. Our gym is equipped with top-notch equipment to help you push your limits.",
  },
  {
    icon: <FaRunning />, // Running icon for cardio training
    text: "Cardio Training",
    description:
      "Burn calories and improve endurance with our range of cardio machines, including treadmills, bikes, and more.",
  },
  {
    icon: <FaWeight />, // Weight scale icon for weight loss
    text: "Weight Loss Programs",
    description:
      "Customized workout plans designed specifically for weight loss, helping you shed those extra pounds effectively.",
  },
  {
    icon: <FaChartLine />, // Line chart icon for weight gain or growth tracking
    text: "Weight Gain Programs",
    description:
      "Our fitness experts can help you with structured plans to build muscle mass and achieve your weight gain goals.",
  },
  {
    icon: <FaUserCheck />, // Personal training icon (user check)
    text: "Personal Training",
    description:
      "One-on-one personal training sessions with certified trainers to guide you through tailored workout plans and help you stay on track.",
  },
  {
    icon: <FaTachometerAlt />, // Treadmill or performance speed (tachometer) icon
    text: "Specialized Treadmill Workouts",
    description:
      "Treadmills are our specialty! Get the best results with guided treadmill workouts, helping you improve cardiovascular health and stamina.",
  },
  {
    icon: <FaUsers />, // Group or community icon
    text: "Ladies & Gents Fitness Centre",
    description:
      "We offer separate fitness sessions for men and women, ensuring a comfortable and motivating environment for everyone.",
  },
  {
    icon: <FaWind />, // Air-conditioned icon
    text: "Fully Air-Conditioned Gym",
    description:
      "Workout in a cool, comfortable environment with our fully air-conditioned gym, ensuring a pleasant experience during every session.",
  },
  {
    icon: <FaWalking />, // Walking or treadmill-related icon
    text: "Treadmills: Our Specialty",
    description:
      "Treadmills are one of our specialties. Experience high-quality treadmills designed to help you achieve your cardio and endurance goals.",
  }
];




export const checklistItems = [
  {
    title: "Strengthening",
    description:
      "Enhance your muscle power with targeted strengthening exercises. Our facility is equipped to help you build and tone your muscles effectively.",
  },
  {
    title: "Cardio Training",
    description:
      "Boost your cardiovascular health and burn calories with a variety of cardio machines, including treadmills, ellipticals, and stationary bikes.",
  },
  {
    title: "Weight Loss Programs",
    description:
      "Achieve your weight loss goals with customized programs that combine cardio, strength training, and nutrition guidance.",
  },
  {
    title: "Weight Gain Programs",
    description:
      "Structured weight gain programs designed to help you bulk up and build muscle mass through targeted exercises and nutrition.",
  },
  {
    title: "Personal Training",
    description:
      "Receive personalized workout plans with one-on-one guidance from our certified trainers, designed to help you achieve your fitness goals.",
  },
  {
    title: "Treadmills: Our Specialty",
    description:
      "With our specialty in treadmills, achieve your cardio and endurance goals efficiently with the best equipment available.",
  },
  {
    title: "Ladies & Gents Fitness Centre",
    description:
      "Separate fitness sessions for men and women, ensuring a comfortable and motivating workout environment for everyone.",
  },
  {
    title: "Bodybuilding Programs",
    description:
      "Join our bodybuilding programs to build muscle and strength with tailored routines, expert guidance, and advanced techniques.",
  },
  {
    title: "Yoga & Flexibility Training",
    description:
      "Improve your flexibility and balance through guided yoga sessions that help with relaxation, mobility, and core strength.",
  },
  {
    title: "Nutritional Guidance",
    description:
      "Receive expert nutritional advice to complement your fitness goals. Our specialists will create meal plans that align with your fitness journey.",
  },
];


export const pricingOptions = [
  {
    title: "Basic",
    price: "₹899",
    features: [
      "Access to Gym Facilities",
      "No Personal Training",
      "Limited Access to Group Classes",
      "Self-Guided Workouts",
      "No Support",
    ],
  },
  {
    title: "Pro",
    price: "₹1999",
    features: [
      "Access to All Gym Facilities",
      "2 Personal Training Sessions per Month",
      "Unlimited Access to Group Classes",
      "Diet Consultation",
      "Priority Support",
    ],
  },
  {
    title: "Peronal Training",
    price: "₹2999",
    features: [
      "Unlimited Access to All Gym Facilities",
      "Unlimited Personal Training Sessions",
      "Custom Diet Plans", "Priority Support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Workout Routines" },
  { href: "#", text: "Diet Plans" },
  { href: "#", text: "Video Tutorials" },
  { href: "#", text: "Member Success Stories" },
  { href: "#", text: "FAQ" },
];

export const platformLinks = [
  { href: "#", text: "Personal Training" },
  { href: "#", text: "Group Fitness Classes" },
  { href: "#", text: "Gym Facilities" },
  { href: "#", text: "Membership Plans" },
  { href: "#", text: "Online Training" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Workshops" },
  { href: "#", text: "Fitness Challenges" },
  { href: "#", text: "Local Competitions" },
  { href: "#", text: "Careers" },
];
