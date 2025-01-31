import { teamMember } from '../data/TeamMembers.js'; // Ensure the correct path

const renderTeamMembers = () => {
    const container = document.getElementById('container'); // Get the div with id 'container'
    container.innerHTML = ''; // Clear existing content

    teamMember.forEach(member => {
        const card = document.createElement('div');
        card.className = "col-12 col-sm-6 col-md-3 card border border-top border-dark rounded-lg mx-3 mb-3";
        card.id = `member-${member.id}`;

        card.innerHTML = `
            <img class="card-img-top" src="${member.img}" alt="Profile picture of ${member.fullName}">
            <div class="card-body">
                <h5 class="card-title">${member.fullName}</h5>
                <p class="designation">${member.designation || 'No Designation'}</p>
                <p class="card-text">${member.describtion || 'No Description'}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        `;

        container.appendChild(card); // Append card to container
    });
};

document.addEventListener("DOMContentLoaded", renderTeamMembers);
