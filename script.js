document.addEventListener('DOMContentLoaded', () => {

    const alertButton = document.getElementById('alert-btn');

    if (alertButton) {
        alertButton.addEventListener('click', () => {
            alert("Thank you for visiting my portfolio! Feel free to contact me via LinkedIn.");
        });
    }

    const emailLink = document.getElementById('email-link');
    
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            e.preventDefault(); // Stops the page from jumping to top
            
            const email = "sanjay07swecha@gmail.com";
            
            // This command copies the text to clipboard
            navigator.clipboard.writeText(email).then(() => {
                alert("Email address copied!");
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }    
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }

});