# EasyTech Durham - Full Stack Web Application

## Overview

This is a full-stack web application for EasyTech Durham, a tech support service business targeting seniors and families in the Durham Region. The application features a modern React frontend with a professional service-oriented design and an Express.js backend with PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for runtime type checking
- **Session Management**: In-memory storage with fallback to database sessions

### Design System
- **Color Palette**: Warm, professional colors with primary blues, accent teal, and contrast yellow
- **Typography**: Nunito and Poppins font families for friendly, readable text
- **Theme**: Light mode with CSS custom properties for consistent theming
- **Components**: Comprehensive UI component library with consistent styling

## Key Components

### Frontend Pages
- **Home**: Hero section, service overview, testimonials, and company information
- **Services**: Detailed breakdown of core services (smartphone help, Wi-Fi/TV setup, tech cleanup, scam recovery)
- **Pricing**: Service pricing with clear breakdown and travel fee information
- **Contact**: Contact form with business information and direct contact options

### Backend Services
- **Contact Management**: Handles customer inquiries through contact form submissions
- **Newsletter Management**: Manages email subscriptions with duplicate prevention
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)

### Database Schema
- **Contacts Table**: Stores customer inquiries with name, email, phone, message, and timestamp
- **Newsletters Table**: Stores email subscriptions with unique email constraint and timestamp

## Data Flow

1. **Frontend Form Submission**: User fills out contact or newsletter forms
2. **Client Validation**: Zod schemas validate data before submission
3. **API Request**: TanStack Query manages HTTP requests to backend endpoints
4. **Server Validation**: Backend validates incoming data using shared Zod schemas
5. **Data Persistence**: Storage layer handles data persistence (currently in-memory)
6. **Response Handling**: Success/error responses trigger appropriate UI feedback

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database connection for PostgreSQL
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm & drizzle-kit**: Database ORM and migration tools
- **zod**: Runtime type validation and schema definition
- **react-hook-form**: Form state management and validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives for complex components
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library with consistent design
- **class-variance-authority**: Utility for managing component variants

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development
- **Frontend**: Vite development server with hot module replacement
- **Backend**: tsx for running TypeScript directly in development
- **Environment**: Separate client and server with shared schema directory

### Production
- **Build Process**: 
  - Frontend built with Vite to static assets
  - Backend compiled with esbuild to single JavaScript file
- **Deployment**: Node.js server serving static frontend and API endpoints
- **Database**: PostgreSQL with Drizzle migrations for schema management

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Sessions**: Uses connect-pg-simple for PostgreSQL-backed sessions in production
- **Static Assets**: Frontend assets served from `/dist/public` directory

The application is designed for easy deployment to platforms like Replit, Vercel, or traditional hosting providers with PostgreSQL support.