// For future interactivity if needed
console.log('Portfolio Loaded');

document.getElementById('toggleSkills').addEventListener('click', function() {
    hideAllSections(); // Hide other sections
    document.getElementById('skills').style.display = 'block'; // Show skills section
});

document.getElementById('toggleSoftSkills').addEventListener('click', function() {
    hideAllSections(); // Hide other sections
    document.getElementById('softSkills').style.display = 'block'; // Show soft skills section
});

document.getElementById('toggleEducation').addEventListener('click', function() {
    hideAllSections(); // Hide other sections
    document.getElementById('education').style.display = 'block'; // Show education section
});

function hideAllSections() {
    document.getElementById('skills').style.display = 'none';
    document.getElementById('softSkills').style.display = 'none';
    document.getElementById('education').style.display = 'none';
}
