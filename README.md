# Shopping Cart Base Project

## Overview

This project is a shopping cart application developed primarily as a **programming logic and back-end practice exercise**.  
Although implemented using **HTML, CSS, and JavaScript**, the main focus is **logical structuring, state control, and data consistency**, not front-end technologies or JavaScript-specific features.

HTML and CSS are used strictly as **support tools** to visualize and interact with the logic implemented.

---

## Project Purpose

The main goals of this project are:

- Practice **programming logic independent of language-specific shortcuts**
- Develop a **reusable and extensible shopping cart logic**
- Simulate common **back-end cart behaviors** on the client side
- Avoid excessive reliance on JavaScript-exclusive methods
- Build a solid **base project** that can be easily adapted to other technologies

This project was intentionally written in a way that allows the same logic to be **ported to other languages** (such as Java, C#, or Python) with minimal changes.

---

## Core Concept

The application was designed to act as a **base shopping cart system**, where:

- New products can be added simply by defining:
  - Name
  - Unit price
- Quantities and totals are recalculated using the **same core logic**
- Existing cart entries are updated instead of duplicated
- Product rules remain consistent regardless of how many items are added

This makes the project suitable as a **template** for future shopping cart implementations.

---

## Features

- Add products with dynamic quantity control
- Remove specific quantities of products
- Prevent invalid operations (e.g. removing more items than exist)
- Maintain accurate total cart value
- Automatically remove products when quantity reaches zero
- Clear the entire cart and reset state

---

## Technologies Used

- HTML5 (interface support)
- CSS3 (layout and styling support)
- JavaScript (logic implementation, written with portability in mind)

---

## Project Structure

/assets
└── images and icons

/js
└── app.js

index.html

style.css

README.md

---

## Design Decisions

- Logic prioritizes **clarity and predictability**
- Minimal use of JavaScript-specific abstractions
- State is handled explicitly through variables and controlled updates
- UI reflects the application state at all times

These decisions were made to keep the project **educational, reusable, and easy to refactor** into a real back-end environment.

---

## Use Case

This project serves as:

- A **learning exercise** for logical reasoning and cart mechanics
- A **base structure** for future shopping cart systems
- A reference project for migrating logic to a back-end stack

---

## Otávio Faria