import {FC} from 'react';
import {type CourseGoal as Goal} from "../App.tsx";
import CourseGoal from "./CourseGoal.tsx";

type Props = {
    goals: Goal[];
    onDeleteGoal: (id: Goal['id']) => void;
}
const CourseGoalsList: FC<Props> = ({goals, onDeleteGoal}) => {
    return (
        <ul>
            {goals.map(goal =>
            <li key={goal.id}>
                <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                    <p>{goal.description}</p>
                </CourseGoal>
            </li>
            )}

        </ul>
    );
};

export default CourseGoalsList;