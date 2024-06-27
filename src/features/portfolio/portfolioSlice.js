import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "Kratika Yadav",
  contact: {
    email: "yadavkratika57@gmail.com",
    phone: "809-075-0557",
    linkedin: "https://www.linkedin.com/in/kratika-yadav-373735156/",
    github: "https://github.com/kratika16",
  },
  experience: [
    {
      company: "Newgen Software Technologies",
      role: "Software Design Engineer",
      location: "Noida, India",
      duration: "03/2023 - Current",
      projects: [
        {
          name: "Newgen Application Designer",
          duration: "03/2024 - Current",
          description: [
            "Spearheading the UI team, overseeing development, code reviews, and adherence to standards, while assigning tasks and ensuring efficient progress.",
            "Conducting comprehensive code and peer reviews of new UI components and unit test cases, ensuring high code quality and compliance with company standards.",
            "Developed and implemented UI screens, integrated APIs from backend services for seamless data flow and functionality. Collaborated with backend developers to troubleshoot integration issues, ensuring smooth performance and quality of the overall application."
          ],
          tech: ["React.js", "Redux", "MaterialUI", "SQL", "Jest"]
        },
        {
          name: "NewgenOne Migration",
          duration: "01/2024 - 04/2024",
          description: [
            "Worked on the development of a key module, specifically the Process Designer & Launchpad, for all the NewgenOne products.",
            "Collaborated on integrating the Process Designer with several other modules within the NewgenOne Migration product, enhancing overall functionality.",
            "Played a crucial role in the migration, handling the transition from an older product to the latest version, showcasing adaptability and problem-solving skills."
          ],
          tech: ["React.js", "Redux", "MaterialUI", "SQL", "Jest"]
        },
        {
          name: "NewgenOne Marvin",
          duration: "11/2023 - 03/2024",
          description: [
            "Worked on Integrated OpenAI API with a React.js frontend to enable AI-driven features within the application.",
            "Designed and implemented interactive UI components for engaging with AI models, enhancing user experience and functionality.",
            "Conducted unit and integration testing to maintain high standards of code quality and functionality."
          ],
          tech: ["React.js", "Redux", "React Testing Library", "MaterialUI"]
        },
        {
          name: "NewgenOne 2023.1",
          duration: "03/2023 - 11/2023",
          description: [
            "Extensively contributed to creating a fully responsive product, ensuring a seamless user experience across various devices and screen sizes.",
            "Demonstrated a commitment to inclusivity by ensuring the product is fully compliant with Web Content Accessibility Guidelines (WCAG).",
            "Adapted the product for different languages, with a notable example being layout changes for Arabic language support.",
            "Extensively worked on improving the overall performance of the application by optimizing API calls and handling large datasets efficiently."
          ],
          tech: ["React.js", "Redux", "MaterialUI"]
        }
      ],
    },
    {
      company: "Carnation InfoTech Pvt. Ltd.",
      role: "Software Development Engineer-1",
      location: "Lucknow, India",
      duration: "06/2021 - 02/2023",
      projects: [
        {
          name: "COACHUSA",
          duration: "06/2021 - 02/2023",
          description: [
            "Developed and implemented changes as per client requirements.",
            "Addressed UI issues effectively using Tailwind CSS and wrote test cases for robust code.",
            "Designed and built the user profile section from scratch."
          ],
          tech: ["React.js", "Redux", "Tailwind CSS", "React Testing Library"]
        },
        {
          name: "PARTSAUTHORITY",
          duration: "06/2021 - 12/2022",
          description: [
            "Engaged in Power BI development, working on projects involving Azure analytics and Power BI reporting.",
            "Responsible for creating Power BI reports and maintaining data integrity."
          ],
          tech: ["Microsoft Power BI", "Power BI service", "SQL Server", "Azure Data Studio"]
        }
      ],
    }
  ],
  projects: [
    {
      name: "COACH CLONE",
      description: [
        "Developed a Clone of the USA's Largest Transport Ticket Booking Website.",
        "Entire layout designed using Tailwind CSS, providing a fully customizable and responsive user interface.",
        "Leveraged Redux Toolkit for managing state and user data, enhancing the application's performance and scalability.",
        "Integrated Stripe API for seamless and secure payment processing."
      ],
      tech: ["React.js", "Redux Toolkit", "Firebase", "Redux Thunk", "Stripe", "Tailwind CSS"]
    },
    {
      name: "CAPSTONE APP",
      description: [
        "Developed a full-featured e-commerce application as the capstone project, showcasing extensive knowledge and skills in web development.",
        "Utilized Firebase for managing the database, handling user authentication, and streamlining the login processes, providing a secure and efficient backend solution.",
        "Seamless and secure payment processing achieved through the integration of the Stripe API."
      ],
      tech: ["React.js", "Firebase", "Redux", "Redux Thunk", "Stripe"]
    }
  ],
  skills: [
    "React.js", "JavaScript", "Redux", "Jest", "React Testing Library", "TypeScript", "HTML", "CSS", "Material UI", "Tailwind CSS", "C++", "C", "SQL", 
    "Azure", "OOPS", "Power BI", "Power Apps", "Frontend", "Data Structures", "Algorithms", "English", "Hindi"
  ],
  education: {
    degree: "Bachelor of Technology",
    institution: "Institute of Engineering and Technology (IET), Lucknow, UP",
    duration: "07/2017 - 07/2021",
    gpa: "8.17",
    major: "Electronics and Communication Engineering"
  },
  achievements: [
    {
      title: "High Five Award",
      description: "Got this award for solving maximum bugs, played a crucial role in the migration process, handling the transition from an older product to the latest version during the release of NewgenOne Migration (Jan 2024)."
    },
    {
      title: "Star Performer Award",
      description: "Got this award for obtaining the highest score among all trainees (Aug 2021)."
    },
    {
      title: "Competitive Programming",
      description: "Solved more than 200+ problems on LeetCode, HackerRank, Spoj, and Gfg. Completed React Developer Course and earned the certificate."
    },
    {
      title: "Content Writer",
      description: "Worked as a content writer for an NGO named Swapna Foundation."
    },
    {
      title: "Sports",
      description: "Played volleyball at state and national levels."
    }
  ]
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;
