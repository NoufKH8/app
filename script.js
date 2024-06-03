// استدعاء العناصر من الصفحة
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// وظيفة إضافة المهمة
function addTask(event) {
    event.preventDefault();

    const taskTitleInput = document.getElementById('task-title');
    const taskDescriptionInput = document.getElementById('task-description');
    const dueDateInput = document.getElementById('due-date');

    const task = {
        title: taskTitleInput.value,
        description: taskDescriptionInput.value,
        dueDate: dueDateInput.value
    };

    // قم بإنشاء عنصر جديد في الجدول
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${task.title}</td>
        <td>${task.description}</td>
        <td>${task.dueDate}</td>
        <td>
            <button onclick="editTask(this)">تعديل</button>
            <button onclick="deleteTask(this)">حذف</button>
        </td>
    `;

    taskList.appendChild(row);

    // إعادة تعيين حقول الإدخال
    taskTitleInput.value = '';
    taskDescriptionInput.value = '';
    dueDateInput.value = '';
}

// وظيفة تعديل المهمة
function editTask(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    const taskTitle = cells[0].innerText;
    const taskDescription = cells[1].innerText;
    const taskDueDate = cells[2].innerText;

    // استخدم القيم الموجودة لتعديل البيانات

    // ...

    // قم بتحديث العنصر في الجدول
    // row.innerHTML = ...;
}

// وظيفة حذف المهمة
function deleteTask(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

// استماع لحدث إرسال النموذج
taskForm.addEventListener('submit', addTask);
