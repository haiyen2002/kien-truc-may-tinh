var tbody = $('tbody')

for (var i = 0; i < 64; i++) {
    var row = `
    <tr class = "row-out">
        <th class="col-5 output-address" scope="row">${i}</th>
        <td class="col-5 output-value">0</td>
    </tr>
    `
    tbody.append(row);
}



const btnSubmit = $('.btn-submit');
btnSubmit.on('click', () => {
    var inValue = $('.input-value');
    var inAddress = $('.input-address');
    var load = $('#load');
    var rowOut = $('.row-out')[inAddress.val()];
    //c1
    // $(rowOut).children('td').text(inValue.val());
    //c2
    if (load.val() == 1) {
        var row = `
        <tr class = "row-out">
            <th class="col-5 output-address" scope="row">${inAddress.val()}</th>
            <td class="col-5 output-value">${inValue.val()}</td>
        </tr>
        `
        rowOut.innerHTML = row


    }


})
