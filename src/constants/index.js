import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    johnsoncontrols,
    aws,
    python,
    java,
    jenkins,
    sql,
    mysql,
    restapi,
    paint,
    website,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "DevOps Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "REST API",
      icon: restapi,
    },
  ];
  
  const experiences = [
    {
      title: "Software Automation Engineer Co-op",
      company_name: "Johnson Controls",
      icon: johnsoncontrols,
      iconBg: "#383E56",
      date: "Sept 2021 - Sept 2022",
      points: [
        "Designed and deployed a scalable Dockerfile script that setups the build environment by installing the required libraries and files.",
        "Changed the product builds infrastructure by the integration of AWS, Docker, and Jenkins together resulting in the product build time being improved by around 73%.",
        "Optimized data transfer from the build output to external storage by 20% by using S3 bucket.",
        "Developed script to automatically change GitHub repo settings and branches alongside their branch protection rules.",
      ],
    },
    {
      title: "Full Stack Web Developer Co-op",
      company_name: "Wyn City Ltd",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2021 - Sept 2021",
      points: [
        "Utilized React and Nodejs to improve client website by redesigning it with a new theme and implement new features. like, chat widget, submenu, populating tables with data, and table functionality",
        "Developed and updated routing for server-side API calls in the backend along with client side in the frontend.",
      ],
    },
    {
      title: "Web Developer Co-op",
      company_name: "23e2 Digital Marketing",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2020 - Sept 2020",
      points: [
        "Improved and optimized existing code resulting in reducing lines by 50%",
        "Implementation of new features included the use of Web Scrapers, Facebook API, Google Maps API, and other REST APIs",
        "Developed multiple Python scripts to upload and send data to the main code via MySQL",
        "Reduced page load times by 30% for 10+ pages in a clients website by developing and optimizing the front end and backend of web pages",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Website Portfolio",
      description:
        "My personal portfolio which includes my previous work experiences, projects and current technical skills.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: website,
      source_code_link: "https://github.com/venuraperera99/website-portfolio",
    },
    {
      name: "Course Planner",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Paint",
      description:
        "A basic, spin-off of Microsoft Paint created using MVC, Strategy, Command and Factory design patterns.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "design patterns",
          color: "green-text-gradient",
        },
        {
          name: "scrum",
          color: "pink-text-gradient",
        },
      ],
      image: paint,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };