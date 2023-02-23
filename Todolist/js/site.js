$(function() {
    var todoList = [
        { id: 1, title: "Erken Uyan", isComplated: false },
        { id: 2, title: "İyi Kalpli Ol", isComplated: true },
        { id: 3, title: "Çok Çalış", isComplated: false },
    ];

    createListView();


    $("#btnAdd").click(function() {
        var txtTitle = $("#txtTitle");
        var title = txtTitle.val();

        if (title != "") {
            var id = 1;
            var data = {
                id: (id = todoList[todoList.length - 1].id + 1),
                title: title,
                isComplated: false,
            };

            todoList.push(data);
            txtTitle.val("");
            txtTitle.focus();
            createListView();
        } else {
            alert("Lütfen Başlık Giriniz");
            txtTitle.focus();
        }
    })

    function clickLi() {

        $("li").click(function() {
            var obj = $(this);
            var id = obj.attr("id");
            updateTodo(id);
            createListView();
        })

    }


    function updateTodo(id) {
        var newTodoList = [];
        todoList.map((element) => {
            if (element.id == id) {
                element.isComplated = !element.isComplated;
            }
            newTodoList.push(element);
        });
        todoList = newTodoList;
    }




    function clickBtnClose() {
        $(".btn-close").click(function() {
            var obj = $(this);
            var id = obj.parent().attr("id");
            obj.parent().remove();
            deleteTodo(id);
            console.log(todoList);
        })
    }

    function deleteTodo(id) {
        var newTodoList = [];
        todoList.map((element) => {
            if (element.id != id) {
                newTodoList.push(element);
            }
        });
        todoList = newTodoList;
    }

    function createListView() {
        $("#list").empty();
        var ul = document.getElementById("list");

        for (let index = 0; index < todoList.length; index++) {
            const element = todoList[index];

            var li = document.createElement("li");

            if (element.isComplated) {
                li.className =
                    "list-group-item list-group-item-danger text-decoration-line-through m-1";
            } else {
                li.className = "list-group-item list-group-item-success m-1";
            }

            var attr = document.createAttribute("id");

            attr.value = element.id;

            li.setAttributeNode(attr);

            var title = document.createTextNode(element.title);
            li.appendChild(title);

            var btnClose = document.createElement("button");
            btnClose.className = "btn-close";
            li.appendChild(btnClose);
            ul.appendChild(li);

        }
        clickLi();
        clickBtnClose();
    }
});