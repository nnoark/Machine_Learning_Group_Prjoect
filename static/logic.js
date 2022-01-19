var regionObjects = [
    {
        label: "il",
        value: "Illinois",
        regions: ['bloomington-normal', 'chicago', 'decatur', 'la salle co',
        'quad cities, IA/IL', 'peoria', 'champaign urbana', 'st louis, MO',
        'springfield', 'rockford', 'southern illinois',
        'mattoon-charleston', 'western IL']
    },
    {
        label: "in",
        value: "Indiana",
        regions: ['bloomington', 'evansville', 'fort wayne', 'indianapolis',
        'south bend / michiana', 'richmond', 'muncie / anderson',
        'lafayette / west lafayette', 'kokomo', 'terre haute']
    },
    {
        label: "mi",
        value: "Michigan",
        regions: ['ann arbor', 'battle creek', 'detroit metro', 'holland', 'flint',
        'kalamazoo', 'lansing', 'monroe', 'saginaw-midland-baycity',
        'grand rapids', 'central michigan', 'northern michigan', 'jackson',
        'upper peninsula', 'muskegon', 'southwest michigan', 'the thumb',
        'port huron']
    },
    {
        label: "mn",
        value: "Minnesota",
        regions:['bemidji', 'brainerd', 'duluth / superior', 'fargo / moorhead',
        'minneapolis / st paul', 'st cloud', 'rochester', 'mankato',
        'southwest MN']
    },
    {
        label: 'ny',
        value: 'New York',
        regions: ['bemidji', 'brainerd', 'duluth / superior', 'fargo / moorhead',
        'minneapolis / st paul', 'st cloud', 'rochester', 'mankato',
        'southwest MN']
    },
    {
        label: 'oh',
        value: 'Ohio',
        regions: ['cincinnati', 'akron / canton', 'columbus', 'dayton / springfield',
        'lima / findlay', 'northern panhandle', 'toledo',
        'zanesville / cambridge', 'ashtabula', 'chillicothe',
        'tuscarawas co', 'cleveland', 'athens', 'mansfield',
        'parkersburg-marietta', 'sandusky', 'youngstown']
    },
    {
        label: 'pa',
        value: 'Pennsylvania',
        regions: ['philadelphia', 'erie', 'pittsburgh', 'harrisburg',
        'altoona-johnstown', 'williamsport', 'lancaster', 'state college',
        'lehigh valley', 'scranton / wilkes-barre', 'meadville', 'reading',
        'york', 'poconos']
    },
    {
        label: 'wi',
        value: 'Wisconsin',
        regions: ['madison', 'milwaukee', 'wausau', 'kenosha-racine', 'green bay',
        'la crosse', 'appleton-oshkosh-FDL', 'eau claire',
        'duluth / superior', 'janesville', 'sheboygan', 'northern WI']
    }

]

// function for region dropdown to be conditional on state selection
function region_change() {
    var state = document.getElementById("state").value;
    var region = document.getElementById("region");
    if (state == "") {
        region.disabled = true;
    } else {
        region.disabled = false;
    }
}

function submitButton() {
    
}