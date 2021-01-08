function validateForm() {
    // Gets the task name and the task name text field
    var taskName = document.getElementById("taskName").value;
    var task = document.getElementById("taskName");

    if (taskName == "" || taskName == null) {
        // Checks to see if the task name is empty
        alert("Please enter a task name.");
        task.select();
        task.focus();
        document.getElementById("nameReminder").innerHTML = " Add a name!";
    } else if (taskName.length < 3) {
        // Checks to see if the task name is longer than two characters
        alert("Task name is too short, please enter a longer task name.");
        task.select();
        task.focus();
        document.getElementById("nameReminder").innerHTML = " Enter a longer name!";
    } else if (checkTags() == "") {
        // Checks to see if at least one tag is selected
        alert("Choose at least one tag.");
        document.getElementById("tagReminder").innerHTML = " Choose one!";
    } else {
        // Adds the task after validating the information
        addTask();
    }
}

function addTask() {
    // Finds the table with the to-do list's tasks
    var table = document.getElementById("taskList");

    // Creates an empty row on the table and adds the information submitted through the form to the table
    var row = table.insertRow(-1);

    var name = row.insertCell(0);
    var priority = row.insertCell(1);
    var tags = row.insertCell(2);
    var description = row.insertCell(3);

    name.innerHTML = document.getElementById("taskName").value;
    priority.innerHTML = document.getElementById("taskPriority").value;
    description.innerHTML = document.getElementById("taskDesc").value;
    tags.innerHTML = checkTags();

    // Resets the form
    resetForm();
    // Hides a hidden text field again
    toggleDescriptionField();
}

function resetForm() {
    // Resets the form fields and style changes
    document.getElementById("todo").reset();
    document.getElementById("tagReminder").innerHTML = "";
}

function toggleDescriptionField() {
    // Gets the hidden description text field and the checkbox that unhides it
    var descriptionField = document.getElementById('descriptionblock');
    var checkBox = document.forms.todo.descVisibility.checked;

    // If the box is not checked, hide the text field - otherwise show it
    if (!checkBox) {
        descriptionField.style.display = "none";
    } else {
        descriptionField.style.display = "block";
    }
}

function checkTags() {
    // Creates a variable to input into the task list and a variable to see how many tags have been chosen
    var tagsText = "";
    var amountOfTags = 0;

    // Gets the tag checkboxes
    var tags = document.getElementsByClassName("tag");

    for (var i = 0; i < tags.length; i++) {
        // Counts how many tags are chosen and adds them to a string
        // If there are multiple tags selected, adds a , before the tags after the first one
        if (tags[i].checked) {
            amountOfTags += 1;
            if (amountOfTags > 1) {
                tagsText += ", " + tags[i].value;
            } else {
                tagsText += tags[i].value;
            }
        }
    }

    return tagsText;
}