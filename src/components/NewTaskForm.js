import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Filter tasks based on the selected category
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <h1>Task Manager</h1>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleSelectCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />

      <h2>Tasks</h2>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {task.text} - {task.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
