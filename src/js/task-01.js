const categoriesEl = [...document.querySelectorAll(".item")];
console.log(`Number of categories: ${categoriesEl.length}`);
// console.log(categoriesEl);

const categoriesArr = categoriesEl.map((item) => {
  const itemArr = [...item.children];
  console.log(`Category:${itemArr[0].textContent}`);
  console.log(`Elements:${itemArr[1].children.length}`);
});

//   itemObj = {};
// });
// console.log([...categoria.children]);
// });
// const categoriesItemEl = categoriesEl.ch;
// console.log(categoriesEl.textContent);
