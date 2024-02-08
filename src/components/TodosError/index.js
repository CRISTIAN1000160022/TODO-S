/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Swal from "sweetalert2";

function TodosError() {
    useEffect(() => {
        Swal.fire({
            text: "Ha ocurrido un error al cargar tus pendiente",
            icon: "info",
            timer: 5000,
        });
    }, []);

    return null;
}

export { TodosError };
