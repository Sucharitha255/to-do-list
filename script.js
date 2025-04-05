// To-Do List Functionality
function addTask() {
    let taskInput = document.getElementById("todoInput").value;
    if (taskInput === "") return;

    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");
    listItem.innerHTML = taskInput + ' <span onclick="removeTask(this)">❌</span>';
    
    taskList.appendChild(listItem);
    document.getElementById("todoInput").value = "";
}

function removeTask(element) {
    element.parentElement.remove();

}



function setAlarm() {
    let alarmTime = document.getElementById("alarmTime").value; // Get the alarm time from the input field
    if (alarmTime === "") return;
    let alarmList = document.getElementById("alarmList");
    let listItem = document.createElement("li"); // Corrected tag from 'li1' to 'li'

    // Add alarm time and a delete button for each item
    document.getElementById("alarmMessage").innerHTML= "Alarm set for " + alarmTime +' <span onclick="removealarm(this)">❌</span>';;
    
    alert("Alarm set for " + alarmTime);
    document.getElementById("alarmMessage").value = "";
    alarmList.appendChild(listItem);

    // Notify the user and clear the input fielReset the input field
}

function removeAlarm(alarmElement) {
    // Remove the parent element (list item) of the clicked delete button (span)
    alarmElement.parentElement.remove();
}

// Save Diary Entry
function saveDiary() {
    let diaryEntry = document.getElementById("diaryEntry").value;
    if (diaryEntry === "") return;

    alert("Diary entry saved!");
}
