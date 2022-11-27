import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';
import { AppRoute } from "./const";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} />
                <Route index element={<ProjectPage />} />
                <Route path={AppRoute.Task} element={<TaskPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
