import {type FC, type ReactNode} from 'react';
import {type CourseGoal as Goal} from "../App.tsx";
import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";

type Props = {
    goals: Goal[];
    onDeleteGoal: (id: Goal['id']) => void;
}
const CourseGoalsList: FC<Props> = ({goals, onDeleteGoal}) => {
    if(goals.length === 0){
        return <InfoBox mode='hint'>
            You have no course goals yet. Start adding some!
        </InfoBox>
    }

    let warningBox: ReactNode;

    if(goals.length >= 2){
         warningBox = <InfoBox mode='warning' severity='low'>
            You're collecting a lot of goals. Don't put too much on your plate!
        </InfoBox>
    }

    return (
        <>
            {warningBox}
        <ul>
            {goals.map(goal =>
            <li key={goal.id}>
                <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                    <p>{goal.description}</p>
                </CourseGoal>
            </li>
            )}

        </ul>
        </>
    );
};

export default CourseGoalsList;