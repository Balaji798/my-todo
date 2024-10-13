
import * as Yup from "yup";

export const TaskSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string(),
    assignee: Yup.string().required("Assignee is required"),
    priority: Yup.string()
      .oneOf(["Low", "Medium", "High"])
      .required("Priority is required"),
    status: Yup.string()
      .oneOf(["To Do", "In Progress", "Completed"])
      .required("Status is required"),
    due_date: Yup.date().required("Due Date is required"),
  });