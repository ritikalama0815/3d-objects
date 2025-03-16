import {ta, oa, ra } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    java,
    sql,
    nextjs,
    nodejs,
    c,
    r,
    c1,
    react,
    python,
    vscode,
    tailwindcss,
    book,
    cc,
    game,
    hand,
    keyboard,
    person,
    research
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: c1,
        name: "C",
        type: "Development",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: vscode,
        name: "Visual Studio Code",
        type: "Development Tool",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Development",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Development",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: c,
        name: "C++/C",
        type: "Frontend",
    },
    {
        imageUrl: r,
        name: "R",
        type: "Data Science",
    },
];

export const experiences = [
    {
        title: "Researcher",
        company_name: "Computer Science Dept, Truman State University",
        icon: ra,
        iconBg: "#accbe1",
        date: "Novemver 2023 - Present",
        points: [
            "Designed, analyzed, and implemented the deep learning and neural network architecture",
            "Performed the data collection of more than 30000 images and used them to train and test the model.",
            "Participated in research meetings, presentation, and contributed to ideas for further development.",
            "Contributed to documentation of journals, papers, and reports.",
        ],
    },
    {
        title: "Teacher's Assistant",
        company_name: "Truman State University",
        icon: ta,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - Dec 2023",
        points: [
            "Assisted more than 20 students with lectures, course materials, and assignments for Python and C++.",
            "Evaluated, and graded more than 50 coding assignments and projects.",
            "Assisted students with code debugging and understanding error messages.",
            "Participating in code reviews and providing constructive feedback to students.",
        ],
    },
    {
        title: "Office Assistant",
        company_name: "Truman State University",
        icon: oa,
        iconBg: "#b7e4c7",
        date: "Jan 2023 - dec 2023",
        points: [
            "Managed correspondence, scheduled meetings, and maintained the calenders in the department.",
            "Handled student inquiries and paperworks.",
            "Maintained the department website and bulletin boards.",
            "Provided technical support and coordinate with IT department.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ritikalama0815',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ritika-lama-b2605b2a4/',
    }
];

export const projects = [
    {
        iconUrl: hand,
        theme: 'btn-back-red',
        name: 'Hand Tracker',
        description: 'An application that tracks your hands through webcam and does certain things based on certain commands thar user input.',
        link: 'https://github.com/ritikalama0815/handtrack-python',
    },
    {
        iconUrl: game,
        theme: 'btn-back-green',
        name: 'Arena Game',
        description: 'A simple web game that allows user to move freely within the arena to collect some "coins" that helps users to get the points',
        link: 'https://github.com/ritikalama0815/arena-game',
    },
    {
        iconUrl: book,
        theme: 'btn-back-blue',
        name: 'Recipe Book',
        description: 'A book that has recipes of everything users ask for.',
        link: 'https://github.com/ritikalama0815/Recipe',
    },
    {
        iconUrl: keyboard,
        theme: 'btn-back-pink',
        name: 'Speed Typing',
        description: 'A website that counts the WPM of a user based on their typing speed and accuracy.',
        link: 'https://github.com/ritikalama0815/type',
    },
    {
        iconUrl: cc,
        theme: 'btn-back-black',
        name: 'Credit Card',
        description: 'A GUI application that allows to check whether the credit card is valid or not.',
        link: 'https://github.com/ritikalama0815/CreditCard',
    },
    {
        iconUrl: person,
        theme: 'btn-back-yellow',
        name: '3d Personal Portfolio',
        description: 'Website that sums up my skills and projects while showcasing the 3D rendering of objects',
        link: 'https://github.com/ritikalama0815/3d-objects',
    },
    {
        iconUrl: research,
        theme: 'btn-back-yellow',
        name: 'Lung and Colon Cancer Research',
        description: 'A deep learning model used to train and test the LC25000 dataset and improved it to achieve 100% accuracy on lung and colon cancer detection.',
        link: 'https://www.mdpi.com/2072-6694/16/22/3879',
    }
];