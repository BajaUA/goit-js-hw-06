const categoriesUl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesUl.length}`);
categoriesUl.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
