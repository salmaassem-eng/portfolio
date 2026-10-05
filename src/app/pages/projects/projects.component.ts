import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
    title: 'Yummy Meals',
        description:
          'Yummy Meals is a modern food-sharing web application built with Next.js. It allows users to discover recipes, explore meal ideas, and share their own favorite dishes with a community of food lovers. The app combines a polished user experience with practical functionality such as dynamic meal pages, recipe submission, and SQLite-backed data storage.' ,
        tags: ['Next.js', 'JavaScript', 'TypeScript','Tailwind CSS','CSS3', 'sqlite','Responsive Design'],
        image: 'assets/yummy.png',
        demo: 'https://yummy-meals-chi.vercel.app/',
        github: 'https://github.com/salmaassem-eng/Yummy_Meals',
      },
      {
  title: 'Med Wasla',
      description:
        'MedWasla is a full-stack healthcare platform that connects patients with verified medical specialists across Egypt. Patients can discover doctors and nurses, book appointments, join live clinic queues, chat with an AI assistant, and leave reviews. Specialists manage profiles, availability, and patient flow. Administrators verify and approve specialist registrations.' ,
      tags: ['React', 'JavaScript', 'TypeScript','Tailwind CSS','CSS3', 'Rest API','Node.js', 'MongoDB','Responsive Design'],
      image: 'assets/medwasla.png',
      demo: 'https://med-wasla.vercel.app/',
      github: 'https://github.com/salmaassem-eng/med-wasla',
    },
    {
  title: 'Shatably with AI',
      description:
        'Shatably is a service-based platform that connects users with professional workers for home finishing services, including painting, carpentry, electrical work, and plumbing. The platform allows users to browse services, view details, check worker ratings, and submit service requests through a clean and user-friendly interface. Built to streamline the process of finding reliable workers quickly and efficiently.' ,
      tags: ['React', 'JavaScript', 'Tailwind CSS','CSS3', 'Rest API','API Integration','Node.js', 'Responsive Design'],
      image: 'assets/newsh.png',
      demo: 'https://shatably-gradute-salmaassem-engs-projects.vercel.app/',
      github: 'https://github.com/salmaassem-eng/Shatably-Gradute',
    },
    {
    title: 'Tic-Tac-Toe Game',
      description:
        'The X-O Game is a simple and interactive implementation of the classic Tic-Tac-Toe game. It allows two players to compete in a turn-based game where each player takes turns marking spaces in a 3×3 grid with "X" or "O". The goal is to align three marks horizontally, vertically, or diagonally before the opponent.',
      tags: ['React', 'Tailwind', 'Html5','CSS3', 'JavaScript','Responsive Design'],
      image: 'assets/ticgame.png',
      demo: 'https://tic-tac-toe-game-pi-woad.vercel.app/',
      github: 'https://github.com/salmaassem-eng/tic-tac-toe-Game',
    },
    {
      title: 'Hangman Game',
      description:
        ' A game which you guess a word then win or lose ! A simple interactive Hangman word guessing game built with JavaScript, HTML, and CSS. This Hangman game lets players guess letters to find a hidden word before running out of attempts. It includes dynamic updates and keyboard interaction.',
      tags: ['Html5', 'CSS3', 'JavaScript','DOM Manipulation' ,'Responsive design'],
      image: 'assets/hangman.png',
      demo: 'https://salmaassem-eng.github.io/Hangman-Game/',
      github: 'https://github.com/salmaassem-eng/Hangman-Game',
    },
    {
        title: 'CupCakes Store',
      description:
        'Cupcake Store Website is a modern, responsive front-end web application designed to deliver an engaging and visually appealing user experience for a digital bakery platform.',
      tags: ['Html5', 'Sass', 'JavaScript','Node.js','Responsive design'],
      image: 'assets/cupcake.png',
      demo: 'https://salmaassem-eng.github.io/Cupcakes-website/index.html',
      github: 'https://github.com/salmaassem-eng/Cupcakes-website',
    },
    {
      title: 'Bite & Smile',
      description:
        'Bite & Smile is a mini food-ordering menu website built with React. It showcases a small collection of food items with prices, photos, and a smooth ordering experience through a clean and fast interface.',
      tags: ['React', 'JavaScript', 'CSS3','API Integration','Responsive Design'],
      image: 'assets/bite.png',
      demo: 'https://bite-smile.vercel.app/',
      github: 'https://github.com/salmaassem-eng/Bite-Smile',
    },
    {
      title: 'BLaban',
      description:
        'Blaban is a simple deserts ordering website where users can browse different flavors, view prices, and place orders through a clean and user-friendly interface.',
      tags: ['React', 'JavaScript', 'Tailwind','State Management','Responsive Design'],
      image: 'assets/blban.png',
      demo: 'https://blaban-qbti.vercel.app/',
      github: 'https://github.com/salmaassem-eng/blaban',
    },
    {
      title: 'Project management',
      description:
        'The Task Management System is a productivity-focused web application designed to help users organize, track, and manage their daily tasks efficiently.',
      tags: ['React', 'Node.js', 'Tailwind', 'JavaScript', 'Responsive Design'],
      image: 'assets/task.png',
      demo: 'https://project-management-4ewdydfxb-salmaassem-engs-projects.vercel.app/',
      github: 'https://github.com/salmaassem-eng/Project-management',
    },
    {
      title: 'Shatably',
      description:
        'Shatably is a service-based platform that connects users with professional workers for home finishing services, including painting, carpentry, electrical work, and plumbing.',
      tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      image: 'assets/oldsh.png',
      demo: 'https://s-hatably.vercel.app/',
      github: 'https://github.com/salmaassem-eng/SHatably',
    },
    {
      title: 'Plants Website',
      description:
        'A simple two-page website displaying plant types. Each type includes a price sorting feature that allows users to sort items from low to high or high to low. Built with a clean layout for quick browsing and easy product comparison.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'assets/plants.png',
      demo: 'https://salmaassem-eng.github.io/PlantsWebsite/',
      github: 'https://github.com/salmaassem-eng/PlantsWebsite',
    },
  ];
}
