# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

Salma Assem — Frontend Developer Portfolio
A personal portfolio website built with Angular 16 as a hands-on learning project — applying real Angular concepts while creating a production-ready app.

🔗 Live Demo: https://salmaassem-eng.github.io/portfolio/

✨ Features

Hero section — animated typing effect with Typed.js, skill tags, and profile photo
Projects page — card grid with real project screenshots and hover overlay with links
Contact page — working form with two-way data binding and success feedback
Responsive navbar — custom hamburger menu built with pure Angular + CSS (no Bootstrap JS)
Smooth routing — scroll-to-top on every page navigation
Rose Quartz theme — soft light color palette with glass-morphism card effects


🛠️ Built With
TechnologyPurposeAngular 16Frontend frameworkTypeScriptLanguageBootstrap 5Grid & utility classesTyped.jsAnimated typing effectCSS3Custom styling & animations

🧠 Angular Concepts Applied
This project was built specifically to practice Angular in a real-world context:

Components & Module architecture — navbar, footer, hero, projects, contact
Routing — RouterModule, routerLink, routerLinkActive, scrollPositionRestoration
Two-way data binding — [(ngModel)] in the contact form
Structural directives — *ngFor for project cards and skill tags, *ngIf for success message
Lifecycle hooks — AfterViewInit to initialize Typed.js after the view renders
Event binding — (click) for the mobile menu toggle
Property binding — [class.open], [class.show], [src], [href]
FormsModule — imported for template-driven form support


🚀 Getting Started
Prerequisites

Node.js v16+
Angular CLI v16

bashnpm install -g @angular/cli
Installation
bash# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start the development server
ng serve
Open your browser at http://localhost:4200

📁 Project Structure
src/
├── app/
│   ├── components/
│   │   ├── navbar/        # Sticky navbar with mobile toggle
│   │   └── footer/        # Footer with navigation links
│   ├── pages/
│   │   ├── hero/          # Landing / home page
│   │   ├── projects/      # Projects grid
│   │   └── contact/       # Contact form
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   └── app.component.ts
├── assets/
│   ├── profile.jpg        # Your profile photo
│   └── projects/          # Project screenshots
└── styles.css             # Global styles & theme variables


🌍 Deployment
This project is deployed on GitHub Pages using angular-cli-ghpages.
bash# Deploy to GitHub Pages
ng deploy --base-href=/portfolio/

See angular-cli-ghpages for full docs.


📬 Contact
Salma Assem — Frontend Developer

🌐 Portfolio: https://salmaassem-eng.github.io/portfolio/
💼 LinkedIn: https://www.linkedin.com/in/salma-assem/
🐙 GitHub: https://github.com/salmaassem-eng
