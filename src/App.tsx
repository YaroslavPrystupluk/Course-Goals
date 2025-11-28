import goalsImage from './assets/goals.jpg'
import Header from "./components/Header.tsx";
import {useState} from "react";
import CourseGoalsList from "./components/CourseGoalsList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
    id: number;
    title: string;
    description: string;
}
export default function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    const handleCourseGoalAdd = (goal: CourseGoal['title'], summary: CourseGoal['description']) => {
        setGoals((prevState) => {
            const newGoal: CourseGoal = {
                id: Number(Math.random()),
                title: goal,
                description: summary,
            }
            return [...prevState, newGoal]
        });
    }

    const handleGoalDelete = (id: CourseGoal['id']) => {
        setGoals((prevState => prevState.filter((goal) => goal.id !== id)))
    }

    return <main>
        <Header image={{src: goalsImage, alt: 'logo'}}>Your Course Goals</Header>
        <NewGoal onAddGoal={handleCourseGoalAdd}/>
        <CourseGoalsList goals={goals} onDeleteGoal={handleGoalDelete}/>
    </main>
}
