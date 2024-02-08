/*eslint-disable no-unused-vars*/
import React, { useEffect } from "react";
import Swal from "sweetalert2";

function TodosCompleted() {
    useEffect(() => {
        Swal.fire({
            text: "¡Felicidades! Has completado todas tus tareas. 🎉",
            icon: "success",
            timer: 5000,
        });
    }, []);

    return null;
}

export { TodosCompleted };
