window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
        <td>
            <img class="profile" src="../assets/profile-images/Ellipse -2.png" alt="profile">
        </td>
        <td>Vishal Chandra</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>3000000</td>
        <td>1 Nov 2022</td>
        <td>
            <img src="../assets/icons/delete-black-18dp.svg" alt="delete" name="1" onclick="remove(this)">
            <img src="../assets/icons/create-black-18dp.svg" alt="edit" name="1" onclick="update(this)">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

