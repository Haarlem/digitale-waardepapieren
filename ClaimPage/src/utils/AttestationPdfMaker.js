var jsPDF = require('jspdf')
import { randomDutchAddress } from './dutchRandomNames.js'

export default {
  makeAttestationPDF(data, qrCode, template, iframe) {
    var doc = new jsPDF("p", "mm", "a4")

    // render the svg element
    doc.addImage(template, 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'FAST')
    doc.setFont("Arial");
    doc.setFontType("normal");
    doc.setFontSize(11);

    var address = randomDutchAddress()
    // Set data to an array for serial processing
    data = [data.username, data.username, data.birth_date, data.birth_city, "" + Math.round(1000000 + (Math.random() * 99999))]
    for(var i = 0; i < 5; i++) {
      doc.text(70, 104.5 + (i * 5.2), data[i]);
    }
    doc.text(70, 135, address);
    doc.text(70, 155.5, new Date().toLocaleString())

    doc.addImage(qrCode, 'png', doc.internal.pageSize.width - 75, doc.internal.pageSize.height - 150, 65, 65, undefined, 'FAST');
    if(typeof iframe !== 'undefined') {
      var data = doc.output('datauristring');
      iframe.src = data;
    }
    else {
      doc.save('AttestatieClaim Haarlem.pdf')
    }
  }
}
