import "./app.css";
import TaskForm from "./components/TaskForm/task-form.jsx";
const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <section className="task_column"> Section 1 </section>
        <section className="task_column"> Section 2 </section>
        <section className="task_column"> Section 3 </section>
        <section className="task_column"> Section 4 </section>
      </main>
    </div>
  );
};

export default App;
