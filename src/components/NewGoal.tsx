import {FC, FormEvent, useRef} from 'react';
import {type CourseGoal} from "../App.tsx";

type Props = {
    onAddGoal: (goal: CourseGoal['title'], summary: CourseGoal['description']) => void;
}
const NewGoal: FC<Props> = ({onAddGoal}) => {
    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!goalRef.current || !summaryRef.current) return;

        const enteredGoal = goalRef.current.value;
        const enteredSummary = summaryRef.current.value;
        event.currentTarget.reset();

        onAddGoal(enteredGoal, enteredSummary);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='goal'>Your goal</label>
                <input id='goal' type='text' ref={goalRef}/>
            </p>
            <p>
                <label htmlFor='summary'>Short summary</label>
                <input id='summary' type='text' ref={summaryRef}/>
            </p>
            <button>Add Goal</button>
        </form>
    );
};

export default NewGoal;