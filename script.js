// script.js

// Sample data for projects (replace this with your actual project data)
const projects = [
    { name: "Hostel Management System", technology: "HTML, CSS, JavaScript, Bootstrap, PHP, SQL", description: "The Hostel Management System is a web application facilitating students and wardens in hostel management. It is built using HTML, CSS, JavaScript, Bootstrap, and PHP for backend connectivity. SQL is used as the database." },
    { name: "Clothify", technology: "Flutter framework", description: "Clothify is a mobile application developed using the Flutter framework. It aims to simplify and streamline the process of making clothes for tailors and regular users. The application provides convenient features for all users involved in the clothing creation process." },
    { name: "Parallel Matrix Multiplication", technology: "OpenMP, MPI", description: "Perform parallel Matrix Multiplication to ensure that our computing resources are used in an optimal way. The tasks will break down into smaller tasks and will be performed on different threads." },
    // Add more projects as needed
];

// Function to filter projects based on input
function filterProjects() {
    const filterInput = document.getElementById('filter').value.toLowerCase();
    const projectList = document.getElementById('project-list');

    // Clear the previous list
    projectList.innerHTML = '';

    // Filter and display projects
    projects.forEach(project => {
        if (project.technology.toLowerCase().includes(filterInput) || project.name.toLowerCase().includes(filterInput) || project.description.toLowerCase().includes(filterInput)) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h2>${project.name}</h2>
                <p><strong>Description:</strong> ${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technology}</p>
            `;
            projectList.appendChild(listItem);
        }
    });
}

// Call filterProjects initially to show all projects
filterProjects();
