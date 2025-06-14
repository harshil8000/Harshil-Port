import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";
// import blockchain from '/public/image/blockchain.jpg';
// import devops from '/public/image/devops.jpg';
// import aiIntegration from '/public/image/ai-integration.jpg';

export const projectsData = [
  
  {
    id: 1,
    name: "NFT Web App",
    description:
      "Me and my team built an NFT Web App. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
    tools: [
      "Express",
      "MongoDB",
      "OpenAI API",
      "AWS SES",
      "AWS S3",
      "Node Mailer",
      "Joi",
      "Puppeteer",
      "EC2",
      "PM2",
      "Nginx",
    ],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 6,
    name: "CI/CD DevOps Pipeline",
    description:
      "I designed a scalable CI/CD pipeline for a microservices-based architecture using GitHub Actions, Docker, Kubernetes, and Helm. Used Prometheus and Grafana for monitoring and alerting. Deployed applications using ArgoCD and managed infrastructure with Terraform and AWS CloudFormation. Implemented blue-green deployments and canary releases for production rollout.",
    tools: [
      "Docker",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
      "Terraform",
      "AWS",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "CloudFormation",
    ],
    role: "DevOps Engineer",
    code: "",
    demo: "",
    image: "devops",
  },
  {
    id: 2,
    name: "Travel Agency App",
    description:
      "I have designed and developed a full-stack web app for 2Expedition. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "Google Maps",
      "NestJS",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Sun-Editor",
      "Gmail Passkey",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 7,
    name: "AI Integration in eCommerce",
    description:
      "Integrated OpenAI GPT and custom-trained models into an eCommerce platform to enable intelligent product recommendations, dynamic content generation, and customer support chatbots. Built APIs using Django and FastAPI, implemented caching with Redis, and deployed using Docker and AWS ECS. Trained custom NLP models using spaCy and integrated them with the chatbot system.",
    tools: ["Python", "FastAPI", "Django", "Redis", "OpenAI API", "spaCy", "Docker", "AWS ECS", "PostgreSQL"],
    role: "AI Engineer",
    code: "",
    demo: "",
    image: "aiIntegration",
  },
  {
    id: 3,
    name: "AI Powered Real Estate",
    description:
      "My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.",
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "Stripe",
      "Express",
      "TypeScript",
      "MongoDB",
      "Azure Blob",
      "OpenAI API",
      "Replicate AI",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Newsroom Management",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
  {
    id: 5,
    name: "Blockchain Wallet App",
    description:
      "I built a decentralized wallet app that enables users to securely store, transfer, and view transaction history for multiple cryptocurrencies. Integrated Metamask and WalletConnect for Web3 authentication. Used Solidity for smart contract development and Ethers.js for blockchain interaction. Deployed contracts on Ethereum Testnet and integrated The Graph for querying blockchain data.",
    tools: [
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "React",
      "Tailwind CSS",
      "Web3.js",
      "The Graph",
      "Metamask",
      "WalletConnect",
    ],
    role: "Blockchain Developer",
    code: "",
    demo: "",
    image: "blockchain",
  },
];
