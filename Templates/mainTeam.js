function generator(employee){
    return `
    <div class="card">
    <div class="card-header">
        <h2 class="card-title">${ employee.name }</h2>
        <h3 class="card-title"><i class="mr-2"></i>${ employee.role }</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ employee.id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ employee.email }">${ employee.email }</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${ employee.github }" target="_blank" rel="noopener noreferrer">${employee.github}</a></li>
            <li class="list-group-item">School: ${ employee.School }</a></li>
            <li class="list-group-item">OfficeNumber: ${ employee.OfficeNumber }</a></li>
        </ul>
    </div>
</div>
`
}
module.exports = {generator}