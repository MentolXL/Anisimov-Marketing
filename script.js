document.getElementById("current-year").textContent =
        new Date().getFullYear();

        document.addEventListener("DOMContentLoaded", function () {
            let buttons = document.querySelectorAll(".apply-btn"); // Selects all buttons with class "apply-btn"
        
            if (buttons.length > 0) {
                console.log("Buttons found:", buttons.length);
        
                buttons.forEach((btn) => {
                    btn.addEventListener("click", function () {
                        console.log("Button clicked! Redirecting...");
                        window.location.href = "submission.html";
                    });
                });
            } else {
                console.error("No buttons with class 'apply-btn' found!");
            }
        });
        
        