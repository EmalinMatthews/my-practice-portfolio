import DateTime from "../components/DateTime";
import Header from "../components/Header";
import ToDo from "../components/ToDo";



export const ToDoPage = () => {
    return (
        <>
        <Header/>
        <ToDo/> 
        <div className="text-center text-6xl mb-8" >
            <DateTime/>
            <h1 className="text-center text-8xl mb-8" >Have A Great Day!</h1>
        </div>
        </>
    );
}