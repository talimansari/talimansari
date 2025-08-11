import self from "../img/self3.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Talim",
    lastName: "Ansari",
    initials: "Ta", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Frontend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by chai'
        },
        {
            emoji: '🌎',
            text: 'Based in the India'
        },
        {
            emoji: "💼",
            text: "React Developer at ",
            link: "https://rockymountaintech.co/"
        },
        {
            emoji: "📧",
            text: "let's get in ",
            link: "talimansari73@gmail.com"
        },
         {
            emoji: "📝",
            text: "download my ",
            link: "resume"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://www.instagram.com/talim2.o/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/talimansari",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/talim-ansari-427ab4195/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/AnsariTalim73",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Talim. I am a frontend developer with over 5 years of experience. My expertise includes React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and modern frontend optimization techniques. I am actively learning backend technologies such as Node.js, Express.js, PostgreSQL, MongoDB, and microservices architecture, with a focus on real-time communication using Kafka and cloud deployment on AWS. I am passionate about building scalable applications, exploring event-driven systems, and contributing to open-source projects. My recent practice projects include an eCommerce platform and a POS system using the MERN stack, Kafka, and microservices. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', "typescript","redux tookit" , "next", 'git', 'github', 'bootstrap', 'html5', 'css3', "tailwind css", "material-UI (mui)" ,"firebase","supabase" ],
            exposedTo: ['nodejs', 'express', 'mongoDB', "nestjs", "kafka", "AWS", "microservices"]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Earthlink",
            live: "https://www.earthlink.net/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            // source: "https://github.com", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Invozio",
            live: "https://www.invozio.com/",
            // source: "https://github.com",
            image: mock2
        },
        {
            title: "LoopOS",
            live: "https://food.loopos.ca/?id=659e664ce0ec95ac62733122&slug=loop-store-tzqlkc",
            // source: "https://github.com",
            image: mock3
        },
        {
            title: "Flapjack Editor",
            live: "https://editor.flapjack.co/en/templates",
            image: mock4
        },
    ]
}