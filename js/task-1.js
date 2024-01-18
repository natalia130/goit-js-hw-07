const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);
listItems.forEach(item => {
    const category = item.querySelector("h2");
    const elements = item.querySelectorAll("ul>li")
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${elements.length}`);
});