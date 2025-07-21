# Portfolio Website

## About

This is my own website, which is also a portfolio site. The design of the site was created in collaboration with a UI designer [Julia Hyz](https://pl.linkedin.com/in/julia-hyz-098288274), where we worked together on a mockup in Figma.

## Coding & Problems

When I decided to do this project, there were still a lot of issues that were not clear to me, so I took it as a challenge.

The first issue that I had to spend longer on was configuring the form from scratch (now I would probably use yup and the whole form would take 15 minutes), where each field had to have a pattern, error message etc.

The second problem, or rather number of solutions, arose when I decided to set up email sending. I decided to use emailJS in conjunction with google reCaptcha, which forced me to set up a local server using Node with Express to test sending requests.

**What else did I learn?**

- Creating reusable components that can be used in another projects ([nietypowa-sowa](https://github.com/anathretic/nietypowa-sowa)),
- Creating my own hooks - consolidation of destructuring,
- Using Supabase with react-query,
- A broader understanding of how everything works underneath

The code is refactored and divided into components and custom hooks.

## Links & Tools

**Used:** HTML, CSS, JavaScript (incl. DayJS library), React, React-Query, Node + Express, Tailwind, Vite

**Tools:** [EmailJS](https://www.emailjs.com/), [Google reCaptcha](https://www.google.com/recaptcha/about/), [Supabase](https://supabase.com/)

**URL:** [Portfolio Page](https://konrad-wojtylo.com/)

_This project is closed-source and proprietary. See the LICENSE file for more information._
