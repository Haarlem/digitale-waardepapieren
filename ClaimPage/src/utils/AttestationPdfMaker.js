var jsPDF = require('jspdf')
var lMargin = 15; //left margin in mm
var rMargin = 15; //right margin in mm

module.exports = {
  makeAttestationPDF(data, qrCode) {
    var doc = new jsPDF()
    var lines = doc.splitTextToSize(`Uw digitale waardepapier is cryptografisch beveiligd. Aanpassen van dit document heeft geen zin.`, (doc.internal.pageSize.width - lMargin - rMargin))
    doc.text(lMargin, 10, lines)
    doc.addImage(qrCode, 'png', doc.internal.pageSize.width - 100, doc.internal.pageSize.height - 100, 100, 100, undefined, 'FAST');

    // Download the file
    var timestamp = new Date().toISOString()
    doc.save('Gemeente Haarlem Digital Certificate ' + timestamp + '.pdf')
  }
}
