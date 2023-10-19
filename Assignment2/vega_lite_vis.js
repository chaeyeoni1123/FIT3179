var vg_1 = "mortality.vg.json";
var vg_2 = "MortalityIncomeClassRelation.vg.json";
var vg_3 = "DeathCause.vg.json";
var vg_4 = "DoctorRatePerIncomeClass.vg.json";
var vg_5 = "NurseMortalityRelation.vg.json";
vegaEmbed("#geo_map", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#bar_chart", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
vegaEmbed("#stacked_bar_chart", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
vegaEmbed("#pie_chart", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
vegaEmbed("#line_dot_chart", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);