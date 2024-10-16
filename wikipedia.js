function toggleCollapse(heading) {
    let sibling = heading.nextElementSibling;
    while (sibling && sibling.tagName !== "H1" && sibling.tagName !== "H2" && sibling.tagName !== "H3" && sibling.tagName !== "H4" && sibling.tagName !== "H5" && sibling.tagName !== "H6") {
        sibling.style.display = sibling.style.display === 'none' ? 'block' : 'none';
        sibling = sibling.nextElementSibling;
    }
}

function makeCollapsible(heading) {
    heading.addEventListener('click', () => toggleCollapse(heading));
}

document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach(makeCollapsible);

    const tocList = document.getElementById("toc-list");
    headings.forEach((heading, index) => {
        const tocItem = document.createElement("li");
        const tocLink = document.createElement("a");
        tocLink.textContent = heading.textContent;
        tocLink.href = `#section-${index}`;
        tocLink.style.textIndent = heading.tagName === "H2" ? "50px" : "20px";
        heading.id = `section-${index}`;
        tocItem.appendChild(tocLink);
        tocList.appendChild(tocItem);
    });
});

