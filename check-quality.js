const data = require(__dirname + '/report/report.json');
const results = data.summary.average;
const mantenible = results.maintainability;
if (mantenible < 80) {
    console.error('Código poco mantenible: ' + mantenible);
    process.exit(1);
} else {
    console.log('Código mantenible: ' + mantenible);
    process.exit(0);
}
