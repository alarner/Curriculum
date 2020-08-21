const buttonEl = document.querySelector("#add-item-button");
const textEl = document.querySelector("#item-text");
const itemsEl = document.querySelector(".items");

const itemsString = localStorage.getItem("items");
fetch("http://todo.codefriends.larner.com/items", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
const startingItems = JSON.parse(itemsString);

const items = [];

// Add a new todo list element to the page
// item: the string description of the thing we have to do
// checked: the boolean value representing if the item is checked or not
const addNewItem = (item, checked) => {
  console.log("addNewItem");
  const todo = document.createElement("label");
  if (checked) {
    todo.innerHTML = `<input class="check" checked type="checkbox"> ${item}`;
  } else {
    todo.innerHTML = `<input class="check" type="checkbox"> ${item}`;
  }

  itemsEl.append(todo);
  todo.querySelector("input").addEventListener("click", onClickItemAlt);
  items.push({
    todo: item,
    checked: false,
  });
};

// This function runs when we click the add button to add a new todo item
const onAddItem = async function (event) {
  console.log("onAddItem");
  event.preventDefault();
  console.log(textEl.value);
  const item = textEl.value;
  textEl.value = "";
  // By default we don't want new todo items to be checked, hence the false value
  addNewItem(item, false);
  //   localStorage.setItem("items", JSON.stringify(items));
  const result = await fetch("http://todo.codefriends.larner.com/item", {
    method: "POST",
    body: JSON.stringify({
      description: item,
      completed: false,
    }),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  console.log(result);
};

// const onClickItem = function (event) {
//   const checkboxEl = event.target.querySelector(".check");
//   checkboxEl.checked = !checkboxEl.checked;
// };

const onClickItemAlt = function (event) {
  console.log("onClickItemAlt", this);

  const nodes = [...itemsEl.children];
  const index = nodes.indexOf(this.parentElement);
  console.log(index);
  items[index].checked = this.checked;
  localStorage.setItem("items", JSON.stringify(items));
  //   console.log(this);
  //   const checkboxEl = event.target.querySelector(".check");
  //   checkboxEl.checked = !checkboxEl.checked;
};

console.log("startingItems");
for (let i = 0; i < startingItems.length; i++) {
  const item = startingItems[i];
  addNewItem(item.todo, item.checked);
  console.log(item);
}

buttonEl.addEventListener("click", onAddItem);
// itemsEl.addEventListener("click", onClickItem);

// behind the scenes js is doing soething like this
// const event = {
//     target: this,
//     type: 'click',
// }
// onAddItem(event)

// const person = {
//   name: "aaron",
//   sayHello: function () {
//     console.log(this);
//   },
// };

// person.sayHello();

// const myForEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i);
//   }
// };

// const animals = ["cat", "dog", "fish", "bird"];
// const countAnimal = (animal, index) => {
//   console.log(`there are ${index + 1} ${animal}s`);
// };

// myForEach(animals, countAnimal);
