const roles = ["FRONTEND DEVELOPER","KEYBOARDIST"];
let currentRoleIndex = 0;
let charIndex = 0;
const typingSpeed = 200; // Speed of typing (in ms)
const pauseBetweenRoles = 2000; // Pause before switching roles (in ms)

const roleElement = document.getElementById("role");

function typeRole() {
    const currentRole = roles[currentRoleIndex];
    if (charIndex < currentRole.length) {
        roleElement.textContent += currentRole[charIndex];
        charIndex++;
        setTimeout(typeRole, typingSpeed);
    } else {
        setTimeout(deleteRole, pauseBetweenRoles); // Wait and then delete
    }
}

function deleteRole() {
    const currentRole = roles[currentRoleIndex];
    if (charIndex > 0) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteRole, typingSpeed);
    } else {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Switch to next role
        setTimeout(typeRole, typingSpeed);
    }
}

// Start the typing effect
typeRole();
window.onload = function() {
    // Get all the anchor elements
    const links = document.querySelectorAll('a');
    
    // Loop through each link and check if the href matches the current page
    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
};
