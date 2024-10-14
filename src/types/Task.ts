export interface Task {
    id?: number;
    title: string;
    description?: string | null;
    assignee: string;
    priority: "Low" | "Medium" | "High";
    due_date: Date;
    status: "To Do" | "In Progress" | "Completed";
  }

