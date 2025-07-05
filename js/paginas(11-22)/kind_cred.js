document.querySelectorAll(".options_block2 li").forEach((li) => {
  li.addEventListener("click", async () => {
    const templateName = li.getAttribute("data-template");

    // solicitud al block 1
    const block_1 = document.getElementById("block_1");
    const card_1 = document.getElementById("content_options");
    

    const response = await fetch(`kind/kind_cred/${templateName}.html`);
    const response_block = await fetch(`kind/kind_block/${templateName}.html`);
    const html = await response.text();
    const html_block = await response_block.text();

    document.querySelector(".content_options").innerHTML = html;
    document.querySelector(".block1").innerHTML = html_block;

    block_1.setAttribute("data-section", templateName);
    card_1.setAttribute("data-card", templateName);

    document.querySelectorAll(".options_block2 li").forEach(el => el.classList.remove("active"));
    li.classList.add("active");
  });
});
