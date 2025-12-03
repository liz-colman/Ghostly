document.addEventListener('DOMContentLoaded', () => {
    // LÓGICA DE ACORDEÓN PARA FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            
            faqQuestions.forEach(otherQuestion => {
                
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                
                    otherQuestion.nextElementSibling.classList.remove('active');
                }
            });

        
            question.classList.toggle('active');
            question.nextElementSibling.classList.toggle('active');
        });
    });

    // --- funciones del carrito 


    // vALIDACION DE FORMULARIO DE CONTACTO

    const formularioContacto = document.querySelector('.formulario');
    const contenedorMensajes = document.getElementById('mensajes-validacion');


    function validarEmail(email) {
        const re= /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return re.test(String(email).toLowerCase());
    }

    formularioContacto.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Limpiar mensajes anteriores
        contenedorMensajes.innerHTML = ''; 

        // 2. Obtener valores
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        let errores = [];

        // 3. Validaciones y Mensajes
        if (nombre === '') {
            errores.push('El campo Nombre es obligatorio.');
        }

        if (email === '') {
            errores.push('El campo Email es obligatorio.');
        } else if (!validarEmail(email)) {
            // Validación de formato
            errores.push('Formato de Email inválido. Debe ser nombre@dominio.com.');
        }
        
        // Validación (Mensaje)
        if (mensaje.length < 10) {
            errores.push('El Mensaje debe contener al menos 10 caracteres.');
        }

        // 4. Mostrar el resultado
        if (errores.length === 0) {
            // Éxito: Mostrar mensaje de envío exitoso
            contenedorMensajes.innerHTML = `
                <div class="mensaje-exito">¡Envío exitoso! Gracias por contactarnos.</div>
            `;
            formularioContacto.reset(); // Limpia los campos
        } else {
            // Error: Mostrar la sección de mensajes de validación
            let listaErrores = '<ul>';
            errores.forEach(error => {
                listaErrores += `<li class="mensaje-error">${error}</li>`;
            });
            listaErrores += '</ul>';
            
            contenedorMensajes.innerHTML = listaErrores;
        }
    });



});