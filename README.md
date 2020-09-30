# Frontend Mentor - File Transfer pricing component

![Design preview for the File Transfer pricing component coding challenge](./design/desktop-preview.jpg)

## What is this?
This is my response to a front-end coding challenge from [Frontend Mentor](https://www.frontendmentor.io). Frontend Mentor provides great development challenges alongside beautiful designs, enabling you to build your skills using realistic projects.

I plan to take on most, if not all, of the free challenges in order from easiest (*'Newbie'*) to hardest (*'Advanced'*).

## The challenge
Challenge #13
Difficulty: Junior

This challenge was to build out a pricing component and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard

## My approach
I took a **mobile-first** approach, completing styling and layout for a 375px viewport width first. I then built out media queries to cater to larger widths.

I used **Sass** to easily implement elements provided in `style-guide.md`.

My biggest focus for this challenge was **making the pricing toggle accessible**, particularly for screenreader users. I read a lot of articles but they were mostly focussed on on/off toggle buttons and used checkboxes or buttons as their base HTML element.

Semantically, this toggle felt more like it made more sense as a **radio group** so I tried to use radio inputs instead, though I definitely don't think I've nailed it...

The end product is hosted on Vercel - https://pricing-component-with-toggle-rouge.vercel.app/

## Questions
I'd love to read any other examples of accessible toggle switches used in this context (ie not as a simple on/off analog).

Cheers! 🍻
