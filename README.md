<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# personal-portfolio
>>>>>>> d4743d9ac98f3adc9f10288ed1a4c68c30f65a63 

This full-stack application serves as my personal portfolio for my web design career, where I demonstrate how to best combine a neat and slick UI frontend portfolio with an Express and MongoDB- powered backend database that catalogs contact information from those that use the website's 'Contact Form'.

This application displays "About", "Skills", "Projects", and "Contact" sections alongside some UI tricks such as changing the mode of the website from "light" to dark", and the nightsky meteor effect created using a for loop. A tutorial was used to help guide me on crafting this frontend portfolio, however the backend system was 100% created by me with my knowledge of backend systems and some chatGPT help when stuck. 

The backend communicates with the frontend using the "fetch" command in the ContactSection.jsx file, which sends a POST request to my backend to send data to my Express server working in the "app" folder.

SETUP Instructions:
To setup, you need to install React, Vite, npm and a MongoDB account for the deployment. 


To start the frontend, run: npm run dev
To run the backend, enter in an integrated terminal: node server.js

After making your mongoDB account, add your MongoURI to the /app/.env file.

This project was launched on Vercel: https://personal-portfolio-git-main-brandons-projects-adab5eca.vercel.app 

Reflections:

I believe this project helped me understand how the frontend using React can look like in a realistic scenario, and I've gotten used to the format of HTML that is so prevalent in frontend coding. I also feel like I've developed a better understanding of the relationship between the frontend and the backend. This is a project I will continue to improve on even after this course, as this will serve not only as my portfolio website for employers, but as a sandbox to test out now improvements as I learn more about full-stack applications. 




