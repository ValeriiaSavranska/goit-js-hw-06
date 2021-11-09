const listRef = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listRef.length}`);

//=============================================================//

[...listRef].forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
