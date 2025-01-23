document.getElementById('createClubForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const clubName = document.getElementById('clubName').value;
    const clubDescription = document.getElementById('clubDescription').value;
    const clubCategory = document.getElementById('clubCategory').value;

    if (!clubName || !clubDescription || !clubCategory) {
        alert('请填写所有必填项!');
        return;
    }

    setTimeout(function () {
        document.getElementById('feedback').textContent = '社团创建成功！';
        document.getElementById('feedback').classList.remove('hidden');
        document.getElementById('createClubForm').reset();
    }, 1000);
});
