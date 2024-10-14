import { Input, Select } from "antd";
import { Control, FieldErrors, Controller } from "react-hook-form";
import { Task } from "../types/Task";
const { TextArea } = Input;

interface TaskModalProps {
  errors: FieldErrors<Task>; // FieldErrors for form validation
  control: Control<Task>; // Control from react-hook-form
}
const TaskModal: React.FC<TaskModalProps> = ({ errors, control }) => {
  const options = [
    { value: "Jhon", label: "Jhon" },
    { value: "Same", label: "Same" },
    { value: "Ria", label: "Ria" },
    { value: "Jason", label: "Jason" },
    { value: "Valt", label: "Valt" },
  ];
  return (
    <div>
      <div>
        <label>Title</label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              {...field} // Connect Input with react-hook-form
              placeholder="Enter Task Title"
            />
          )}
        />
        <p style={{ color: "#000" }}>{errors.title?.message}</p>
      </div>

      <div>
        <label>Description</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextArea
            {...field}
            value={field.value ?? ""} // Convert null or undefined to an empty string
            placeholder="Enter Task Description"
            />
          )}
        />
        <p style={{ color: "#000" }}>{errors.description?.message}</p>
      </div>

      <div>
        <label>Assignee</label>
        <Controller
          name="assignee"
          control={control}
          render={({ field }) => (
            <Select
              {...field} // Connect Select with react-hook-form
              placeholder="Select an assignee"
              options={options}
              style={{ width: "100%" }}
            />
          )}
        />
        <p style={{ color: "#000" }}>{errors.assignee?.message}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "200px",
            width: "100%",
            marginLeft: "5px",
          }}
        >
          <label>Priority</label>
          <Controller
            name="priority"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                style={{ maxWidth: "200px", width: "100%" }}
                options={[
                  { value: "Low", label: "Low" },
                  { value: "Medium", label: "Medium" },
                  { value: "High", label: "High" },
                ]}
              />
            )}
          />

          <p style={{ color: "#000" }}>{errors.priority?.message}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "200px",
            width: "100%",
          }}
        >
          <label>Status</label>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                style={{ maxWidth: "200px", width: "100%" }}
                options={[
                  { value: "To Do", label: "To Do" },
                  { value: "In Progress", label: "In Progress" },
                  { value: "Completed", label: "Completed" },
                ]}
              />
            )}
          />
          <p style={{ color: "#000" }}>{errors.status?.message}</p>
        </div>
      </div>

      <div>
        <label>Due Date</label>
        <Controller
          name="due_date"
          control={control}
          render={({ field }) => (
            <Input
              type="date"
              {...field} // Connect Input with react-hook-form
              value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
            />
          )}
        />
        <p style={{ color: "#000" }}>{errors.due_date?.message}</p>
      </div>
    </div>
  );
};

export default TaskModal;
