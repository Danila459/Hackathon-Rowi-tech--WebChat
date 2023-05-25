let listData = [{
    name: 'Олег',
    surename: 'Иванович',
    lastname: 'Мостин',
    // age: 23,
    // birthyear: '15.05.2000'
},
{
    name: 'Данила',
    surename: 'Александрович',
    lastname: 'Дымшаков',
    // age: 20,
    // birthyear: '15.05.2003'
}]

const $app = document.getElementById('app'),
    $addForm = document.getElementById('add-form'),
    $addNameInput = document.getElementById('add-form_name-inp'),
    $table = document.createElement('table'),
    $tableHead = document.createElement('thead'),
    $tableBody = document.createElement('tbody'),

    $tableHeadTr = document.createElement('tr'),
    $tableHeadThFIO = document.createElement('th');
    // $tableHeadThAge = document.createElement('th'),
    // $tableHeadThBirthYear = document.createElement('th');

$tableHeadThFIO.textContent = "ФИО"
// $tableHeadThAge.textContent = "Возраст"
// $tableHeadThBirthYear.textContent = "Год рождения"

$tableHeadTr.append($tableHeadThFIO)
// $tableHeadTr.append($tableHeadThAge)
// $tableHeadTr.append($tableHeadThBirthYear)

$tableHead.append($tableHeadTr)
$table.append($tableHead)
$table.append($tableBody)
$app.append($table)

const copyListData = [...listData]
for(const oneUser of copyListData){
    oneUser.fio = oneUser.name + ' ' + oneUser.surename + ' ' + oneUser.lastname
    // oneUser.birthYear = 2023 - oneUser.age
}
console.log(copyListData);


for(const oneUser of listData){

    const $userTr = document.createElement('tr'),
    $userFIO = document.createElement('th');
    // $userAge = document.createElement('th'),
    // $userBirthYear = document.createElement('th');
    
    $userFIO.textContent = oneUser.fio
    // $userAge.textContent = oneUser.age
    // $userBirthYear.textContent = oneUser.birthYear
    
    $userTr.append($userFIO)
    // $userTr.append($userAge)
    // $userTr.append($userBirthYear)
    
    $tableBody.append($userTr)  
}

$addForm.addEventListener('submit', function(event){
    event.preventDefault()

    listData.push({
        name: $nameInput.value
    })
    
    const copyListData = [...listData]
    for(const oneUser of copyListData){
        oneUser.fio = oneUser.name + ' ' + oneUser.surename + ' ' + oneUser.lastname
    }
    
    for(const oneUser of listData){
        const $userTr = document.createElement('tr'),
        $userFIO = document.createElement('th');
        
        $userFIO.textContent = oneUser.fio

        $userTr.append($userFIO)
        
        $tableBody.append($userTr) 

}
})





