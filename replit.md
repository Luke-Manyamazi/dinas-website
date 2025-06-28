# Sunshine Preschool Website

## Overview

This is a modern, responsive website for Sunshine Preschool built with React, TypeScript, and Tailwind CSS. The application features a single-page design with smooth scrolling navigation, contact form functionality, and a clean, child-friendly interface. The project uses a full-stack architecture with Express.js backend and PostgreSQL database integration via Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submissions
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development**: Hot reload with Vite integration in development mode

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Fallback Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
- **Header**: Sticky navigation with smooth scrolling
- **Hero**: Landing section with call-to-action buttons
- **About**: Information about the preschool's mission and features
- **Programs**: Display of different age-based programs
- **Gallery**: Image showcase of activities and facilities
- **Contact**: Form for inquiries with validation
- **Footer**: Links and additional information

### UI Component System
- **Design System**: shadcn/ui components built on Radix UI primitives
- **Theme**: Custom color palette optimized for preschool branding
- **Responsive Design**: Mobile-first approach with breakpoint considerations
- **Accessibility**: ARIA-compliant components with keyboard navigation

### Backend Services
- **Contact API**: Handles form submissions with validation
- **Storage Interface**: Abstracted storage layer supporting multiple backends
- **Error Handling**: Centralized error management with proper HTTP status codes

## Data Flow

1. **User Interaction**: Users interact with the single-page application
2. **Form Submission**: Contact form data is validated client-side using Zod schemas
3. **API Request**: TanStack Query manages the HTTP request to the backend
4. **Server Processing**: Express.js validates and processes the contact message
5. **Database Storage**: Drizzle ORM stores the message in PostgreSQL
6. **Response Handling**: Success/error states are displayed via toast notifications
7. **State Updates**: React Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon database
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Integration between Drizzle and Zod for validation
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Zod resolver for form validation
- **zod**: Schema validation library

### UI and Styling
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **clsx**: Conditional class name utility
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express.js backend
- **Hot Reload**: Full-stack hot reload with Vite middleware
- **Database**: Uses in-memory storage as fallback when DATABASE_URL is not set
- **Environment**: NODE_ENV=development with development-specific logging

### Production Build
- **Frontend Build**: Vite builds optimized static assets to `dist/public`
- **Backend Build**: esbuild bundles Express.js server to `dist/index.js`
- **Database**: Requires PostgreSQL connection via DATABASE_URL environment variable
- **Deployment**: Single executable Node.js application serving both frontend and API

### Configuration Requirements
- **DATABASE_URL**: PostgreSQL connection string for production
- **Environment Variables**: Configured for Neon serverless database
- **Static Assets**: Frontend served from Express.js in production

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```