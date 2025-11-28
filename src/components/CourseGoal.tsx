import {FC, type PropsWithChildren} from 'react';
import {type CourseGoal} from "../App.tsx";


type Props = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: CourseGoal['id']) => void;
}>
const CourseGoal: FC<Props> = ({id, onDelete, title, children}) => {
    return (
        <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
            <button onClick={() => {onDelete(id)}}>Delete</button>
        </article>
    );
};

export default CourseGoal;