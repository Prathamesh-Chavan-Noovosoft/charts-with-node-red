export function generateRandomSamples({
    min,
    max,
    numBatches,
    numElementsPerBatch,
}) {
    const samples = [];
    for (let batch = 1; batch <= numBatches; batch++) {
        for (let lane = 1; lane <= numElementsPerBatch; lane++) {
            const value = min + Math.random() * (max - min);
            samples.push({ batch, lane, value });
        }
    }
    return samples;
}

export const samples = [
    {
        batch: 1,
        lane: 1,
        value: 105.97548795723343,
    },
    {
        batch: 1,
        lane: 1,
        value: 38.99650773206108,
    },
    {
        batch: 1,
        lane: 1,
        value: 40.282491138852556,
    },
    {
        batch: 1,
        lane: 1,
        value: 39.19187929825696,
    },
    {
        batch: 1,
        lane: 1,
        value: 40.8368687866119,
    },
    {
        batch: 1,
        lane: 1,
        value: 40.10139428403618,
    },
    {
        batch: 1,
        lane: 1,
        value: 38.249138688377855,
    },
    {
        batch: 1,
        lane: 1,
        value: 43.01985327931414,
    },
    {
        batch: 1,
        lane: 1,
        value: 42.035944479888315,
    },
    {
        batch: 1,
        lane: 1,
        value: 39.436116747612715,
    },
    {
        batch: 1,
        lane: 1,
        value: 39.096234418516424,
    },
    {
        batch: 1,
        lane: 1,
        value: 37.46290401516014,
    },
    {
        batch: 1,
        lane: 1,
        value: 40.06283617647229,
    },
    {
        batch: 1,
        lane: 1,
        value: 40.611713795628084,
    },
    {
        batch: 1,
        lane: 1,
        value: 40.34949604152466,
    },
    {
        batch: 2,
        lane: 2,
        value: 39.472115776355146,
    },
    {
        batch: 2,
        lane: 2,
        value: 35.44312676092533,
    },
    {
        batch: 2,
        lane: 2,
        value: 0.88424937504842,
    },
    {
        batch: 2,
        lane: 2,
        value: 37.08795136767478,
    },
    {
        batch: 2,
        lane: 2,
        value: 39.02861590430581,
    },
    {
        batch: 2,
        lane: 2,
        value: 40.19365048551221,
    },
    {
        batch: 2,
        lane: 2,
        value: 43.74234156377892,
    },
    {
        batch: 2,
        lane: 2,
        value: 40.558845832153175,
    },
    {
        batch: 2,
        lane: 2,
        value: 40.10269172188209,
    },
    {
        batch: 2,
        lane: 2,
        value: 38.92195526366318,
    },
    {
        batch: 2,
        lane: 2,
        value: 38.73951894026607,
    },
    {
        batch: 2,
        lane: 2,
        value: 39.06515813960521,
    },
    {
        batch: 2,
        lane: 2,
        value: 35.53367700936903,
    },
    {
        batch: 2,
        lane: 2,
        value: 39.87688456643511,
    },
    {
        batch: 2,
        lane: 2,
        value: 40.15305107041768,
    },
    {
        batch: 3,
        lane: 3,
        value: 38.75526927855633,
    },
    {
        batch: 3,
        lane: 3,
        value: 40.24758229922851,
    },
    {
        batch: 3,
        lane: 3,
        value: 39.37698456022023,
    },
    {
        batch: 3,
        lane: 3,
        value: 41.28253817654005,
    },
    {
        batch: 3,
        lane: 3,
        value: 35.153016125521134,
    },
    {
        batch: 3,
        lane: 3,
        value: 39.672282365411,
    },
    {
        batch: 3,
        lane: 3,
        value: 42.30327552407725,
    },
    {
        batch: 3,
        lane: 3,
        value: 38.600229010259156,
    },
    {
        batch: 3,
        lane: 3,
        value: 37.569432404670934,
    },
    {
        batch: 3,
        lane: 3,
        value: 38.902003392213764,
    },
    {
        batch: 3,
        lane: 3,
        value: 38.35027850960087,
    },
    {
        batch: 3,
        lane: 3,
        value: 37.16573992606569,
    },
    {
        batch: 3,
        lane: 3,
        value: 40.309831180310006,
    },
    {
        batch: 3,
        lane: 3,
        value: 36.59638001115707,
    },
    {
        batch: 3,
        lane: 3,
        value: 37.73645646308583,
    },
    {
        batch: 4,
        lane: 4,
        value: 38.45420250362494,
    },
    {
        batch: 4,
        lane: 4,
        value: 39.49486906183483,
    },
    {
        batch: 4,
        lane: 4,
        value: 38.70001359627952,
    },
    {
        batch: 4,
        lane: 4,
        value: 34.54127412164743,
    },
    {
        batch: 4,
        lane: 4,
        value: 33.34199622515487,
    },
    {
        batch: 4,
        lane: 4,
        value: 38.75528755408235,
    },
    {
        batch: 4,
        lane: 4,
        value: 38.37026280940156,
    },
    {
        batch: 4,
        lane: 4,
        value: 42.783473039781526,
    },
    {
        batch: 4,
        lane: 4,
        value: 36.77980747341258,
    },
    {
        batch: 4,
        lane: 4,
        value: 38.231728181006574,
    },
    {
        batch: 4,
        lane: 4,
        value: 44.78784332849159,
    },
    {
        batch: 4,
        lane: 4,
        value: 37.97094749021595,
    },
    {
        batch: 4,
        lane: 4,
        value: 41.58478664200477,
    },
    {
        batch: 4,
        lane: 4,
        value: 32.682862800946,
    },
    {
        batch: 4,
        lane: 4,
        value: 47.16137850328715,
    },
    {
        batch: 5,
        lane: 5,
        value: 39.485520834357075,
    },
    {
        batch: 5,
        lane: 5,
        value: 37.57514648861066,
    },
    {
        batch: 5,
        lane: 5,
        value: 40.0049694482011,
    },
    {
        batch: 5,
        lane: 5,
        value: 45.24678691498098,
    },
    {
        batch: 5,
        lane: 5,
        value: 39.740704670966466,
    },
    {
        batch: 5,
        lane: 5,
        value: 38.579846454153724,
    },
    {
        batch: 5,
        lane: 5,
        value: 34.06711811778013,
    },
    {
        batch: 5,
        lane: 5,
        value: 40.10636721948871,
    },
    {
        batch: 5,
        lane: 5,
        value: 42.23883361376857,
    },
    {
        batch: 5,
        lane: 5,
        value: 40.83771413883386,
    },
    {
        batch: 5,
        lane: 5,
        value: 36.11608954289267,
    },
    {
        batch: 5,
        lane: 5,
        value: 40.74679345038629,
    },
    {
        batch: 5,
        lane: 5,
        value: 44.39946556972656,
    },
    {
        batch: 5,
        lane: 5,
        value: 39.56880112908966,
    },
    {
        batch: 5,
        lane: 5,
        value: 39.57864268958653,
    },
    {
        batch: 6,
        lane: 6,
        value: 40.1089887312153,
    },
    {
        batch: 6,
        lane: 6,
        value: 37.51165279862077,
    },
    {
        batch: 6,
        lane: 6,
        value: 37.8034321618016,
    },
    {
        batch: 6,
        lane: 6,
        value: 40.41279873919964,
    },
    {
        batch: 6,
        lane: 6,
        value: 39.8829459402173,
    },
    {
        batch: 6,
        lane: 6,
        value: 37.3415268076261,
    },
    {
        batch: 6,
        lane: 6,
        value: 36.916980577816545,
    },
    {
        batch: 6,
        lane: 6,
        value: 33.37402645511061,
    },
    {
        batch: 6,
        lane: 6,
        value: 34.58027597023347,
    },
    {
        batch: 6,
        lane: 6,
        value: 41.569230712388574,
    },
    {
        batch: 6,
        lane: 6,
        value: 43.44678505912987,
    },
    {
        batch: 6,
        lane: 6,
        value: 41.60772124704169,
    },
    {
        batch: 6,
        lane: 6,
        value: 39.260201993411464,
    },
    {
        batch: 6,
        lane: 6,
        value: 37.15460803962083,
    },
    {
        batch: 6,
        lane: 6,
        value: 42.556932657936805,
    },
    {
        batch: 7,
        lane: 7,
        value: 42.10839789551834,
    },
    {
        batch: 7,
        lane: 7,
        value: 39.15677809250889,
    },
    {
        batch: 7,
        lane: 7,
        value: 42.587927648303484,
    },
    {
        batch: 7,
        lane: 7,
        value: 43.92120690625586,
    },
    {
        batch: 7,
        lane: 7,
        value: 40.51641851353161,
    },
    {
        batch: 7,
        lane: 7,
        value: 48.60599351886003,
    },
    {
        batch: 7,
        lane: 7,
        value: 36.47624468441238,
    },
    {
        batch: 7,
        lane: 7,
        value: 39.34764843307267,
    },
    {
        batch: 7,
        lane: 7,
        value: 41.237661988335674,
    },
    {
        batch: 7,
        lane: 7,
        value: 43.739782236723684,
    },
    {
        batch: 7,
        lane: 7,
        value: 42.56304302681134,
    },
    {
        batch: 7,
        lane: 7,
        value: 39.37743520465402,
    },
    {
        batch: 7,
        lane: 7,
        value: 43.829549230193955,
    },
    {
        batch: 7,
        lane: 7,
        value: 43.21419864114365,
    },
    {
        batch: 7,
        lane: 7,
        value: 13.27335614428228,
    },
    {
        batch: 8,
        lane: 8,
        value: 39.424571227101765,
    },
    {
        batch: 8,
        lane: 8,
        value: 39.063310342049796,
    },
    {
        batch: 8,
        lane: 8,
        value: 38.00954465329273,
    },
    {
        batch: 8,
        lane: 8,
        value: 37.54686497934876,
    },
    {
        batch: 8,
        lane: 8,
        value: 37.220684085279764,
    },
    {
        batch: 8,
        lane: 8,
        value: 40.90720317404944,
    },
    {
        batch: 8,
        lane: 8,
        value: 41.17818574490844,
    },
    {
        batch: 8,
        lane: 8,
        value: 38.016344595564405,
    },
    {
        batch: 8,
        lane: 8,
        value: 39.79618535263518,
    },
    {
        batch: 8,
        lane: 8,
        value: 40.825593085138784,
    },
    {
        batch: 8,
        lane: 8,
        value: 39.85293321524612,
    },
    {
        batch: 8,
        lane: 8,
        value: 34.77461089415191,
    },
    {
        batch: 8,
        lane: 8,
        value: 35.19414049556391,
    },
    {
        batch: 8,
        lane: 8,
        value: 38.08034728438894,
    },
    {
        batch: 8,
        lane: 8,
        value: 37.964373346095535,
    },
    {
        batch: 9,
        lane: 9,
        value: 36.80976561110679,
    },
    {
        batch: 9,
        lane: 9,
        value: 41.82062364143608,
    },
    {
        batch: 9,
        lane: 9,
        value: 38.98796274499426,
    },
    {
        batch: 9,
        lane: 9,
        value: 39.11448190646987,
    },
    {
        batch: 9,
        lane: 9,
        value: 39.65187973731003,
    },
    {
        batch: 9,
        lane: 9,
        value: 38.0714366039959,
    },
    {
        batch: 9,
        lane: 9,
        value: 37.826014898759894,
    },
    {
        batch: 9,
        lane: 9,
        value: 36.874669139228494,
    },
    {
        batch: 9,
        lane: 9,
        value: 41.56926363155121,
    },
    {
        batch: 9,
        lane: 9,
        value: 40.19586638578322,
    },
    {
        batch: 9,
        lane: 9,
        value: 39.275813689046004,
    },
    {
        batch: 9,
        lane: 9,
        value: 39.65297747440488,
    },
    {
        batch: 9,
        lane: 9,
        value: 41.04696780090263,
    },
    {
        batch: 9,
        lane: 9,
        value: 44.784783844716095,
    },
    {
        batch: 9,
        lane: 9,
        value: 40.70925886814453,
    },
    {
        batch: 10,
        lane: 10,
        value: 34.559055009707336,
    },
    {
        batch: 10,
        lane: 10,
        value: 36.98996491466003,
    },
    {
        batch: 10,
        lane: 10,
        value: 36.516495094929844,
    },
    {
        batch: 10,
        lane: 10,
        value: 35.713997155767956,
    },
    {
        batch: 10,
        lane: 10,
        value: 38.52451314195889,
    },
    {
        batch: 10,
        lane: 10,
        value: 39.34359898100889,
    },
    {
        batch: 10,
        lane: 10,
        value: 42.217263286256824,
    },
    {
        batch: 10,
        lane: 10,
        value: 39.20399050701331,
    },
    {
        batch: 10,
        lane: 10,
        value: 39.0033547989594,
    },
    {
        batch: 10,
        lane: 10,
        value: 36.05548643041118,
    },
    {
        batch: 10,
        lane: 10,
        value: 38.89736336780906,
    },
    {
        batch: 10,
        lane: 10,
        value: 41.58036303380836,
    },
    {
        batch: 10,
        lane: 10,
        value: 38.88411504849568,
    },
    {
        batch: 10,
        lane: 10,
        value: 34.100170672206374,
    },
    {
        batch: 10,
        lane: 10,
        value: 37.96585772598673,
    },
    {
        batch: 11,
        lane: 11,
        value: 58.52431027514021,
    },
    {
        batch: 11,
        lane: 11,
        value: 36.141138541441514,
    },
    {
        batch: 11,
        lane: 11,
        value: 37.85329796271361,
    },
    {
        batch: 11,
        lane: 11,
        value: 40.3149457332273,
    },
    {
        batch: 11,
        lane: 11,
        value: 34.446322856887114,
    },
    {
        batch: 11,
        lane: 11,
        value: 45.459994168585524,
    },
    {
        batch: 11,
        lane: 11,
        value: 39.09307771867605,
    },
    {
        batch: 11,
        lane: 11,
        value: 32.146479905115925,
    },
    {
        batch: 11,
        lane: 11,
        value: 36.43844151739192,
    },
    {
        batch: 11,
        lane: 11,
        value: 42.05372373530649,
    },
    {
        batch: 11,
        lane: 11,
        value: 36.80622355397548,
    },
    {
        batch: 11,
        lane: 11,
        value: 31.16853851837394,
    },
    {
        batch: 11,
        lane: 11,
        value: 35.17692917658641,
    },
    {
        batch: 11,
        lane: 11,
        value: 37.187016715092554,
    },
    {
        batch: 11,
        lane: 11,
        value: 41.30718979533323,
    },
    {
        batch: 12,
        lane: 12,
        value: 41.08567492033893,
    },
    {
        batch: 12,
        lane: 12,
        value: 46.63157990556874,
    },
    {
        batch: 12,
        lane: 12,
        value: 38.969093117590816,
    },
    {
        batch: 12,
        lane: 12,
        value: 45.314445781449606,
    },
    {
        batch: 12,
        lane: 12,
        value: 38.852976452436366,
    },
    {
        batch: 12,
        lane: 12,
        value: 42.35593620889033,
    },
    {
        batch: 12,
        lane: 12,
        value: 41.45229318023582,
    },
    {
        batch: 12,
        lane: 12,
        value: 47.72141405554509,
    },
    {
        batch: 12,
        lane: 12,
        value: 12.14314662291317,
    },
    {
        batch: 12,
        lane: 12,
        value: 14.275449435678354,
    },
    {
        batch: 12,
        lane: 12,
        value: 44.95424791091363,
    },
    {
        batch: 12,
        lane: 12,
        value: 42.39008610745176,
    },
    {
        batch: 12,
        lane: 12,
        value: 41.69638574080702,
    },
    {
        batch: 12,
        lane: 12,
        value: 36.28881594671244,
    },
    {
        batch: 12,
        lane: 12,
        value: 41.43967641680898,
    },
    {
        batch: 13,
        lane: 13,
        value: 41.663351455498024,
    },
    {
        batch: 13,
        lane: 13,
        value: 39.97263442369614,
    },
    {
        batch: 13,
        lane: 13,
        value: 43.920883148143304,
    },
    {
        batch: 13,
        lane: 13,
        value: 45.99150933342895,
    },
    {
        batch: 13,
        lane: 13,
        value: 41.6956986606178,
    },
    {
        batch: 13,
        lane: 13,
        value: 38.05867252032593,
    },
    {
        batch: 13,
        lane: 13,
        value: 41.81469277089599,
    },
    {
        batch: 13,
        lane: 13,
        value: 37.55115149062459,
    },
    {
        batch: 13,
        lane: 13,
        value: 41.11420993217262,
    },
    {
        batch: 13,
        lane: 13,
        value: 37.294205553992406,
    },
    {
        batch: 13,
        lane: 13,
        value: 41.03559170697937,
    },
    {
        batch: 13,
        lane: 13,
        value: 39.65270660699382,
    },
    {
        batch: 13,
        lane: 13,
        value: 41.964319174539334,
    },
    {
        batch: 13,
        lane: 13,
        value: 44.66896953201346,
    },
    {
        batch: 13,
        lane: 13,
        value: 37.63297266183123,
    },
    {
        batch: 14,
        lane: 14,
        value: 38.82866353668352,
    },
    {
        batch: 14,
        lane: 14,
        value: 41.03611172682463,
    },
    {
        batch: 14,
        lane: 14,
        value: 42.356406278876875,
    },
    {
        batch: 14,
        lane: 14,
        value: 40.65667744747843,
    },
    {
        batch: 14,
        lane: 14,
        value: 40.43621385574155,
    },
    {
        batch: 14,
        lane: 14,
        value: 41.54556520127104,
    },
    {
        batch: 14,
        lane: 14,
        value: 42.90608323134295,
    },
    {
        batch: 14,
        lane: 14,
        value: 40.414475544183105,
    },
    {
        batch: 14,
        lane: 14,
        value: 41.23234446889823,
    },
    {
        batch: 14,
        lane: 14,
        value: 37.378260667257656,
    },
    {
        batch: 14,
        lane: 14,
        value: 40.07118479317006,
    },
    {
        batch: 14,
        lane: 14,
        value: 40.17596346179957,
    },
    {
        batch: 14,
        lane: 14,
        value: 39.54200240235347,
    },
    {
        batch: 14,
        lane: 14,
        value: 41.71578017305483,
    },
    {
        batch: 14,
        lane: 14,
        value: 41.547391467470895,
    },
    {
        batch: 15,
        lane: 15,
        value: 39.85295148706042,
    },
    {
        batch: 15,
        lane: 15,
        value: 41.719499108568904,
    },
    {
        batch: 15,
        lane: 15,
        value: 43.63886731055611,
    },
    {
        batch: 15,
        lane: 15,
        value: 44.62982217718843,
    },
    {
        batch: 15,
        lane: 15,
        value: 41.53672423606351,
    },
    {
        batch: 15,
        lane: 15,
        value: 43.002263252483175,
    },
    {
        batch: 15,
        lane: 15,
        value: 36.61073682455189,
    },
    {
        batch: 15,
        lane: 15,
        value: 37.71049521230759,
    },
    {
        batch: 15,
        lane: 15,
        value: 39.44260038155639,
    },
    {
        batch: 15,
        lane: 15,
        value: 29.596604553809698,
    },
    {
        batch: 15,
        lane: 15,
        value: 42.573436676943025,
    },
    {
        batch: 15,
        lane: 15,
        value: 38.79295220852821,
    },
    {
        batch: 15,
        lane: 15,
        value: 24.920965368336695,
    },
    {
        batch: 15,
        lane: 15,
        value: 54.21998191842942,
    },
    {
        batch: 15,
        lane: 15,
        value: 73.10449309194682,
    },
    {
        batch: 16,
        lane: 1,
        value: 35.92297836407513,
    },
    {
        batch: 16,
        lane: 1,
        value: 34.75705182545366,
    },
    {
        batch: 16,
        lane: 1,
        value: 35.339716442587914,
    },
    {
        batch: 16,
        lane: 1,
        value: 40.98710882713456,
    },
    {
        batch: 16,
        lane: 1,
        value: 43.20457971096127,
    },
    {
        batch: 16,
        lane: 1,
        value: 37.520303763765796,
    },
    {
        batch: 16,
        lane: 1,
        value: 39.84394914343794,
    },
    {
        batch: 16,
        lane: 1,
        value: 33.25702769802568,
    },
    {
        batch: 16,
        lane: 1,
        value: 41.962054106862986,
    },
    {
        batch: 16,
        lane: 1,
        value: 43.93163176985004,
    },
    {
        batch: 16,
        lane: 1,
        value: 37.24772178963349,
    },
    {
        batch: 16,
        lane: 1,
        value: 38.53634710680168,
    },
    {
        batch: 16,
        lane: 1,
        value: 45.72585845139917,
    },
    {
        batch: 16,
        lane: 1,
        value: 38.14455798301308,
    },
    {
        batch: 16,
        lane: 1,
        value: 38.79090386588052,
    },
    {
        batch: 17,
        lane: 2,
        value: 40.69981809156032,
    },
    {
        batch: 17,
        lane: 2,
        value: 36.96115086030768,
    },
    {
        batch: 17,
        lane: 2,
        value: 70.32192879383148,
    },
    {
        batch: 17,
        lane: 2,
        value: 35.8068553146801,
    },
    {
        batch: 17,
        lane: 2,
        value: 39.66184212205671,
    },
    {
        batch: 17,
        lane: 2,
        value: 37.15377321666493,
    },
    {
        batch: 17,
        lane: 2,
        value: 40.81324414467841,
    },
    {
        batch: 17,
        lane: 2,
        value: 35.988384388595904,
    },
    {
        batch: 17,
        lane: 2,
        value: 37.91051198946889,
    },
    {
        batch: 17,
        lane: 2,
        value: 41.71820568263169,
    },
    {
        batch: 17,
        lane: 2,
        value: 38.791344863311394,
    },
    {
        batch: 17,
        lane: 2,
        value: 36.94592306662426,
    },
    {
        batch: 17,
        lane: 2,
        value: 42.258010752213174,
    },
    {
        batch: 17,
        lane: 2,
        value: 39.6747672980644,
    },
    {
        batch: 17,
        lane: 2,
        value: 39.83622313780362,
    },
    {
        batch: 18,
        lane: 3,
        value: 37.0581026272484,
    },
    {
        batch: 18,
        lane: 3,
        value: 37.8305138142914,
    },
    {
        batch: 18,
        lane: 3,
        value: 37.25478302015753,
    },
    {
        batch: 18,
        lane: 3,
        value: 38.057074754246,
    },
    {
        batch: 18,
        lane: 3,
        value: 38.38361829569748,
    },
    {
        batch: 18,
        lane: 3,
        value: 41.310043736117855,
    },
    {
        batch: 18,
        lane: 3,
        value: 40.28262104148909,
    },
    {
        batch: 18,
        lane: 3,
        value: 37.516432615700886,
    },
    {
        batch: 18,
        lane: 3,
        value: 39.233739145369285,
    },
    {
        batch: 18,
        lane: 3,
        value: 37.03836699130625,
    },
    {
        batch: 18,
        lane: 3,
        value: 41.75754366355842,
    },
    {
        batch: 18,
        lane: 3,
        value: 37.2083676790352,
    },
    {
        batch: 18,
        lane: 3,
        value: 34.918470920022024,
    },
    {
        batch: 18,
        lane: 3,
        value: 39.27996373545544,
    },
    {
        batch: 18,
        lane: 3,
        value: 38.448139481906125,
    },
    {
        batch: 19,
        lane: 4,
        value: 35.96317133449373,
    },
    {
        batch: 19,
        lane: 4,
        value: 31.953198265795777,
    },
    {
        batch: 19,
        lane: 4,
        value: 37.402625314063314,
    },
    {
        batch: 19,
        lane: 4,
        value: 39.82627158345857,
    },
    {
        batch: 19,
        lane: 4,
        value: 36.593864749916314,
    },
    {
        batch: 19,
        lane: 4,
        value: 37.97496294542073,
    },
    {
        batch: 19,
        lane: 4,
        value: 41.10639772926068,
    },
    {
        batch: 19,
        lane: 4,
        value: 36.164638529179356,
    },
    {
        batch: 19,
        lane: 4,
        value: 41.670827695654545,
    },
    {
        batch: 19,
        lane: 4,
        value: 39.22012250160476,
    },
    {
        batch: 19,
        lane: 4,
        value: 43.31164753755501,
    },
    {
        batch: 19,
        lane: 4,
        value: 41.33283424582675,
    },
    {
        batch: 19,
        lane: 4,
        value: 37.039918549271256,
    },
    {
        batch: 19,
        lane: 4,
        value: 37.15309735834931,
    },
    {
        batch: 19,
        lane: 4,
        value: 37.37648469145252,
    },
    {
        batch: 20,
        lane: 5,
        value: 37.61885240888437,
    },
    {
        batch: 20,
        lane: 5,
        value: 45.14048010966114,
    },
    {
        batch: 20,
        lane: 5,
        value: 40.18001010669921,
    },
    {
        batch: 20,
        lane: 5,
        value: 44.71147631649059,
    },
    {
        batch: 20,
        lane: 5,
        value: 40.526897724668586,
    },
    {
        batch: 20,
        lane: 5,
        value: 38.513917783687916,
    },
    {
        batch: 20,
        lane: 5,
        value: 40.70173729729264,
    },
    {
        batch: 20,
        lane: 5,
        value: 37.49249732079786,
    },
    {
        batch: 20,
        lane: 5,
        value: 42.52622210240696,
    },
    {
        batch: 20,
        lane: 5,
        value: 33.548963476506614,
    },
    {
        batch: 20,
        lane: 5,
        value: 39.30390637277805,
    },
    {
        batch: 20,
        lane: 5,
        value: 35.42400353346441,
    },
    {
        batch: 20,
        lane: 5,
        value: 43.91995328929217,
    },
    {
        batch: 20,
        lane: 5,
        value: 41.64250992501782,
    },
    {
        batch: 20,
        lane: 5,
        value: 40.22437778817947,
    },
    {
        batch: 21,
        lane: 6,
        value: 36.03217498790202,
    },
    {
        batch: 21,
        lane: 6,
        value: 37.69433781952872,
    },
    {
        batch: 21,
        lane: 6,
        value: 46.1863040028327,
    },
    {
        batch: 21,
        lane: 6,
        value: 39.05885520333553,
    },
    {
        batch: 21,
        lane: 6,
        value: 35.607664781851916,
    },
    {
        batch: 21,
        lane: 6,
        value: 44.606183768786565,
    },
    {
        batch: 21,
        lane: 6,
        value: 34.15186031927985,
    },
    {
        batch: 21,
        lane: 6,
        value: 36.631838812202766,
    },
    {
        batch: 21,
        lane: 6,
        value: 44.77299404269231,
    },
    {
        batch: 21,
        lane: 6,
        value: 39.03706737059533,
    },
    {
        batch: 21,
        lane: 6,
        value: 37.53529000728542,
    },
    {
        batch: 21,
        lane: 6,
        value: 39.780536777794744,
    },
    {
        batch: 21,
        lane: 6,
        value: 41.39442011639851,
    },
    {
        batch: 21,
        lane: 6,
        value: 38.24741163507443,
    },
    {
        batch: 21,
        lane: 6,
        value: 42.00927398768738,
    },
    {
        batch: 22,
        lane: 7,
        value: 37.75722690302659,
    },
    {
        batch: 22,
        lane: 7,
        value: 40.61520511203799,
    },
    {
        batch: 22,
        lane: 7,
        value: 39.66506494980827,
    },
    {
        batch: 22,
        lane: 7,
        value: 36.078914366066996,
    },
    {
        batch: 22,
        lane: 7,
        value: 41.54950422327807,
    },
    {
        batch: 22,
        lane: 7,
        value: 38.65012385915063,
    },
    {
        batch: 22,
        lane: 7,
        value: 39.825364399591294,
    },
    {
        batch: 22,
        lane: 7,
        value: 43.76002177108863,
    },
    {
        batch: 22,
        lane: 7,
        value: 38.90853390663936,
    },
    {
        batch: 22,
        lane: 7,
        value: 36.97553714345533,
    },
    {
        batch: 22,
        lane: 7,
        value: 44.72585898598124,
    },
    {
        batch: 22,
        lane: 7,
        value: 32.08106983475822,
    },
    {
        batch: 22,
        lane: 7,
        value: 34.986035664526554,
    },
    {
        batch: 22,
        lane: 7,
        value: 38.970745922721505,
    },
    {
        batch: 22,
        lane: 7,
        value: 41.238292474570045,
    },
    {
        batch: 23,
        lane: 8,
        value: 39.044234429992684,
    },
    {
        batch: 23,
        lane: 8,
        value: 42.18234449726544,
    },
    {
        batch: 23,
        lane: 8,
        value: 42.90773565865916,
    },
    {
        batch: 23,
        lane: 8,
        value: 47.99626338460985,
    },
    {
        batch: 23,
        lane: 8,
        value: 44.75604671624174,
    },
    {
        batch: 23,
        lane: 8,
        value: 45.66869714304752,
    },
    {
        batch: 23,
        lane: 8,
        value: 45.1753492052551,
    },
    {
        batch: 23,
        lane: 8,
        value: 48.968576868275356,
    },
    {
        batch: 23,
        lane: 8,
        value: 41.31150654061732,
    },
    {
        batch: 23,
        lane: 8,
        value: 42.577220342634526,
    },
    {
        batch: 23,
        lane: 8,
        value: 47.2438902364851,
    },
    {
        batch: 23,
        lane: 8,
        value: 44.41774651672331,
    },
    {
        batch: 23,
        lane: 8,
        value: 43.321220819445344,
    },
    {
        batch: 23,
        lane: 8,
        value: 47.64109568131729,
    },
    {
        batch: 23,
        lane: 8,
        value: 44.83030967248562,
    },
    {
        batch: 23,
        lane: 8,
        value: 44.10257926416508,
    },
    {
        batch: 24,
        lane: 9,
        value: 36.59326296475133,
    },
    {
        batch: 24,
        lane: 9,
        value: 46.16552548478272,
    },
    {
        batch: 24,
        lane: 9,
        value: 38.88820055073118,
    },
    {
        batch: 24,
        lane: 9,
        value: 39.29182529626214,
    },
    {
        batch: 24,
        lane: 9,
        value: 38.00377008113952,
    },
    {
        batch: 24,
        lane: 9,
        value: 42.23955008489645,
    },
    {
        batch: 24,
        lane: 9,
        value: 39.43267028828585,
    },
    {
        batch: 24,
        lane: 9,
        value: 40.91436996236263,
    },
    {
        batch: 24,
        lane: 9,
        value: 39.71510810791002,
    },
    {
        batch: 24,
        lane: 9,
        value: 44.64984964395756,
    },
    {
        batch: 24,
        lane: 9,
        value: 46.27737845213423,
    },
    {
        batch: 24,
        lane: 9,
        value: 43.201936590347195,
    },
    {
        batch: 24,
        lane: 9,
        value: 74.05094848160257,
    },
    {
        batch: 24,
        lane: 9,
        value: 37.74739023249354,
    },
    {
        batch: 25,
        lane: 10,
        value: 41.55668801721098,
    },
    {
        batch: 25,
        lane: 10,
        value: 38.60912083417443,
    },
    {
        batch: 25,
        lane: 10,
        value: 58.91455599187596,
    },
    {
        batch: 25,
        lane: 10,
        value: 70.98858872331751,
    },
    {
        batch: 25,
        lane: 10,
        value: 35.41256130601394,
    },
    {
        batch: 25,
        lane: 10,
        value: 38.21602832683604,
    },
    {
        batch: 25,
        lane: 10,
        value: 45.31722661557493,
    },
    {
        batch: 25,
        lane: 10,
        value: 40.10676904689662,
    },
    {
        batch: 25,
        lane: 10,
        value: 38.68515459711995,
    },
    {
        batch: 25,
        lane: 10,
        value: 42.78559066173891,
    },
    {
        batch: 25,
        lane: 10,
        value: 40.39238710894806,
    },
    {
        batch: 25,
        lane: 10,
        value: 39.12736868036527,
    },
    {
        batch: 25,
        lane: 10,
        value: 40.10625018106633,
    },
    {
        batch: 25,
        lane: 10,
        value: 44.09810064193713,
    },
    {
        batch: 25,
        lane: 10,
        value: 39.04382950899696,
    },
    {
        batch: 26,
        lane: 11,
        value: 44.75723724971989,
    },
    {
        batch: 26,
        lane: 11,
        value: 42.551291434504094,
    },
    {
        batch: 26,
        lane: 11,
        value: 38.55177512518478,
    },
    {
        batch: 26,
        lane: 11,
        value: 40.311740735261765,
    },
    {
        batch: 26,
        lane: 11,
        value: 42.25756241582159,
    },
    {
        batch: 26,
        lane: 11,
        value: 41.81511568162005,
    },
    {
        batch: 26,
        lane: 11,
        value: 37.8182907491065,
    },
    {
        batch: 26,
        lane: 11,
        value: 42.91680704720181,
    },
    {
        batch: 26,
        lane: 11,
        value: 41.97059465728393,
    },
    {
        batch: 26,
        lane: 11,
        value: 43.18619599636972,
    },
    {
        batch: 26,
        lane: 11,
        value: 48.79764277049734,
    },
    {
        batch: 26,
        lane: 11,
        value: 39.11782914843457,
    },
    {
        batch: 26,
        lane: 11,
        value: 39.49328896612082,
    },
    {
        batch: 26,
        lane: 11,
        value: 44.25386865748371,
    },
    {
        batch: 26,
        lane: 11,
        value: 42.00533007233573,
    },
    {
        batch: 27,
        lane: 12,
        value: 43.42539989268083,
    },
    {
        batch: 27,
        lane: 12,
        value: 45.476712936405264,
    },
    {
        batch: 27,
        lane: 12,
        value: 40.1725346842961,
    },
    {
        batch: 27,
        lane: 12,
        value: 35.74444356308897,
    },
    {
        batch: 27,
        lane: 12,
        value: 43.100619477029795,
    },
    {
        batch: 27,
        lane: 12,
        value: 40.841893455975395,
    },
    {
        batch: 27,
        lane: 12,
        value: 39.58910423020844,
    },
    {
        batch: 27,
        lane: 12,
        value: 43.14393165971738,
    },
    {
        batch: 27,
        lane: 12,
        value: 41.65076467498101,
    },
    {
        batch: 27,
        lane: 12,
        value: 39.594461689224445,
    },
    {
        batch: 27,
        lane: 12,
        value: 40.38922527471897,
    },
    {
        batch: 27,
        lane: 12,
        value: 41.08669188473193,
    },
    {
        batch: 27,
        lane: 12,
        value: 39.78093587887591,
    },
    {
        batch: 27,
        lane: 12,
        value: 37.1072905940523,
    },
    {
        batch: 27,
        lane: 12,
        value: 38.33609452692872,
    },
    {
        batch: 28,
        lane: 13,
        value: 39.04027634704602,
    },
    {
        batch: 28,
        lane: 13,
        value: 37.501339971013955,
    },
    {
        batch: 28,
        lane: 13,
        value: 36.09145880411134,
    },
    {
        batch: 28,
        lane: 13,
        value: 38.424440498590265,
    },
    {
        batch: 28,
        lane: 13,
        value: 36.92625824776321,
    },
    {
        batch: 28,
        lane: 13,
        value: 39.036985696270975,
    },
    {
        batch: 28,
        lane: 13,
        value: 34.09603259893232,
    },
    {
        batch: 28,
        lane: 13,
        value: 45.008997529419986,
    },
    {
        batch: 28,
        lane: 13,
        value: 37.1714034757153,
    },
    {
        batch: 28,
        lane: 13,
        value: 40.11103849733951,
    },
    {
        batch: 28,
        lane: 13,
        value: 40.43485992541658,
    },
    {
        batch: 28,
        lane: 13,
        value: 34.80045534108535,
    },
    {
        batch: 28,
        lane: 13,
        value: 40.954249961880244,
    },
    {
        batch: 28,
        lane: 13,
        value: 38.4471125066925,
    },
    {
        batch: 28,
        lane: 13,
        value: 39.45128007882483,
    },
    {
        batch: 29,
        lane: 14,
        value: 41.42847853333867,
    },
    {
        batch: 29,
        lane: 14,
        value: 42.82253703978435,
    },
    {
        batch: 29,
        lane: 14,
        value: 46.339108891268005,
    },
    {
        batch: 29,
        lane: 14,
        value: 44.503111429733686,
    },
    {
        batch: 29,
        lane: 14,
        value: 46.68337201166068,
    },
    {
        batch: 29,
        lane: 14,
        value: 39.46245302261724,
    },
    {
        batch: 29,
        lane: 14,
        value: 33.971147991876904,
    },
    {
        batch: 29,
        lane: 14,
        value: 36.66393335309622,
    },
    {
        batch: 29,
        lane: 14,
        value: 47.08260421774485,
    },
    {
        batch: 29,
        lane: 14,
        value: 42.33507275216348,
    },
    {
        batch: 29,
        lane: 14,
        value: 45.16898153467824,
    },
    {
        batch: 29,
        lane: 14,
        value: 44.19378151816278,
    },
    {
        batch: 29,
        lane: 14,
        value: 37.92069050557551,
    },
    {
        batch: 29,
        lane: 14,
        value: 43.53680157089843,
    },
    {
        batch: 29,
        lane: 14,
        value: 41.08938670789383,
    },
    {
        batch: 30,
        lane: 15,
        value: 39.72263273851125,
    },
    {
        batch: 30,
        lane: 15,
        value: 44.26820873197986,
    },
    {
        batch: 30,
        lane: 15,
        value: 39.681284172267645,
    },
    {
        batch: 30,
        lane: 15,
        value: 37.42052330280952,
    },
    {
        batch: 30,
        lane: 15,
        value: 41.84527442929091,
    },
    {
        batch: 30,
        lane: 15,
        value: 41.87732717726582,
    },
    {
        batch: 30,
        lane: 15,
        value: 42.65918091623602,
    },
    {
        batch: 30,
        lane: 15,
        value: 42.4203055444657,
    },
    {
        batch: 30,
        lane: 15,
        value: 36.987571324327945,
    },
    {
        batch: 30,
        lane: 15,
        value: 40.07230780906379,
    },
    {
        batch: 30,
        lane: 15,
        value: 38.34629468747364,
    },
    {
        batch: 30,
        lane: 15,
        value: 41.19087771095765,
    },
    {
        batch: 30,
        lane: 15,
        value: 38.81584470551206,
    },
    {
        batch: 30,
        lane: 15,
        value: 39.959228744221605,
    },
    {
        batch: 30,
        lane: 15,
        value: 40.71329282355284,
    },
    {
        batch: 31,
        lane: 1,
        value: 36.41487970049517,
    },
    {
        batch: 31,
        lane: 1,
        value: 37.986782072480864,
    },
    {
        batch: 31,
        lane: 1,
        value: 39.286520947424265,
    },
    {
        batch: 31,
        lane: 1,
        value: 43.75208771131937,
    },
    {
        batch: 31,
        lane: 1,
        value: 36.94949957864194,
    },
    {
        batch: 31,
        lane: 1,
        value: 41.249102290560906,
    },
    {
        batch: 31,
        lane: 1,
        value: 46.40438228158988,
    },
    {
        batch: 31,
        lane: 1,
        value: 33.98303654954459,
    },
    {
        batch: 31,
        lane: 1,
        value: 43.65938355714826,
    },
    {
        batch: 31,
        lane: 1,
        value: 40.374263076961896,
    },
    {
        batch: 31,
        lane: 1,
        value: 39.47441535838174,
    },
    {
        batch: 31,
        lane: 1,
        value: 43.64542097832381,
    },
    {
        batch: 31,
        lane: 1,
        value: 43.295721243280646,
    },
    {
        batch: 31,
        lane: 1,
        value: 37.10168878326421,
    },
    {
        batch: 31,
        lane: 1,
        value: 40.04292776430318,
    },
    {
        batch: 32,
        lane: 2,
        value: 38.451698800767744,
    },
    {
        batch: 32,
        lane: 2,
        value: 42.8695424771875,
    },
    {
        batch: 32,
        lane: 2,
        value: 41.19168235963981,
    },
    {
        batch: 32,
        lane: 2,
        value: 42.844755977937496,
    },
    {
        batch: 32,
        lane: 2,
        value: 35.760289616146466,
    },
    {
        batch: 32,
        lane: 2,
        value: 38.00210667099278,
    },
    {
        batch: 32,
        lane: 2,
        value: 37.95722350812836,
    },
    {
        batch: 32,
        lane: 2,
        value: 41.01550612184644,
    },
    {
        batch: 32,
        lane: 2,
        value: 48.9827863723994,
    },
    {
        batch: 32,
        lane: 2,
        value: 44.671889231149,
    },
    {
        batch: 32,
        lane: 2,
        value: 34.844221384361134,
    },
    {
        batch: 32,
        lane: 2,
        value: 35.16828024156863,
    },
    {
        batch: 32,
        lane: 2,
        value: 39.68011164177724,
    },
    {
        batch: 32,
        lane: 2,
        value: 38.07601506024631,
    },
    {
        batch: 32,
        lane: 2,
        value: 41.742398408147395,
    },
    {
        batch: 33,
        lane: 3,
        value: 36.8912353888988,
    },
    {
        batch: 33,
        lane: 3,
        value: 39.9605324588889,
    },
    {
        batch: 33,
        lane: 3,
        value: 36.427059241722944,
    },
    {
        batch: 33,
        lane: 3,
        value: 35.90682350118287,
    },
    {
        batch: 33,
        lane: 3,
        value: 37.56921321839344,
    },
    {
        batch: 33,
        lane: 3,
        value: 39.967598683867365,
    },
    {
        batch: 33,
        lane: 3,
        value: 36.257585488413014,
    },
    {
        batch: 33,
        lane: 3,
        value: 41.380501407424845,
    },
    {
        batch: 33,
        lane: 3,
        value: 36.40514968598189,
    },
    {
        batch: 33,
        lane: 3,
        value: 38.86249643628554,
    },
    {
        batch: 33,
        lane: 3,
        value: 39.66318045109303,
    },
    {
        batch: 33,
        lane: 3,
        value: 38.639036194699315,
    },
    {
        batch: 33,
        lane: 3,
        value: 41.805984694422875,
    },
    {
        batch: 33,
        lane: 3,
        value: 40.26117115443981,
    },
    {
        batch: 33,
        lane: 3,
        value: 36.35955680331356,
    },
    {
        batch: 34,
        lane: 4,
        value: 39.399497068198976,
    },
    {
        batch: 34,
        lane: 4,
        value: 42.841988135093295,
    },
    {
        batch: 34,
        lane: 4,
        value: 45.691229847013716,
    },
    {
        batch: 34,
        lane: 4,
        value: 42.82823753881692,
    },
    {
        batch: 34,
        lane: 4,
        value: 45.16078434020625,
    },
    {
        batch: 34,
        lane: 4,
        value: 42.10802687672571,
    },
    {
        batch: 34,
        lane: 4,
        value: 40.82149338885098,
    },
    {
        batch: 34,
        lane: 4,
        value: 43.32063270587611,
    },
    {
        batch: 34,
        lane: 4,
        value: 39.8614797593234,
    },
    {
        batch: 34,
        lane: 4,
        value: 44.28064915040787,
    },
    {
        batch: 34,
        lane: 4,
        value: 21.04899889298407,
    },
    {
        batch: 34,
        lane: 4,
        value: 23.99676196303496,
    },
    {
        batch: 34,
        lane: 4,
        value: 6.23295942748677,
    },
    {
        batch: 34,
        lane: 4,
        value: 37.84566954240212,
    },
    {
        batch: 34,
        lane: 4,
        value: 43.716486025598776,
    },
    {
        batch: 35,
        lane: 5,
        value: 42.73714414868521,
    },
    {
        batch: 35,
        lane: 5,
        value: 42.4767632541197,
    },
    {
        batch: 35,
        lane: 5,
        value: 42.45289193444071,
    },
    {
        batch: 35,
        lane: 5,
        value: 36.76274247225883,
    },
    {
        batch: 35,
        lane: 5,
        value: 26.28795802777097,
    },
    {
        batch: 35,
        lane: 5,
        value: 28.78283784722921,
    },
    {
        batch: 35,
        lane: 5,
        value: 11.030771104363545,
    },
    {
        batch: 35,
        lane: 5,
        value: 33.79845005378402,
    },
    {
        batch: 35,
        lane: 5,
        value: 45.06372564628769,
    },
    {
        batch: 35,
        lane: 5,
        value: 41.08616800697044,
    },
    {
        batch: 35,
        lane: 5,
        value: 41.82567261726546,
    },
    {
        batch: 35,
        lane: 5,
        value: 37.845190575334605,
    },
    {
        batch: 35,
        lane: 5,
        value: 40.57192709218063,
    },
    {
        batch: 35,
        lane: 5,
        value: 42.004040093513176,
    },
    {
        batch: 35,
        lane: 5,
        value: 40.869183639538655,
    },
    {
        batch: 36,
        lane: 6,
        value: 38.98204781403241,
    },
    {
        batch: 36,
        lane: 6,
        value: 36.81088068823506,
    },
    {
        batch: 36,
        lane: 6,
        value: 14.36113202149405,
    },
    {
        batch: 36,
        lane: 6,
        value: 17.108161495254706,
    },
    {
        batch: 36,
        lane: 6,
        value: 62.003129764251916,
    },
    {
        batch: 36,
        lane: 6,
        value: 36.475872240688965,
    },
    {
        batch: 36,
        lane: 6,
        value: 39.27939266471983,
    },
    {
        batch: 36,
        lane: 6,
        value: 39.12766828682218,
    },
    {
        batch: 36,
        lane: 6,
        value: 37.2700873056734,
    },
    {
        batch: 36,
        lane: 6,
        value: 36.71359477777899,
    },
    {
        batch: 36,
        lane: 6,
        value: 38.805973904687704,
    },
    {
        batch: 36,
        lane: 6,
        value: 44.82018472178599,
    },
    {
        batch: 36,
        lane: 6,
        value: 40.42682199110196,
    },
    {
        batch: 36,
        lane: 6,
        value: 35.41912695429526,
    },
    {
        batch: 36,
        lane: 6,
        value: 38.22047825260355,
    },
    {
        batch: 37,
        lane: 7,
        value: 43.606881345918644,
    },
    {
        batch: 37,
        lane: 7,
        value: 38.99999450257963,
    },
    {
        batch: 37,
        lane: 7,
        value: 38.37718411018271,
    },
    {
        batch: 37,
        lane: 7,
        value: 40.26625324232294,
    },
    {
        batch: 37,
        lane: 7,
        value: 40.66169329872909,
    },
    {
        batch: 37,
        lane: 7,
        value: 41.27851658242648,
    },
    {
        batch: 37,
        lane: 7,
        value: 39.277495911753626,
    },
    {
        batch: 37,
        lane: 7,
        value: 40.900824562164885,
    },
    {
        batch: 37,
        lane: 7,
        value: 45.18881039298127,
    },
    {
        batch: 37,
        lane: 7,
        value: 39.5823260606924,
    },
    {
        batch: 37,
        lane: 7,
        value: 41.811603981711166,
    },
    {
        batch: 37,
        lane: 7,
        value: 40.09331799596043,
    },
    {
        batch: 37,
        lane: 7,
        value: 40.87704058392576,
    },
    {
        batch: 37,
        lane: 7,
        value: 42.08915232154292,
    },
    {
        batch: 37,
        lane: 7,
        value: 42.31295684506005,
    },
    {
        batch: 38,
        lane: 8,
        value: 42.78575581926129,
    },
    {
        batch: 38,
        lane: 8,
        value: 40.852514985622314,
    },
    {
        batch: 38,
        lane: 8,
        value: 33.89417241133983,
    },
    {
        batch: 38,
        lane: 8,
        value: 40.259613137899464,
    },
    {
        batch: 38,
        lane: 8,
        value: 41.00100972622712,
    },
    {
        batch: 38,
        lane: 8,
        value: 37.51802081199152,
    },
    {
        batch: 38,
        lane: 8,
        value: 38.878742467036936,
    },
    {
        batch: 38,
        lane: 8,
        value: 35.71206222500351,
    },
    {
        batch: 38,
        lane: 8,
        value: 38.66340076537069,
    },
    {
        batch: 38,
        lane: 8,
        value: 42.086837433490714,
    },
    {
        batch: 38,
        lane: 8,
        value: 38.95194725424524,
    },
    {
        batch: 38,
        lane: 8,
        value: 32.63279633153824,
    },
    {
        batch: 38,
        lane: 8,
        value: 41.79469257124621,
    },
    {
        batch: 38,
        lane: 8,
        value: 41.6873204771878,
    },
    {
        batch: 38,
        lane: 8,
        value: 39.80817889170765,
    },
    {
        batch: 39,
        lane: 9,
        value: 37.83368662497685,
    },
    {
        batch: 39,
        lane: 9,
        value: 40.97213269732987,
    },
    {
        batch: 39,
        lane: 9,
        value: 35.87181846669373,
    },
    {
        batch: 39,
        lane: 9,
        value: 35.582658933621985,
    },
    {
        batch: 39,
        lane: 9,
        value: 36.16560531312267,
    },
    {
        batch: 39,
        lane: 9,
        value: 39.713884640320295,
    },
    {
        batch: 39,
        lane: 9,
        value: 43.45507244702508,
    },
    {
        batch: 39,
        lane: 9,
        value: 40.19047375393566,
    },
    {
        batch: 39,
        lane: 9,
        value: 39.78695156600729,
    },
    {
        batch: 39,
        lane: 9,
        value: 37.275948710890155,
    },
    {
        batch: 39,
        lane: 9,
        value: 37.73055485364721,
    },
    {
        batch: 39,
        lane: 9,
        value: 40.81846254887217,
    },
    {
        batch: 39,
        lane: 9,
        value: 35.14062304379953,
    },
    {
        batch: 39,
        lane: 9,
        value: 34.934536354121505,
    },
    {
        batch: 39,
        lane: 9,
        value: 38.22857277602202,
    },
    {
        batch: 40,
        lane: 10,
        value: 36.908744610179355,
    },
    {
        batch: 40,
        lane: 10,
        value: 40.4289127438582,
    },
    {
        batch: 40,
        lane: 10,
        value: 34.831681891551064,
    },
    {
        batch: 40,
        lane: 10,
        value: 35.876049183925716,
    },
    {
        batch: 40,
        lane: 10,
        value: 39.02494946019011,
    },
    {
        batch: 40,
        lane: 10,
        value: 36.167011560792,
    },
    {
        batch: 40,
        lane: 10,
        value: 39.510140297396035,
    },
    {
        batch: 40,
        lane: 10,
        value: 41.7097903913096,
    },
    {
        batch: 40,
        lane: 10,
        value: 38.39084616496195,
    },
    {
        batch: 40,
        lane: 10,
        value: 37.26727409604173,
    },
    {
        batch: 40,
        lane: 10,
        value: 35.98856213972013,
    },
    {
        batch: 40,
        lane: 10,
        value: 45.410343755766796,
    },
    {
        batch: 40,
        lane: 10,
        value: 44.990209124933244,
    },
    {
        batch: 40,
        lane: 10,
        value: 38.47827265858809,
    },
    {
        batch: 40,
        lane: 10,
        value: 39.408947333936645,
    },
    {
        batch: 41,
        lane: 11,
        value: 43.44188436426788,
    },
    {
        batch: 41,
        lane: 11,
        value: 35.18471772410182,
    },
    {
        batch: 41,
        lane: 11,
        value: 37.65458901234287,
    },
    {
        batch: 41,
        lane: 11,
        value: 40.13816682779224,
    },
    {
        batch: 41,
        lane: 11,
        value: 40.22375088546473,
    },
    {
        batch: 41,
        lane: 11,
        value: 44.86839044611298,
    },
    {
        batch: 41,
        lane: 11,
        value: 38.3560384782085,
    },
    {
        batch: 41,
        lane: 11,
        value: 39.87485377103373,
    },
    {
        batch: 41,
        lane: 11,
        value: 45.05102460696152,
    },
    {
        batch: 41,
        lane: 11,
        value: 37.08704011640054,
    },
    {
        batch: 41,
        lane: 11,
        value: 38.07356213110118,
    },
    {
        batch: 41,
        lane: 11,
        value: 40.17023239197395,
    },
    {
        batch: 41,
        lane: 11,
        value: 48.331432593485346,
    },
    {
        batch: 41,
        lane: 11,
        value: 37.98657377832306,
    },
    {
        batch: 41,
        lane: 11,
        value: 40.854604354733574,
    },
    {
        batch: 42,
        lane: 12,
        value: 40.51995732558083,
    },
    {
        batch: 42,
        lane: 12,
        value: 37.1295339328884,
    },
    {
        batch: 42,
        lane: 12,
        value: 38.857828322574505,
    },
    {
        batch: 42,
        lane: 12,
        value: 36.61327844654567,
    },
    {
        batch: 42,
        lane: 12,
        value: 34.959415529129195,
    },
    {
        batch: 42,
        lane: 12,
        value: 36.294712020874165,
    },
    {
        batch: 42,
        lane: 12,
        value: 37.80208233991438,
    },
    {
        batch: 42,
        lane: 12,
        value: 34.9289841738486,
    },
    {
        batch: 42,
        lane: 12,
        value: 35.83026672051409,
    },
    {
        batch: 42,
        lane: 12,
        value: 37.19935955938583,
    },
    {
        batch: 42,
        lane: 12,
        value: 37.02665907719566,
    },
    {
        batch: 42,
        lane: 12,
        value: 39.63095878836516,
    },
    {
        batch: 42,
        lane: 12,
        value: 38.00504669899237,
    },
    {
        batch: 42,
        lane: 12,
        value: 36.508057848870244,
    },
    {
        batch: 42,
        lane: 12,
        value: 35.80134823066924,
    },
    {
        batch: 42,
        lane: 12,
        value: 36.36963531854598,
    },
    {
        batch: 43,
        lane: 13,
        value: 43.755683811526005,
    },
    {
        batch: 43,
        lane: 13,
        value: 40.79727658483958,
    },
    {
        batch: 43,
        lane: 13,
        value: 38.340600758034654,
    },
    {
        batch: 43,
        lane: 13,
        value: 40.46432830864006,
    },
    {
        batch: 43,
        lane: 13,
        value: 39.34533300635078,
    },
    {
        batch: 43,
        lane: 13,
        value: 39.47666706009497,
    },
    {
        batch: 43,
        lane: 13,
        value: 39.07934159025117,
    },
    {
        batch: 43,
        lane: 13,
        value: 32.04978394355814,
    },
    {
        batch: 43,
        lane: 13,
        value: 36.29573308096198,
    },
    {
        batch: 43,
        lane: 13,
        value: 43.30001586345111,
    },
    {
        batch: 43,
        lane: 13,
        value: 39.98367821826641,
    },
    {
        batch: 43,
        lane: 13,
        value: 43.13413374143466,
    },
    {
        batch: 43,
        lane: 13,
        value: 43.56674260993225,
    },
    {
        batch: 43,
        lane: 13,
        value: 36.71762208293892,
    },
    {
        batch: 44,
        lane: 14,
        value: 41.534817495014885,
    },
    {
        batch: 44,
        lane: 14,
        value: 38.28226428543924,
    },
    {
        batch: 44,
        lane: 14,
        value: 40.849241398414925,
    },
    {
        batch: 44,
        lane: 14,
        value: 40.5432397312104,
    },
    {
        batch: 44,
        lane: 14,
        value: 35.4969182524015,
    },
    {
        batch: 44,
        lane: 14,
        value: 41.10062696520283,
    },
    {
        batch: 44,
        lane: 14,
        value: 40.235564414511224,
    },
    {
        batch: 44,
        lane: 14,
        value: 40.428871462093035,
    },
    {
        batch: 44,
        lane: 14,
        value: 40.334661612969406,
    },
    {
        batch: 44,
        lane: 14,
        value: 41.214627821230586,
    },
    {
        batch: 44,
        lane: 14,
        value: 43.216902966233064,
    },
    {
        batch: 44,
        lane: 14,
        value: 39.65642734349915,
    },
    {
        batch: 44,
        lane: 14,
        value: 40.87913517825848,
    },
    {
        batch: 44,
        lane: 14,
        value: 36.65798584822507,
    },
    {
        batch: 44,
        lane: 14,
        value: 42.194399151649826,
    },
    {
        batch: 45,
        lane: 15,
        value: 38.20349016620212,
    },
    {
        batch: 45,
        lane: 15,
        value: 40.04733900976102,
    },
    {
        batch: 45,
        lane: 15,
        value: 41.2585393575018,
    },
    {
        batch: 45,
        lane: 15,
        value: 39.9082499470792,
    },
    {
        batch: 45,
        lane: 15,
        value: 38.47040390591948,
    },
    {
        batch: 45,
        lane: 15,
        value: 43.94507813964308,
    },
    {
        batch: 45,
        lane: 15,
        value: 38.381519419407944,
    },
    {
        batch: 45,
        lane: 15,
        value: 42.4976603756148,
    },
    {
        batch: 45,
        lane: 15,
        value: 37.68410627232727,
    },
    {
        batch: 45,
        lane: 15,
        value: 42.5330317236433,
    },
    {
        batch: 45,
        lane: 15,
        value: 41.497354843767255,
    },
    {
        batch: 45,
        lane: 15,
        value: 42.046452211854245,
    },
    {
        batch: 45,
        lane: 15,
        value: 42.709674628679664,
    },
    {
        batch: 45,
        lane: 15,
        value: 39.32405306790136,
    },
    {
        batch: 45,
        lane: 15,
        value: 41.7946722020964,
    },
    {
        batch: 46,
        lane: 1,
        value: 40.119046666584914,
    },
    {
        batch: 46,
        lane: 1,
        value: 38.392163318652095,
    },
    {
        batch: 46,
        lane: 1,
        value: 42.100549678410076,
    },
    {
        batch: 46,
        lane: 1,
        value: 41.30019326116802,
    },
    {
        batch: 46,
        lane: 1,
        value: 38.804708854002,
    },
    {
        batch: 46,
        lane: 1,
        value: 42.04783449286147,
    },
    {
        batch: 46,
        lane: 1,
        value: 40.229127707856705,
    },
    {
        batch: 46,
        lane: 1,
        value: 40.14992409002322,
    },
    {
        batch: 46,
        lane: 1,
        value: 38.187136879610556,
    },
    {
        batch: 46,
        lane: 1,
        value: 38.49603992193194,
    },
    {
        batch: 46,
        lane: 1,
        value: 40.83784082825254,
    },
    {
        batch: 46,
        lane: 1,
        value: 39.607377647467835,
    },
    {
        batch: 46,
        lane: 1,
        value: 40.73928443317416,
    },
    {
        batch: 46,
        lane: 1,
        value: 43.48638504361634,
    },
    {
        batch: 46,
        lane: 1,
        value: 40.954865544924694,
    },
    {
        batch: 47,
        lane: 2,
        value: 41.73127651413169,
    },
    {
        batch: 47,
        lane: 2,
        value: 38.30174099397905,
    },
    {
        batch: 47,
        lane: 2,
        value: 36.97180309399777,
    },
    {
        batch: 47,
        lane: 2,
        value: 38.5858290298063,
    },
    {
        batch: 47,
        lane: 2,
        value: 38.987757431012824,
    },
    {
        batch: 47,
        lane: 2,
        value: 37.04291868931798,
    },
    {
        batch: 47,
        lane: 2,
        value: 41.498510090221515,
    },
    {
        batch: 47,
        lane: 2,
        value: 39.61489316449528,
    },
    {
        batch: 47,
        lane: 2,
        value: 41.7396206945449,
    },
    {
        batch: 47,
        lane: 2,
        value: 39.64708530405648,
    },
    {
        batch: 47,
        lane: 2,
        value: 40.521458129304975,
    },
    {
        batch: 47,
        lane: 2,
        value: 36.95075200246959,
    },
    {
        batch: 47,
        lane: 2,
        value: 40.99333101952964,
    },
    {
        batch: 47,
        lane: 2,
        value: 40.530011186160806,
    },
    {
        batch: 47,
        lane: 2,
        value: 39.86338957310663,
    },
    {
        batch: 48,
        lane: 3,
        value: 44.21384517511995,
    },
    {
        batch: 48,
        lane: 3,
        value: 38.64458131362971,
    },
    {
        batch: 48,
        lane: 3,
        value: 44.293771219676024,
    },
    {
        batch: 48,
        lane: 3,
        value: 38.149011832398244,
    },
    {
        batch: 48,
        lane: 3,
        value: 39.89361846041008,
    },
    {
        batch: 48,
        lane: 3,
        value: 40.60033967106373,
    },
    {
        batch: 48,
        lane: 3,
        value: 40.961867772484865,
    },
    {
        batch: 48,
        lane: 3,
        value: 39.12862571499134,
    },
    {
        batch: 48,
        lane: 3,
        value: 39.32898833488578,
    },
    {
        batch: 48,
        lane: 3,
        value: 10.389557997852656,
    },
    {
        batch: 48,
        lane: 3,
        value: 40.80322122413045,
    },
    {
        batch: 48,
        lane: 3,
        value: 40.09976065112933,
    },
    {
        batch: 48,
        lane: 3,
        value: 38.61468068223583,
    },
    {
        batch: 48,
        lane: 3,
        value: 45.32259127001476,
    },
    {
        batch: 48,
        lane: 3,
        value: 46.48148577092078,
    },
    {
        batch: 49,
        lane: 4,
        value: 43.71918865081143,
    },
    {
        batch: 49,
        lane: 4,
        value: 46.724794355488775,
    },
    {
        batch: 49,
        lane: 4,
        value: 39.05993465548046,
    },
    {
        batch: 49,
        lane: 4,
        value: 44.42131794823385,
    },
    {
        batch: 49,
        lane: 4,
        value: 13.37879658972543,
    },
    {
        batch: 49,
        lane: 4,
        value: 45.596068319260056,
    },
    {
        batch: 49,
        lane: 4,
        value: 42.33814647221185,
    },
    {
        batch: 49,
        lane: 4,
        value: 42.930647627214576,
    },
    {
        batch: 49,
        lane: 4,
        value: 41.75441578409826,
    },
    {
        batch: 49,
        lane: 4,
        value: 47.52379340444702,
    },
    {
        batch: 49,
        lane: 4,
        value: 37.21370391810083,
    },
    {
        batch: 49,
        lane: 4,
        value: 40.99110583922832,
    },
    {
        batch: 49,
        lane: 4,
        value: 40.39248631854229,
    },
    {
        batch: 49,
        lane: 4,
        value: 38.126402125732966,
    },
    {
        batch: 49,
        lane: 4,
        value: 37.54151808427599,
    },
    {
        batch: 50,
        lane: 5,
        value: 41.16510552318048,
    },
    {
        batch: 50,
        lane: 5,
        value: 36.61612503541621,
    },
    {
        batch: 50,
        lane: 5,
        value: 42.38986634499081,
    },
    {
        batch: 50,
        lane: 5,
        value: 21.33107544337788,
    },
    {
        batch: 50,
        lane: 5,
        value: 42.265618577640645,
    },
    {
        batch: 50,
        lane: 5,
        value: 44.727246487645274,
    },
    {
        batch: 50,
        lane: 5,
        value: 43.02838434282655,
    },
    {
        batch: 50,
        lane: 5,
        value: 41.6916128526507,
    },
    {
        batch: 50,
        lane: 5,
        value: 39.459917412379234,
    },
    {
        batch: 50,
        lane: 5,
        value: 41.092434769606015,
    },
    {
        batch: 50,
        lane: 5,
        value: 43.753050864328245,
    },
    {
        batch: 50,
        lane: 5,
        value: 41.32087591733248,
    },
    {
        batch: 50,
        lane: 5,
        value: 41.59237692566172,
    },
    {
        batch: 50,
        lane: 5,
        value: 42.495124043746564,
    },
    {
        batch: 50,
        lane: 5,
        value: 41.70864635530832,
    },
    {
        batch: 51,
        lane: 6,
        value: 36.46861475662357,
    },
    {
        batch: 51,
        lane: 6,
        value: 57.346399812352544,
    },
    {
        batch: 51,
        lane: 6,
        value: 38.144332647659965,
    },
    {
        batch: 51,
        lane: 6,
        value: 38.22840884773607,
    },
    {
        batch: 51,
        lane: 6,
        value: 36.45232757913293,
    },
    {
        batch: 51,
        lane: 6,
        value: 37.52036159096248,
    },
    {
        batch: 51,
        lane: 6,
        value: 37.69887795538884,
    },
    {
        batch: 51,
        lane: 6,
        value: 37.041444735150655,
    },
    {
        batch: 51,
        lane: 6,
        value: 36.87422965911491,
    },
    {
        batch: 51,
        lane: 6,
        value: 40.55981518220154,
    },
    {
        batch: 51,
        lane: 6,
        value: 39.08909979888182,
    },
    {
        batch: 51,
        lane: 6,
        value: 36.78447127676043,
    },
    {
        batch: 51,
        lane: 6,
        value: 39.98188507403936,
    },
    {
        batch: 51,
        lane: 6,
        value: 38.1415005702333,
    },
    {
        batch: 51,
        lane: 6,
        value: 41.20108550507721,
    },
    {
        batch: 52,
        lane: 7,
        value: 38.59763213059657,
    },
    {
        batch: 52,
        lane: 7,
        value: 40.53776668893948,
    },
    {
        batch: 52,
        lane: 7,
        value: 41.000629924254575,
    },
    {
        batch: 52,
        lane: 7,
        value: 39.01531527169034,
    },
    {
        batch: 52,
        lane: 7,
        value: 39.55539565940652,
    },
    {
        batch: 52,
        lane: 7,
        value: 40.61080632289213,
    },
    {
        batch: 52,
        lane: 7,
        value: 38.28272420261899,
    },
    {
        batch: 52,
        lane: 7,
        value: 40.946524045289884,
    },
    {
        batch: 52,
        lane: 7,
        value: 38.86804233965632,
    },
    {
        batch: 52,
        lane: 7,
        value: 38.06101944137646,
    },
    {
        batch: 52,
        lane: 7,
        value: 39.77138244239364,
    },
    {
        batch: 52,
        lane: 7,
        value: 39.34367013215927,
    },
    {
        batch: 52,
        lane: 7,
        value: 38.34691610245929,
    },
    {
        batch: 52,
        lane: 7,
        value: 43.123156608021546,
    },
    {
        batch: 52,
        lane: 7,
        value: 35.067968737299715,
    },
    {
        batch: 53,
        lane: 8,
        value: 40.5373220099712,
    },
    {
        batch: 53,
        lane: 8,
        value: 40.68505266292338,
    },
    {
        batch: 53,
        lane: 8,
        value: 42.615785094106464,
    },
    {
        batch: 53,
        lane: 8,
        value: 41.38840131146739,
    },
    {
        batch: 53,
        lane: 8,
        value: 36.99248002384559,
    },
    {
        batch: 53,
        lane: 8,
        value: 44.81907287196579,
    },
    {
        batch: 53,
        lane: 8,
        value: 39.43422243102248,
    },
    {
        batch: 53,
        lane: 8,
        value: 39.280175125488846,
    },
    {
        batch: 53,
        lane: 8,
        value: 40.31775186465058,
    },
    {
        batch: 53,
        lane: 8,
        value: 38.586344312414695,
    },
    {
        batch: 53,
        lane: 8,
        value: 39.61259335187012,
    },
    {
        batch: 53,
        lane: 8,
        value: 39.91509037065237,
    },
    {
        batch: 53,
        lane: 8,
        value: 37.724885960380576,
    },
    {
        batch: 53,
        lane: 8,
        value: 39.987538690301704,
    },
    {
        batch: 53,
        lane: 8,
        value: 40.92035405904992,
    },
    {
        batch: 54,
        lane: 9,
        value: 39.78759108877267,
    },
    {
        batch: 54,
        lane: 9,
        value: 40.56051515010229,
    },
    {
        batch: 54,
        lane: 9,
        value: 41.75346495230907,
    },
    {
        batch: 54,
        lane: 9,
        value: 42.316623482170925,
    },
    {
        batch: 54,
        lane: 9,
        value: 39.46703370780075,
    },
    {
        batch: 54,
        lane: 9,
        value: 43.55738645280047,
    },
    {
        batch: 54,
        lane: 9,
        value: 33.932923156279664,
    },
    {
        batch: 54,
        lane: 9,
        value: 42.996183484475274,
    },
    {
        batch: 54,
        lane: 9,
        value: 39.34140057024459,
    },
    {
        batch: 54,
        lane: 9,
        value: 33.80041744929211,
    },
    {
        batch: 54,
        lane: 9,
        value: 39.293092496026674,
    },
    {
        batch: 54,
        lane: 9,
        value: 40.494752992137535,
    },
    {
        batch: 54,
        lane: 9,
        value: 37.99248766295409,
    },
    {
        batch: 54,
        lane: 9,
        value: 41.3851353682968,
    },
    {
        batch: 54,
        lane: 9,
        value: 42.74687152120252,
    },
    {
        batch: 55,
        lane: 10,
        value: 40.71718383320887,
    },
    {
        batch: 55,
        lane: 10,
        value: 41.082639572190374,
    },
    {
        batch: 55,
        lane: 10,
        value: 28.3921504625134,
    },
    {
        batch: 55,
        lane: 10,
        value: 43.87114394516391,
    },
    {
        batch: 55,
        lane: 10,
        value: 44.11413954168917,
    },
    {
        batch: 55,
        lane: 10,
        value: 41.05357014731348,
    },
    {
        batch: 55,
        lane: 10,
        value: 42.865134262887565,
    },
    {
        batch: 55,
        lane: 10,
        value: 43.73226829335243,
    },
    {
        batch: 55,
        lane: 10,
        value: 37.8242649979145,
    },
    {
        batch: 55,
        lane: 10,
        value: 40.92336055589474,
    },
    {
        batch: 55,
        lane: 10,
        value: 43.25444124174432,
    },
    {
        batch: 55,
        lane: 10,
        value: 41.10609460307571,
    },
    {
        batch: 55,
        lane: 10,
        value: 41.91357981106568,
    },
    {
        batch: 55,
        lane: 10,
        value: 40.39487069655852,
    },
    {
        batch: 55,
        lane: 10,
        value: 42.04200476129088,
    },
    {
        batch: 56,
        lane: 11,
        value: 38.20087812973794,
    },
    {
        batch: 56,
        lane: 11,
        value: 37.97776277876456,
    },
    {
        batch: 56,
        lane: 11,
        value: 38.917913913060225,
    },
    {
        batch: 56,
        lane: 11,
        value: 39.01925520375745,
    },
    {
        batch: 56,
        lane: 11,
        value: 40.091895868321814,
    },
    {
        batch: 56,
        lane: 11,
        value: 41.05985151687806,
    },
    {
        batch: 56,
        lane: 11,
        value: 40.64336893103086,
    },
    {
        batch: 56,
        lane: 11,
        value: 38.86016459481104,
    },
    {
        batch: 56,
        lane: 11,
        value: 36.64358975842434,
    },
    {
        batch: 56,
        lane: 11,
        value: 40.48306996328479,
    },
    {
        batch: 56,
        lane: 11,
        value: 40.7748027362006,
    },
    {
        batch: 56,
        lane: 11,
        value: 40.681547873786684,
    },
    {
        batch: 56,
        lane: 11,
        value: 40.079221800018104,
    },
    {
        batch: 56,
        lane: 11,
        value: 40.61694998969305,
    },
    {
        batch: 56,
        lane: 11,
        value: 38.90556380781348,
    },
    {
        batch: 57,
        lane: 12,
        value: 39.87159944692019,
    },
    {
        batch: 57,
        lane: 12,
        value: 39.73634305518615,
    },
    {
        batch: 57,
        lane: 12,
        value: 38.72013000157235,
    },
    {
        batch: 57,
        lane: 12,
        value: 42.867781691634214,
    },
    {
        batch: 57,
        lane: 12,
        value: 41.87861283363596,
    },
    {
        batch: 57,
        lane: 12,
        value: 40.59815738809371,
    },
    {
        batch: 57,
        lane: 12,
        value: 38.975392712551724,
    },
    {
        batch: 57,
        lane: 12,
        value: 39.69819781292639,
    },
    {
        batch: 57,
        lane: 12,
        value: 37.48993992364264,
    },
    {
        batch: 57,
        lane: 12,
        value: 39.04189641285586,
    },
    {
        batch: 57,
        lane: 12,
        value: 40.26943329586581,
    },
    {
        batch: 57,
        lane: 12,
        value: 38.37944886548508,
    },
    {
        batch: 57,
        lane: 12,
        value: 43.96944990765222,
    },
    {
        batch: 57,
        lane: 12,
        value: 42.90757332280381,
    },
    {
        batch: 57,
        lane: 12,
        value: 41.1552767208826,
    },
    {
        batch: 58,
        lane: 13,
        value: 38.408730207472956,
    },
    {
        batch: 58,
        lane: 13,
        value: 40.11641267649498,
    },
    {
        batch: 58,
        lane: 13,
        value: 38.02675887649253,
    },
    {
        batch: 58,
        lane: 13,
        value: 41.743457225799595,
    },
    {
        batch: 58,
        lane: 13,
        value: 37.58145536474143,
    },
    {
        batch: 58,
        lane: 13,
        value: 38.18566830595881,
    },
    {
        batch: 58,
        lane: 13,
        value: 38.38146817150048,
    },
    {
        batch: 58,
        lane: 13,
        value: 35.77071611195158,
    },
    {
        batch: 58,
        lane: 13,
        value: 42.64237855196335,
    },
    {
        batch: 58,
        lane: 13,
        value: 40.50913342097841,
    },
    {
        batch: 58,
        lane: 13,
        value: 38.05020285975816,
    },
    {
        batch: 58,
        lane: 13,
        value: 31.2550380314577,
    },
    {
        batch: 58,
        lane: 13,
        value: 35.658645365879536,
    },
    {
        batch: 58,
        lane: 13,
        value: 36.714122119045875,
    },
    {
        batch: 58,
        lane: 13,
        value: 43.899314045145246,
    },
    {
        batch: 59,
        lane: 14,
        value: 36.0857430929334,
    },
    {
        batch: 59,
        lane: 14,
        value: 38.70905766899038,
    },
    {
        batch: 59,
        lane: 14,
        value: 39.31432051517068,
    },
    {
        batch: 59,
        lane: 14,
        value: 40.78970573733483,
    },
    {
        batch: 59,
        lane: 14,
        value: 40.94367921834984,
    },
    {
        batch: 59,
        lane: 14,
        value: 38.4184132392291,
    },
    {
        batch: 59,
        lane: 14,
        value: 34.96575969474355,
    },
    {
        batch: 59,
        lane: 14,
        value: 42.78412897709443,
    },
    {
        batch: 59,
        lane: 14,
        value: 42.6547022105037,
    },
    {
        batch: 59,
        lane: 14,
        value: 40.94527876546302,
    },
    {
        batch: 59,
        lane: 14,
        value: 39.12740022766119,
    },
    {
        batch: 59,
        lane: 14,
        value: 35.87573250903585,
    },
    {
        batch: 59,
        lane: 14,
        value: 38.84264111829327,
    },
    {
        batch: 59,
        lane: 14,
        value: 39.0421559395179,
    },
    {
        batch: 59,
        lane: 14,
        value: 35.751662874189385,
    },
    {
        batch: 60,
        lane: 15,
        value: 42.367969313755665,
    },
    {
        batch: 60,
        lane: 15,
        value: 38.64952246609946,
    },
    {
        batch: 60,
        lane: 15,
        value: 33.42638824769015,
    },
    {
        batch: 60,
        lane: 15,
        value: 40.318862620184866,
    },
    {
        batch: 60,
        lane: 15,
        value: 38.34586457136164,
    },
    {
        batch: 60,
        lane: 15,
        value: 40.44034799174058,
    },
    {
        batch: 60,
        lane: 15,
        value: 45.28159795105458,
    },
    {
        batch: 60,
        lane: 15,
        value: 44.1418762596846,
    },
    {
        batch: 60,
        lane: 15,
        value: 35.78044524539491,
    },
    {
        batch: 60,
        lane: 15,
        value: 32.931695452928636,
    },
    {
        batch: 60,
        lane: 15,
        value: 44.020447497903206,
    },
    {
        batch: 60,
        lane: 15,
        value: 41.832582853314925,
    },
    {
        batch: 60,
        lane: 15,
        value: 44.907948092969995,
    },
    {
        batch: 60,
        lane: 15,
        value: 32.864627060881496,
    },
    {
        batch: 60,
        lane: 15,
        value: 38.15174957929425,
    },
];
