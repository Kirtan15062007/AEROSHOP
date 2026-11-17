// ===== admin.js : small helpers for the admin pages =====

// Delete / Block buttons
document.querySelectorAll("[data-action]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const row = btn.closest("tr");
    if (btn.dataset.action === "delete" && confirm("Are you sure you want to delete this product?")) {
      row.remove();
    }
    if (btn.dataset.action === "block" && confirm("Are you sure you want to block this user?")) {
      const badge = row.querySelector(".badge");
      badge.textContent = "Blocked";
      badge.className = "badge red";
      btn.textContent = "Blocked";
      btn.disabled = true;
    }
  });
});

// Live search: type in the search box to filter table rows
document.querySelectorAll(".toolbar input[type=text]").forEach(function (box) {
  box.addEventListener("input", function () {
    const q = box.value.toLowerCase();
    document.querySelectorAll("table tr").forEach(function (tr, i) {
      if (i === 0) return; // keep header row
      tr.style.display = tr.textContent.toLowerCase().includes(q) ? "" : "none";
    });
  });
});
