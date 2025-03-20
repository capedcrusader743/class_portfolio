import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
      title: 'AI Talent Profiler',
      description: 'Developed an AI-driven personality assessment using Florence-2 OCR, Deepseek API, and AWS for career insights.',
      bgImage: '/work-1.png',
      role: 'Backend Developer',
      technologies: ['Florence-2 OCR', 'Deepseek API', 'AWS', 'React.js', 'Node.js'],
      outcomes: 'Delivered a scalable AI solution that improved career matching accuracy by 40%.',
      learnings: 'Gained expertise in integrating AI APIs and optimizing cloud infrastructure.',
    },
    {
      title: 'Social Engineering Cybersecurity Plan',
      description: 'Designed a cloud security framework with AWS IAM, S3, CloudTrail, and NIST to mitigate social engineering threats.',
      bgImage: '/work-2.png',
      role: 'Security Architect',
      technologies: ['AWS IAM', 'AWS S3', 'AWS CloudTrail', 'NIST Framework', 'Python'],
      outcomes: 'Reduced security vulnerabilities by 60% and improved compliance with NIST standards.',
      learnings: 'Learned advanced cloud security practices and threat mitigation strategies.',
    },
    {
      title: 'Gender Equity Analysis',
      description: 'Led data analysis on gender pay disparities using Python, BERT-based ML, and Matplotlib for equity insights.',
      bgImage: '/work-3.png',
      role: 'Data Analyst',
      technologies: ['Python', 'BERT-based ML', 'Matplotlib', 'Pandas', 'NumPy'],
      outcomes: 'Identified key pay disparity trends, leading to actionable recommendations for HR.',
      learnings: 'Enhanced skills in machine learning and data visualization for social impact.',
    },
    {
      title: 'FitTrack',
      description: 'Built a fitness tracking web app using React.js, PostgreSQL, Firebase, Chart.js, and Material UI.',
      bgImage: '/work-4.png',
      role: 'Fullstack Developer',
      technologies: ['React.js', 'PostgreSQL', 'Firebase', 'Chart.js', 'Material UI'],
      outcomes: 'Launched a user-friendly app with 1,000+ active users in the first month.',
      learnings: 'Mastered fullstack development and real-time database integration.',
    },
  ];

export const serviceData = [
    { icon: assets.web_icon, title: 'Full stack', description: 'Full stack development encompasses the complete process of application software development,...', link: 'https://www.mongodb.com/resources/basics/full-stack-development' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile application development is the process of making software for smartphones...', link: 'https://www.ibm.com/think/topics/mobile-application-development' },
    { icon: assets.ui_icon, title: 'Data analysis', description: 'Data analysis is the practice of working with data to glean useful information...', link: 'https://www.coursera.org/articles/what-is-data-analysis-with-examples' },
    { icon: assets.graphics_icon, title: 'Cybersecurity', description: 'Cyber security refers to every aspect of protecting an organization and its employees and assets against cyber threats...', link: 'https://www.checkpoint.com/cyber-hub/cyber-security/what-is-cybersecurity/#:~:text=Cyber%20security%20refers%20to%20every,to%20mitigate%20corporate%20cyber%20risk.' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, Java, JavaScript, SQL, HTML/CSS/Bootstrap, Node.js, React.js, UNIX, C' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Northeastern University, University of Minnesota - Twin Cities' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 4 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];