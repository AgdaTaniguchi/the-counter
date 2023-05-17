import moment from "moment/moment";
import { useEffect, useState } from "react";

function App() {
    const [tempoDiferenca, setTempoDiferenca] = useState({});

    useEffect(() => {
        let intervalo = null;

        intervalo = setInterval(() => {
            setTempoDiferenca(moment().diff(moment("09-24-2004")));
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <main className="w-full h-screen flex justify-center items-center">
            <div className="bg-gray-900 w-4/5 max-w-5xl grid grid-cols-1 sm:grid-cols-6 px-10 py-8 rounded-lg gap-y-6">
                <div className="box-time">
                    <h1>{moment.duration(tempoDiferenca).years()}</h1>
                    <span>anos</span>
                </div>
                <div className="box-time">
                    <h1>{moment.duration(tempoDiferenca).months()}</h1>
                    <span>meses</span>
                </div>
                <div className="box-time sm:border-r border-gray-700">
                    <h1>{moment.duration(tempoDiferenca).days()}</h1>
                    <span>dias</span>
                </div>
                <div className="box-time">
                    <h1>{moment.duration(tempoDiferenca).hours()}</h1>
                    <span>horas</span>
                </div>
                <div className="box-time">
                    <h1>{moment.duration(tempoDiferenca).minutes()}</h1>
                    <span>minutos</span>
                </div>
                <div className="box-time">
                    <h1>{moment.duration(tempoDiferenca).seconds()}</h1>
                    <span>segundos</span>
                </div>
            </div>
        </main>
    );
}

export default App
