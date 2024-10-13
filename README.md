# Task Management Dashboard

## Overview

This project is a **Task Management Dashboard** built with **React.js**, **Supabase**, **React Hook Form**, and **Yup** for form validation. The application allows users to create, edit, and view tasks for a specific project. It also includes filtering capabilities and supports both client-side pagination. 

### Key Features:
1. **Project Dashboard Page**: Lists all tasks for a specific project.
   - Displays the following task details: Title, Status, Assignee, Priority, and Due Date.
   - Allows filtering tasks by status (To Do, In Progress, Completed).
   - Implements client-side pagination or infinite scroll for the task list.
  
2. **Create/Edit Task Modal**: 
   - Users can create a new task or edit an existing one through a modal.
   - The task form includes Title, Description, Assignee, Priority, Due Date, and Status fields.
   - Form validation is done using the Yup library.
   - Real-time task updates without page reloading.

## Tech Stack:
- **React**: SSG for performance optimization.
- **Supabase**: Handles backend functionality, task data storage, and fetching.
- **React Hook Form**: Efficiently manages form state and validation.
- **Yup**: Ensures form validation with meaningful feedback.
- **TypeScript**: Ensures strong typing across the app, making it more robust and maintainable.

## Features Implemented
1. **Project Dashboard Page**:
   - Lists tasks with their respective details: Title, Status, Assignee, Priority, and Due Date.
   - Provides filtering functionality by status (e.g., To Do, In Progress, Completed).
   - Implements pagination to efficiently load large datasets.
   
2. **Create/Edit Task Modal**:
   - Allows users to create new tasks or edit existing ones via a modal form.
   - The form includes proper validation for required fields (Title, Assignee, Priority, Status, Due Date).
   - Real-time task updates without needing to refresh the page after task creation or editing.
   
3. **Form Validation**: The form is validated using **Yup**, and fields like Title, Assignee, Priority, Status, and Due Date are required. Errors are handled gracefully and displayed to the user.

4. **Extra Features**: I have added task delete feature in the project

## Project Structure:
```
.
├── components
│   ├── TaskFilter.tsx           # Filters tasks by status
│   ├── TaskItem.tsx             # Task item component
│   ├── TaskModal.tsx            # Modal component for task creation/editing
├── pages
│   ├──Home.tsx                # Home page (Project Dashboard)
│   └── home.css                      # API routes (if needed)
├── types
│   └── task.ts                  # TypeScript types/interfaces
├── utils
│   └── validation.ts            # Yup validation schema for forms
├── styles                       # CSS/SCSS styles
│
└── README.md                    # Project documentation
```

## Installation & Setup

### Prerequisites:
- **Node.js**: Make sure you have Node.js installed on your system.
- **Supabase Account**: You will need a Supabase account with a database set up for the task management system.
- **Environment Variables**: Configure your `.env.local` file to include the Supabase keys.

### Steps to Run Locally:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Balaji798/my-todo.git
   cd task-management-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Setup Environment Variables**:
   Create a `.env.local` file in the root of your project and add the following:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

   The project will be running at `http://localhost:5173/`.

5. **Set up Supabase Database**:
   Create a `tasks` table in your Supabase project with the following fields:
   - `id` (Primary key, UUID)
   - `title` (Text)
   - `description` (Text, optional)
   - `assignee` (Text)
   - `priority` (Enum: Low, Medium, High)
   - `status` (Enum: To Do, In Progress, Completed)
   - `due_date` (Date)

### Additional Features & Assumptions:
- **Client-Side Pagination**: Added basic pagination for better performance with large datasets.
- **Form Validation**: Implemented validation using Yup for required fields.
- **Optimized for SSR/SSG**: Uses Next.js's server-side capabilities to pre-render pages and improve performance.
  
## How to Use:
1. **Task Dashboard**: The main page displays all tasks. You can filter tasks by their status.
2. **Add/Edit Tasks**: Click on "Add New Task" to open the modal for creating a new task or edit an existing one.
3. **Real-Time Updates**: Any task updates (new or edited) are reflected in real-time without the need for a page refresh.

## Conclusion:
This project demonstrates a clean and functional task management system with a focus on real-time updates and task filtering. It adheres to best practices in React, Next.js, and TypeScript, ensuring modularity and maintainability.

---

Feel free to contribute or suggest improvements by creating issues or submitting PRs!

