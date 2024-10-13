export interface Task {
    id?: string;
    title: string;
    description?: string;
    assignee: string;
    priority: "Low" | "Medium" | "High";
    due_date: Date;
    status: "To Do" | "In Progress" | "Completed";
  }

