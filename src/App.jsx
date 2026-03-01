import "./app.css";
import TaskForm from "./components/TaskForm/task-form.jsx";
import TaskColumn from "./components/TaskColumn/task-column.jsx";
const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="Ready for Development" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready for Testing" />
        <TaskColumn title="Closed" />
      </main>
    </div>
  );
};

export default App;
