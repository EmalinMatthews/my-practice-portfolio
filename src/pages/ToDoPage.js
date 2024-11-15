import DateTime from "../components/DateTime";
import ToDo from "../components/ToDo";



export const ToDoPage = () => {
    return (
        <>
        <ToDo/> 
        <div className="text-center text-6xl mb-8" >
            <DateTime/>
            <h1 className="text-center text-8xl mb-8" >Have A Great Day!</h1>
        </div>
        </>
    );
}