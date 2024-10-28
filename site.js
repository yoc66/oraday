function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    // Mostrar sección
    document.getElementById(sectionId).style.display = 'block';
}

// Envío del formulario de tarea
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tarea añadida');
    this.reset(); // Limpiar el formulario
});
