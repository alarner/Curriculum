// Any time we make a change we need to update three things:
// - HTML on the page
// - Update the data on the server (fetch)
// - Update the data in memory (items array)

let items = [];

// when we click the add button
async function onAddTodo(event) {
  console.log("onAddTodo");
  event.preventDefault();
  const inputEl = document.querySelector("#item-text");
  const description = inputEl.value;

  // add a new item to the page and listen for click events on the new item
  addTodoToPage(description, false);

  // clear the contents of the input box
  inputEl.value = "";

  // add the new item to the server
  const response = await fetch("http://todo.codefriends.larner.com/item", {
    method: "POST",
    body: JSON.stringify({
      description: description,
      completed: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const item = await response.json();
  items.push(item);
}

// given a todo description and completed status, add that todo to the page
// and listen for click events on the new todo item to update the completed
// status
function addTodoToPage(description, completed) {
  const itemsEl = document.querySelector(".items");
  const label = document.createElement("label");
  if (completed) {
    label.innerHTML = `<input class="checkbox" type="checkbox" checked /> ${description}`;
  } else {
    label.innerHTML = `<input class="checkbox" type="checkbox" /> ${description}`;
  }
  itemsEl.append(label);
  const checkbox = label.querySelector(".checkbox");

  // listen for click events on the item and update the items array accordingly
  checkbox.addEventListener("click", onClickTodo);
}

// when we toggle (on or off) one of the todo list items
async function onClickTodo(event) {
  console.log("onClickTodo", this, this.checked);

  // update the items array to reflect the new completed status of the todo
  const children = [...document.querySelector(".items").children];
  const clickedLabel = this.parentNode;
  const clickedIndex = children.indexOf(this.parentNode);
  items[clickedIndex].completed = this.checked;

  // update the server to reflect the new completed status of the todo
  const response = await fetch(
    `http://todo.codefriends.larner.com/item/${items[clickedIndex].id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        completed: this.checked,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
}

// when the page first loads
async function onPageLoad() {
  console.log("onPageLoad");
  // Get access to all the important elements (text input, add button, items div)
  const addButtonEl = document.querySelector("#add-item-button");

  addButtonEl.addEventListener("click", onAddTodo);

  // fetch all of the todo items from the server
  const response = await fetch("http://todo.codefriends.larner.com/items", {
    method: "GET",
  });

  // update items array to include the data we got back from the server
  items = await response.json();

  // loop over all those items
  for (let i = 0; i < items.length; i++) {
    const todoItem = items[i];

    addTodoToPage(todoItem.description, todoItem.completed);
  }
}

onPageLoad();
