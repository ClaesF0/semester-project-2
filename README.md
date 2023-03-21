##Summary:
The goal of the project was to create an auction website using the skills learned over the past three semesters. An auction site was to be launched where users could add items to be bid on and bid on items put up for auction by other users. When a new user joined the website, they were given 1000 credits to use on the site. They could get credits by selling items and use credit by buying items. Non-registered users could search through the listings, but only registered users could make bids on listings.

The project only covered the front-end application for the API, and all API functionality was managed by an existing application. The API used for the project could be found under Auction EndPoints in the Noroff API documentation.

The client specified requirements in the form of User Stories, including registering with a stud.noroff.no email, logging in and out, updating an avatar, viewing total credit, creating a Listing with a title, deadline date, media gallery, and description, adding a Bid to another user's Listing, viewing Bids made on a Listing, and searching through Listings for unregistered users.

The company CTO set technical restrictions, including using an approved CSS Framework, hosting on an approved Static Host, using an approved Design Application, and using an approved Planning Application. The Product Owner requested links to a Gantt chart for project timing, a design prototype, a style guide, a kanban project board, a repository link, and a hosted application demo link.

The project used approved resources, including CSS processors such as SASS/SCSS and PostCSS, CSS frameworks such as Bootstrap (version >5.0.1), Tailwind (version >3.0.0), and MUI (version >5.11.8), hosting services such as GitHub Pages and Netlify, design applications such as Adobe XD, Figma, and Sketch, and planning applications such as Trello and GitHub Projects.

In the end, the project was delivered in the Moodle delivery window using the required template format. All final changes were merged into the default branch main or master, and the readme.md file described the project thoroughly, including how to set up and run the project locally and any special instructions for testers.

##Quick start:
https://tailwind-elements.com/quick-start/

For this project you need to be familiar with:
Vite
https://www.npmjs.com/package/vite

        NODE
        https://nodejs.org/en/

        Tailwind (link to official docs)
        https://tailwindcss.com/docs/installation

        Link to video-resource for setting up Tailwind, and some free elements. (Please note that the script in head is from this page)
        https://tailwind-elements.com/quick-start/

        Additional tools:
        https://www.npmjs.com/package/lint
        https://github.com/prettier/prettier
        https://jestjs.io/docs/getting-started

Once these steps are set up, please:
1: open your terminal (bash is my preferred)
2: 'dir' in terminal to assure you are in the directory "/YOUR SOURCE/npm-vite-boilerplate-2/Tailwind-boilerplate"
if not, then change directory (type "cd" (on Windows)) until you are in
"/YOUR SOURCE/npm-vite-boilerplate-2/Tailwind-boilerplate"

3: "npm run build"
4: "npm run dev"

5: Ctrl+click the link, open your browser

It should work now.

See package.json for all scripts
npm run build: "vite build",
npm run preview: "vite preview",
npm run lint: "eslint .",
npm run lint-fix: "eslint . --fix",
npm run prettier: "npx prettier --write .",
npm run check-format: "npx prettier --check ."
