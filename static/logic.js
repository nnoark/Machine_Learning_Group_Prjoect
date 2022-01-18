// function for region dropdown to be conditional on state selection
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
    }
]

function region_change() {
    var state = document.getElementById("state").value;
    var region = document.getElementById("region");
    if (state == "") {
        region.disabled = true;
    } else {
        region.disabled = false;
    }
}

