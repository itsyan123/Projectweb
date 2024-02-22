document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtns = document.querySelectorAll(".read-more-btn");
    readMoreBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const packageId = this.getAttribute("data-package-id");
        const detailsDiv = document.getElementById(packageId + "-details");

        if (detailsDiv.style.display === "none") {
          detailsDiv.style.display = "block";
          btn.textContent = "Read Less";
        } else {
          detailsDiv.style.display = "none";
          btn.textContent = "Read More";
        }
      });
    });
  });

  