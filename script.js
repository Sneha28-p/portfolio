/* Typing Animation */
const text = ["Sneha Patted", "Web Developer", "MERN Stack Engineer"];
let count = 0, index = 0, currentText = "", letter = "";

(function type(){
    if(count === text.length) count = 0;
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 80);
    }
})();


fetch("https://api.github.com/users/Sneha28-p/repos")
.then(res=>res.json())
.then(data=>{
    const container = document.getElementById("github-projects");
    data.slice(0,6).forEach(repo=>{
        if (!container) return; 
        container.innerHTML += `
            <div class="card">
                <h3>${repo.name}</h3>
                <p>${repo.description || "Project repository"}</p>
                <a href="${repo.html_url}" target="_blank">View Code</a>
            </div>
        `;
    });
});

/* Scroll Reveal Animation */
const reveals = document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
    reveals.forEach(sec=>{
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight-100){
            sec.classList.add("show");
        }
    });
});
