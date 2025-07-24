const tabbuttons=document.querySelectorAll(".tab-button");
const tabpanels=document.querySelectorAll(".tab-panel");
tabbuttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const targettab=button.getAttribute("data-tab");
        tabbuttons.forEach(btn=>btn.classList.remove("active"));
        tabpanels.forEach(panel=>panel.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(targettab).classList.add("active");
    });
});