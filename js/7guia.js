// Seleccionamos los elementos del DOM necesarios para trabajar con el formulario,
// el campo de entrada de texto y la lista donde se mostrarán las tareas.
const taskForm = document.getElementById('task-form'); // Formulario donde se crean nuevas tareas.
const taskInput = document.getElementById('task-input'); // Campo de texto para ingresar el título de la tarea.
const taskList = document.getElementById('task-list'); // Lista donde se mostrarán las tareas.

// Función para cargar las tareas iniciales desde la API.
// Se hace una solicitud GET a la URL con un límite de 10 tareas.
function loadTasks() {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10') // Hacemos la solicitud GET a la API.
    .then(response => response.json()) // Convertimos la respuesta en formato JSON.
    .then(tasks => {
      // Iteramos sobre las tareas recibidas y las agregamos a la lista usando la función addTaskToList.
      tasks.forEach(task => addTaskToList(task));
    })
    .catch(error => console.error('Error loading tasks:', error)); // Manejamos posibles errores en la solicitud.
}

// Función para agregar una tarea a la lista del DOM.
// Recibe un objeto "task" que contiene el título de la tarea y su ID.
function addTaskToList(task) {
  // Creamos un elemento <li> que representará la tarea.
  const li = document.createElement('li');
  
  // Asignamos el contenido del <li>, que incluye únicamente el título de la tarea.
  li.textContent = task.title;

  // Agregamos un evento "click" al elemento <li> para que, al hacer clic,
  // la tarea se elimine tanto del DOM como de la API.
  li.addEventListener('click', () => {
    deleteTask(task.id, li); // Llamamos a la función deleteTask pasando el ID y el elemento <li>.
  });

  // Finalmente, agregamos el elemento <li> a la lista de tareas.
  taskList.appendChild(li);
}

// Evento asociado al formulario para crear nuevas tareas.
// Se ejecuta cuando el usuario presiona el botón "Enviar" en el formulario.
taskForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitamos que la página se recargue al enviar el formulario.

  // Creamos un nuevo objeto tarea con el título ingresado por el usuario
  // y marcamos que no está completada completed: false.
  const newTask = {
    title: taskInput.value, // Usamos el valor del campo de entrada.
    completed: false // Las nuevas tareas no están completadas por defecto.
  };

  // Realizamos una solicitud POST para enviar la nueva tarea a la API.
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST', // Indicamos que es una solicitud POST.
    headers: {
      'Content-Type': 'application/json' // Especificamos que los datos enviados son JSON.
    },
    body: JSON.stringify(newTask) // Convertimos el objeto tarea a una cadena JSON.
  })
    .then(response => response.json()) // Convertimos la respuesta en JSON.
    .then(task => {
      // Una vez que la tarea se crea exitosamente en la API, la agregamos al DOM.
      addTaskToList(task); // Llamamos a la función para agregar la tarea.
      taskInput.value = ''; // Limpiamos el campo de entrada después de enviar la tarea.
    })
    .catch(error => console.error('Error creating task:', error)); // Manejamos posibles errores.
});

// Función para eliminar una tarea tanto de la lista como de la API.
// Recibe el ID de la tarea y el elemento del DOM que la representa.
function deleteTask(id, element) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { // Realizamos una solicitud DELETE a la API .
    method: 'DELETE' // Indicamos que es una solicitud DELETE.
  })
    .then(() => {
      // Si la eliminación es exitosa, quitamos el elemento <li> del DOM.
      element.remove();
    })
    .catch(error => console.error('Error deleting task:', error)); // Manejamos posibles errores.
}

// Llamamos a la función loadTasks para cargar las tareas iniciales
// cuando se carga la página.
loadTasks();
