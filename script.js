const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const projectDialog = document.querySelector("#project-dialog");
const projectFrame = document.querySelector("#project-frame");
const noticeDialog = document.querySelector("#notice-dialog");
const noticeMessage = document.querySelector("#notice-message");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("open", !isOpen);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
  }
});

function showNotice(title, message) {
  document.querySelector("#notice-title").textContent = title;
  noticeMessage.textContent = message;
  noticeDialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeNotice() {
  noticeDialog.close();
  document.body.classList.remove("dialog-open");
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", async () => {
    const projectPath = button.dataset.project;

    let projectUrl;
    try {
      projectUrl = new URL(projectPath, window.location.href);
    } catch (error) {
      showNotice("Invalid project link", `The project link "${projectPath}" is not valid.`);
      return;
    }

    if (projectUrl.origin !== window.location.origin) {
      window.open(projectUrl.href, "_blank", "noopener,noreferrer");
      return;
    }

    try {
      const response = await fetch(projectPath, { method: "HEAD" });
      if (!response.ok) {
        throw new Error("Project file not found");
      }

      projectFrame.src = projectPath;
      projectDialog.showModal();
      document.body.classList.add("dialog-open");
    } catch (error) {
      showNotice(
        "Project file needed",
        `Place your project page at "${projectPath}". You can also replace this button's data-project value with the relative path to any HTML, PDF, or hosted demo.`
      );
    }
  });
});

document.querySelectorAll("[data-url]").forEach((button) => {
  button.addEventListener("click", () => {
    window.open(button.dataset.url, "_blank", "noopener,noreferrer");
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => {
  projectDialog.close();
  projectFrame.src = "";
  document.body.classList.remove("dialog-open");
});

projectDialog.addEventListener("close", () => {
  projectFrame.src = "";
  document.body.classList.remove("dialog-open");
});

document.querySelector(".notice-close").addEventListener("click", closeNotice);
document.querySelector(".notice-ok").addEventListener("click", closeNotice);

noticeDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});

document.querySelectorAll("[data-placeholder]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showNotice(
      `${link.dataset.placeholder} profile needed`,
      `Replace the "#" link in index.html with your ${link.dataset.placeholder} profile URL.`
    );
  });
});
