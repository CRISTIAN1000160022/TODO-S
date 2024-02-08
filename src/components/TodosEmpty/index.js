/*eslint-disable no-unused-vars*/
import React, { useEffect } from "react";
import Swal from "sweetalert2";

function TodosEmpty() {
    useEffect(() => {
        Swal.fire({
            text: "No hay tareas pendientes",
            icon: "info",
            timer: 5000,
        });
    }, []);

    return null;
}

export { TodosEmpty };
