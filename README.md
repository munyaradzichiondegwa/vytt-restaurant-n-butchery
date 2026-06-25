# VYTT – Vittony Holdings Restaurant & Events Management Platform

A full-stack restaurant, catering, venue booking, and event management application developed for **Vittony Holdings**.

The platform provides customers with a modern digital experience for browsing menus, placing food orders, booking venues, reserving tables, and contacting the business through a responsive web interface.

---

## Table of Contents

* [Overview](#overview)
* [Key Features](#key-features)
* [Technology Stack](#technology-stack)
* [Project Structure](#project-structure)
* [Menu Categories](#menu-categories)
* [Database Models](#database-models)
* [Enhanced User Interface](#enhanced-user-interface)
* [Menu System Enhancements](#menu-system-enhancements)
* [Booking System Enhancements](#booking-system-enhancements)
* [Contact Page Enhancements](#contact-page-enhancements)
* [Responsive Design](#responsive-design)
* [Installation](#installation)
* [Database Seeding](#database-seeding)
* [Updated Files](#updated-files)
* [Unchanged Files](#unchanged-files)
* [Future Enhancements](#future-enhancements)
* [Version Information](#version-information)

---

# Overview

VYTT is designed to digitize restaurant operations and customer interactions for Vittony Holdings.

The application enables customers to:

* Browse restaurant menus
* Search menu items
* Add items to a shopping cart
* Place food orders
* Book conference facilities
* Reserve restaurant tables
* Request outdoor catering services
* Contact the business through multiple channels

The system uses a modern React frontend connected to a Node.js/Express backend with MongoDB data storage.

---

# Key Features

## Digital Menu

* Category-based menu browsing
* Menu item search
* Featured menu items
* Dynamic menu loading
* Responsive card layouts
* Category filtering

## Shopping Cart

* Add items to cart
* Remove items from cart
* Quantity management
* Dynamic cart totals
* Persistent cart state

## Online Ordering

* Customer order creation
* Order summary review
* Customer information capture
* Database order storage

## Venue & Event Booking

* Conference room bookings
* Outdoor catering bookings
* Table reservations
* Event scheduling
* Customer requests and notes

## Contact Services

* Contact form
* WhatsApp integration
* Direct call support
* Location and map access

---

# Technology Stack

## Frontend

* React
* React Router
* Context API
* CSS3

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Development Tools

* npm
* Git
* GitHub

---

# Project Structure

```text
vytt/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── api.js
│       └── App.js
│
└── README.md
```

---

# Menu Categories

The application supports both legacy categories and the complete Vittony Holdings menu structure.

## Legacy Categories

* Breakfast
* Lunch
* Dinner
* Drinks
* Desserts
* Snacks
* Burgers
* Pizza

## Vittony Holdings Categories

* Traditional Meals
* Beef Dishes
* Chicken Dishes
* Pork Dishes
* Fish Dishes
* Vegetarian Meals
* Rice Specials
* Sadza Meals
* Fast Foods
* Salads
* Soups
* Hot Beverages
* Cold Beverages
* Cocktails
* Mocktails
* Special Platters

---

# Database Models

## Menu Model

Stores:

* Menu item name
* Description
* Category
* Price
* Image URL
* Featured status

## Order Model

Stores:

* Customer information
* Ordered items
* Quantities
* Total amount
* Order status

## Booking Model

Stores:

* Customer details
* Booking type
* Event date
* Number of guests
* Special requests

---

# Enhanced User Interface

The application branding was upgraded from the original red-and-black theme to a Vittony Holdings green identity.

## Updated Color Palette

```css
Primary Green:   #0d4f29
Secondary Green: #166016
Accent Green:    #1a6b3c
Mint Accent:     #7de3a0
```

### Benefits

* Stronger brand identity
* Modern hospitality appearance
* Improved visual consistency
* Enhanced user experience

---

# Navigation Improvements

## Navbar Enhancements

### Changes

* Forest green gradient navigation bar
* Mint green logo styling
* Mint cart badge
* Green hover glow effects
* Green mobile navigation menu

### Benefits

* Better branding
* Improved visibility
* Enhanced mobile navigation

---

# Menu System Enhancements

## Expanded Menu Database

### Previous Version

* 37 generic menu items

### Current Version

* 91 real Vittony Holdings menu items
* Real restaurant categories
* Featured signature dishes

---

## Featured Menu Carousel

A new slideshow component was added to the menu page.

### Features

* Automatic rotation every 10 seconds
* Previous and next controls
* Dot indicators
* Featured meal promotion
* Timer reset after manual interaction

### Benefits

* Highlights signature meals
* Increases customer engagement
* Improves menu presentation

---

## Menu Card Enhancements

### Improvements

* Category emoji support
* Better visual identification
* Improved item presentation

### Variable Pricing Support

Items such as **Tribes Treat** display:

```text
Price varies
```

instead of:

```text
$0.00
```

---

# Homepage Enhancements

## Hero Section

Updated with:

* Mint green title accents
* Improved branding
* Enhanced visual hierarchy

## Featured Sections

Enhanced:

* Featured dishes
* Specials section
* Services previews

## Services Section

Updated with:

* Forest green gradient background
* Improved hover effects
* Enhanced visual appeal

## Contact Strip

Updated from red to branded green gradient styling.

---

# Booking System Enhancements

## Interactive Venue Cards

Three animated venue cards were added above the booking form.

### Conference Room

Suitable for:

* Meetings
* Workshops
* Corporate events

### Outdoor Catering

Suitable for:

* Weddings
* Community events
* Corporate functions

### Table Reservation

Suitable for:

* Restaurant dining
* Family gatherings
* Business meals

---

## Venue Card Features

Each card includes:

* Slide-up entrance animation
* Staggered animation timing
* Image upload support
* Automatic event type selection
* Smooth scroll to booking form

### Booking Workflow

1. User selects a venue card.
2. Event type is automatically selected.
3. Page scrolls to booking form.
4. User completes booking details.
5. Booking request is submitted.

---

# Contact Page Enhancements

## Hero Section

Updated with:

* Forest green gradient background
* Enhanced presentation
* Improved visual consistency

## Contact Cards

Added:

* Green hover indicators
* Better responsiveness
* Improved readability

## Action Buttons

Green gradient buttons for:

* Call
* WhatsApp
* Maps

## Background Support

Added support for embossed hero background imagery.

---

# Responsive Design

The application is fully responsive across:

* Mobile phones
* Tablets
* Laptops
* Desktop computers

### Responsive Features

* Mobile navigation
* Flexible card layouts
* Responsive menu display
* Adaptive booking forms
* Mobile-friendly contact page
* Responsive carousel

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd vytt
```

---

## Backend Setup

```bash
cd backend

npm install
```

### Import Menu Data

```bash
npm run data:import
```

### Start Backend

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend

npm install
npm start
```

---

# Database Seeding

Whenever menu categories or menu data are updated:

```bash
cd backend

npm run data:import
```

This command imports all Vittony Holdings menu items into MongoDB.

---

# Updated Files

## Backend

```text
backend/models/menuModel.js
backend/data/menuData.js
```

## Frontend

```text
frontend/src/components/Navbar.css
frontend/src/components/MenuCard.js
frontend/src/pages/MenuPage.js
frontend/src/pages/MenuPage.css
frontend/src/pages/HomePage.css
frontend/src/pages/BookingPage.js
frontend/src/pages/BookingPage.css
frontend/src/pages/ContactPage.css
```

---

# Unchanged Files

```text
frontend/src/App.js
frontend/src/api.js
frontend/src/context/CartContext.js
frontend/src/index.css
frontend/src/components/Footer.js

backend/server.js
backend/routes/*
backend/models/orderModel.js
backend/models/bookingModel.js
backend/data/seeder.js
```

---

# Future Enhancements

Potential future developments include:

* User authentication
* Customer accounts
* Online payment integration
* Order tracking
* Admin dashboard
* Inventory management
* Email notifications
* SMS notifications
* Loyalty rewards system
* Analytics dashboard
* Multi-branch management

---

# Version Information

**Application:** VYTT – Vittony Holdings Platform

**Version:** Enhanced Release

**Status:** Production Ready

**Last Updated:** June 2026

---

## Authors

Developed for **Vittony Holdings**.

Built using React, Node.js, Express, and MongoDB.
