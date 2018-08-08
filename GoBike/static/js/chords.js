
/*/////////////////// Set up the Data ///////////////////////*/

var NameProvider = ['Anza Vista',
					'Lower Haight',
					'The Castro',
					'Western Addition',
					'Rincon Hill',
					'South of Market',
					'Financial District',
					'Mission District',
					'Dogpatch',
					'Embarcadero',
					'Design District',
					'Lower Nob Hill',
					'Chinatown',
					'Fillmore District',
					'Civic Center',
					'North of the Panhandle',
					'Alamo Square',
					'Potrero Hill',
					'Mission Dolores',
					'Central Waterfront',
					'Tenderloin',
					'Hayes Valley',
					'Mid-Market',
					'Mission Bay',
					'Bernal Heights',
					'South Park',
					'Panhandle',
					'The East Cut',
					'China Basin',
					'Noe Valley'];
	

var matrix = [
	[0.01904, 0.0101, 0.0024, 0.0001, 0.00221, 0.00279, 0.03616, 0.00029, 0, 0.00817, 0.01894, 0.03423, 0.01327, 0.00548, 0.0025, 0.01058, 0.02019, 0.01462, 0.00769, 0.00279, 0.01529, 0.00596, 0.00135, 0.00058, 0.00519, 0.05346, 0.00587, 0.00875, 0.00067, 0.00462],			// Anza Vista
	[0.01039, 0.00837, 0.0051, 0.00096, 0.01615, 0.00125, 0.07895, 0.00212, 0.00135, 0.00914, 0.01885, 0.03914, 0.03846, 0.0199, 0.00356, 0.01298, 0.05019, 0.07481, 0.05394, 0.00365, 0.03721, 0.01125, 0.00442, 0.00154, 0.00135, 0.20501, 0.06539, 0.04827, 0.00702, 0.03183],	// Lower Haight
	[0.01615, 0.0075, 0.04481, 0.00702, 0.04404, 0.00413, 0.12895, 0.0026, 0.00779, 0.01962, 0.01962, 0.06106, 0.03654, 0.04452, 0.00654, 0.02991, 0.09779, 0.46627, 0.21491, 0.02106, 0.0351, 0.01058, 0.02567, 0.01481, 0.00865, 0.44733, 0.03683, 0.18434, 0.00452, 0.08529],	// The Castro
	[0.01664, 0.00413, 0.01115, 0.00135, 0.04241, 0.00404, 0.24569, 0.00231, 0.00269, 0.01519, 0.015, 0.09645, 0.03991, 0.0476, 0.00481, 0.04058, 0.07048, 0.20193, 0.12693, 0.00789, 0.03635, 0.01577, 0.01817, 0.00346, 0.00673, 0.4557, 0.0601, 0.13481, 0.01221, 0.05914],		// Western Addition
	[0.00125, 0.00048, 0.00163, 0.00519, 0.22578, 0.00808, 0.05548, 0.01558, 0.01769, 0.15433, 0.00721, 0.10683, 0.00442, 0.00096, 0.01452, 0.00471, 0.42281, 0.03596, 0.00865, 0.00394, 0.00163, 0.00096, 0.02952, 0.02587, 0.03183, 0.49685, 0.02452, 0.00558, 0.04269, 0.00317], // Rincon Hill
	[0.05375, 0.02269, 0.14808, 0.09279, 1.98346, 0.17818, 1.51873, 0.08366, 0.20588, 2.18636, 0.15289, 1.59517, 0.26972, 0.08135, 0.17828, 0.28915, 4.48628, 1.36228, 0.57262, 0.08789, 0.10049, 0.02058, 0.37733, 0.72494, 0.52589, 6.78312, 0.64003, 0.24395, 0.2679, 0.20953],  // South of Market
	[0.02106, 0.0125, 0.01442, 0.01615, 0.31838, 0.11001, 0.27203, 0.00615, 0.04269, 0.62772, 0.03183, 0.73677, 0.05645, 0.01298, 0.11174, 0.07308, 1.04274, 0.14222, 0.0725, 0.02519, 0.0251, 0.00635, 0.05375, 0.09212, 0.03491, 1.49911, 0.18693, 0.03106, 0.0627, 0.05039],		// Financial District
	[0.02029, 0.00779, 0.47329, 0.06356, 0.22395, 0.00962, 0.41127, 0.045, 0.04846, 0.08404, 0.03519, 0.18068, 0.08183, 0.03683, 0.02106, 0.09549, 0.63099, 2.67869, 0.82187, 0.2453, 0.04673, 0.0124, 0.35425, 0.05577, 0.03442, 1.54306, 0.15597, 0.34117, 0.03866, 0.12058],		// Mission District
	[0.00067, 0.0001, 0.00923, 0.02808, 0.10395, 0.00221, 0.04289, 0.0024, 0.01808, 0.07568, 0.00192, 0.05385, 0.00269, 0.00058, 0.00279, 0.0049, 0.09366, 0.04443, 0.01279, 0.00298, 0.00029, 0.00038, 0.0702, 0.00981, 0.0076, 0.20636, 0.00942, 0.00558, 0.0074, 0.00202],		// Dogpatch
	[0.0024, 0.00606, 0.01, 0.02029, 0.8635, 0.07558, 0.11856, 0.01625, 0.06039, 1.74182, 0.0151, 0.66157, 0.01808, 0.00394, 0.0551, 0.02337, 0.75984, 0.05943, 0.02106, 0.00394, 0.00644, 0.00135, 0.08885, 0.09702, 0.0625, 1.96173, 0.11539, 0.00837, 0.13328, 0.01702],			// Embarcadero
	[0.00048, 0.00077, 0.0025, 0.00346, 0.02019, 0.00115, 0.01144, 0.00789, 0.00346, 0.0151, 0.00106, 0.00894, 0.00404, 0.00048, 0.00144, 0.02154, 0.07645, 0.04144, 0.00712, 0.00048, 0.00058, 0.0001, 0.01481, 0.00615, 0.00212, 0.06404, 0.00789, 0.00221, 0.00298, 0.00106],	// Design District
	[0.00817, 0.00375, 0.00288, 0.00029, 0.07183, 0.01481, 0.08597, 0.00202, 0.00288, 0.06154, 0.01221, 0.13299, 0.01837, 0.0024, 0.02039, 0.01519, 0.09914, 0.04443, 0.01394, 0.00702, 0.0124, 0.00221, 0.00856, 0.01404, 0.02202, 0.29876, 0.02971, 0.00798, 0.03337, 0.00769],	// Lower Nob Hill
	[0.00221, 0.00317, 0.00183, 0.00115, 0.02125, 0.01914, 0.03404, 0.00087, 0.00288, 0.07116, 0.00856, 0.16635, 0.00577, 0.00067, 0.02385, 0.00615, 0.06654, 0.01135, 0.00885, 0.00202, 0.0051, 0.0001, 0.00462, 0.02144, 0.00337, 0.28819, 0.01827, 0.00385, 0.01865, 0.0076],	// Chinatown
	[0.04404, 0.0176, 0.00625, 0.00067, 0.02769, 0.0049, 0.18664, 0.01308, 0.00481, 0.01356, 0.03471, 0.0451, 0.07289, 0.01144, 0.00789, 0.01346, 0.06433, 0.04519, 0.02106, 0.00221, 0.02135, 0.0076, 0.00481, 0.01135, 0.00433, 0.1927, 0.03856, 0.01596, 0.01058, 0.01654], 		// Filmore District
	[0.04808, 0.03077, 0.06529, 0.00808, 0.11462, 0.02481, 0.46175, 0.04606, 0.03567, 0.14299, 0.14337, 0.30213, 0.20847, 0.03567, 0.04837, 0.13106, 0.98591, 0.42069, 0.30136, 0.03337, 0.05635, 0.0125, 0.05337, 0.04904, 0.02375, 1.92461, 0.29723, 0.11626, 0.0825, 0.16914], 	// Civic Center
	[0.03769, 0.02317, 0.00654, 0.00173, 0.03587, 0.00481, 0.11289, 0.00087, 0.00135, 0.02183, 0.03279, 0.11039, 0.03837, 0.04077, 0.0099, 0.05491, 0.05366, 0.09577, 0.08308, 0.0026, 0.13587, 0.04616, 0.00875, 0.00212, 0.00269, 0.31559, 0.04452, 0.0525, 0.00529, 0.03241],	// North of Panhandle
	[0.01664, 0.01558, 0.00452, 0.00144, 0.02692, 0.00365, 0.09539, 0.00587, 0.00087, 0.00846, 0.065, 0.05154, 0.02433, 0.01125, 0.00712, 0.02317, 0.05068, 0.03856, 0.03856, 0.00183, 0.04048, 0.00385, 0.0175, 0.00221, 0.005, 0.15914, 0.01721, 0.02491, 0.0074, 0.01779], 		// Alamo Square
	[0.00394, 0.0025, 0.01298, 0.05693, 0.1102, 0.00337, 0.03837, 0.01298, 0.06385, 0.10529, 0.0051, 0.0702, 0.01106, 0.00481, 0.00529, 0.03548, 0.21116, 0.29213, 0.08039, 0.01029, 0.00423, 0.00115, 0.12549, 0.03279, 0.04923, 0.36483, 0.05433, 0.0201, 0.01231, 0.00952],		// Potrero Hill
	[0.01885, 0.00856, 0.14645, 0.01404, 0.05279, 0.00817, 0.31934, 0.00452, 0.01058, 0.0225, 0.01798, 0.07923, 0.05298, 0.0375, 0.0101, 0.0675, 0.20847, 0.84946, 0.35713, 0.06385, 0.03808, 0.00923, 0.07452, 0.02548, 0.0099, 0.74186, 0.07029, 0.19857, 0.03048, 0.09924], 		// Mission Dolores
	[0.00029, 0.0001, 0.02837, 0.01529, 0.03548, 0.00154, 0.01058, 0.00808, 0.02115, 0.04702, 0.00096, 0.03567, 0.00231, 0.00106, 0.00135, 0.00356, 0.02471, 0.07712, 0.01798, 0.01644, 0.00163, 0.00048, 0.04856, 0.00202, 0.00548, 0.07356, 0.0025, 0.0126, 0.00096, 0.00125],	// Central Waterfront
	[0.0174, 0.00942, 0.01414, 0.00269, 0.06789, 0.01808, 0.30877, 0.00808, 0.00779, 0.09683, 0.03077, 0.14433, 0.06491, 0.025, 0.02154, 0.04741, 0.56012, 0.16126, 0.08375, 0.00923, 0.02452, 0.01135, 0.03991, 0.0151, 0.01644, 0.59195, 0.09693, 0.03587, 0.02404, 0.05481], 	// Tenderloin
	[0.01625, 0.00798, 0.02077, 0.00115, 0.03683, 0.00413, 0.25136, 0.01346, 0.0024, 0.04029, 0.07366, 0.09049, 0.05298, 0.02808, 0.01298, 0.02558, 0.12703, 0.09597, 0.05721, 0.00452, 0.03529, 0.00615, 0.01442, 0.0051, 0.00933, 0.42069, 0.04827, 0.04519, 0.00731, 0.04269], 	// Hayes Valley
	[0.005, 0.00375, 0.005, 0.00125, 0.01375, 0.00683, 0.11549, 0.00452, 0.00154, 0.03067, 0.01471, 0.09875, 0.01962, 0.00519, 0.01452, 0.04933, 0.14328, 0.055, 0.04462, 0.00433, 0.01106, 0.00202, 0.0301, 0.01173, 0.00433, 0.38088, 0.06125, 0.02346, 0.01702, 0.02404],		// Mid-Market
	[0.02019, 0.01308, 0.04019, 0.03366, 0.40704, 0.0225, 0.65032, 0.07981, 0.09856, 0.97668, 0.04443, 1.02293, 0.07702, 0.02144, 0.0426, 0.33252, 1.44921, 0.54676, 0.16068, 0.01596, 0.01875, 0.00462, 0.19097, 0.30021, 0.10231, 3.75336, 0.3831, 0.05914, 0.28598, 0.04693],	// Mission Bay
	[0.00279, 0.00077, 0.09279, 0.04654, 0.01317, 0.00163, 0.11539, 0.00654, 0.0124, 0.01164, 0.00558, 0.03067, 0.01471, 0.00288, 0.0026, 0.01481, 0.08183, 0.52685, 0.13683, 0.05962, 0.00692, 0.00173, 0.01346, 0.00875, 0.00702, 0.23126, 0.01789, 0.03875, 0.00481, 0.01308], 	// Bernal Heights
	[0.00077, 0.00298, 0.00548, 0.00317, 0.02192, 0.00375, 0.025, 0.00317, 0.00692, 0.0602, 0.00327, 0.05366, 0.00596, 0.00202, 0.00981, 0.0049, 0.08472, 0.03702, 0.01423, 0.00519, 0.00183, 0.00135, 0.02529, 0.0575, 0.01192, 0.41435, 0.01885, 0.00865, 0.01202, 0.00385],		// South Park
	[0.00442, 0.00663, 0.00288, 0.00029, 0.00279, 0.00048, 0.02673, 0.00019, 0.00077, 0.00538, 0.00942, 0.02798, 0.00817, 0.01423, 0.00106, 0.00356, 0.01664, 0.02539, 0.0174, 0.00154, 0.03644, 0.01789, 0.00173, 0.00683, 0.00356, 0.08645, 0.00914, 0.02346, 0.00577, 0.02115],	// Panhandle
	[0.00404, 0.00038, 0.0049, 0.00308, 0.07539, 0.00596, 0.06462, 0.00385, 0.00519, 0.09587, 0.00346, 0.04808, 0.00817, 0.00163, 0.0099, 0.01327, 0.30752, 0.05375, 0.01817, 0.00452, 0.00269, 0.00067, 0.01664, 0.01269, 0.01885, 0.3129, 0.02019, 0.00885, 0.00952, 0.00365], 	// The East Cut
	[0.00481, 0.00173, 0.01058, 0.04366, 0.30232, 0.01664, 0.10674, 0.02471, 0.09385, 1.02745, 0.01692, 0.45271, 0.02616, 0.00385, 0.03144, 0.02077, 0.45377, 0.19337, 0.0651, 0.00481, 0.00721, 0.00135, 0.0977, 0.1903, 0.03885, 1.80528, 0.12472, 0.02173, 0.07904, 0.0151], 	// China Basin
	[0.00202, 0.00202, 0.09414, 0.02548, 0.01433, 0.00144, 0.06164, 0.00135, 0.00471, 0.01125, 0.00375, 0.03817, 0.00817, 0.00433, 0.00673, 0.00837, 0.05135, 0.49099, 0.10222, 0.2179, 0.00442, 0.00115, 0.03058, 0.01798, 0.02423, 0.27107, 0.01875, 0.03019, 0.00779, 0.01]		// Noe Valley
];

var colors = ["#C39BD3", "#FFDD89", "#33ccff", "#ff99ff", "#66cccc", 
				"#ff9900", "#6699cc", "#ff6699", "#666699", "#9999ff",
				"#cc66cc", "#cccc33", "#6699ff", "#cc66ff", "#99cc99",
				"#ff99cc", "#999999", "#99ccff", "#F1948A", "#33cccc",
				"#ff99ff", "#99ccff", "#999933", "#99ccff", "#A569BD",
				"#82E0AA", "#95A5A6", "#E74C3C", "#2ECC71", "#5499C7"];

/*Initiate the color scale*/
var fill = d3.scale.ordinal()
    .domain(d3.range(NameProvider.length))
    .range(colors);
	
/*//////////////////////////////////////////////////////////
/////////////// Initiate Chord Diagram /////////////////////
//////////////////////////////////////////////////////////*/
var margin = {top: 70, right: 100, bottom: 40, left: 100},
    width = 750 - margin.left - margin.right,
    height = 750 - margin.top - margin.bottom,
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.04;

/*Initiate the SVG*/
var svg = d3.select("#chart").append("svg:svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("svg:g")
    .attr("transform", "translate(" + (margin.left + width/2) + "," + (margin.top + height/2) + ")");

	
var chord = d3.layout.chord()
    .padding(.04)
    .sortSubgroups(d3.descending) /*sort the chords inside an arc from high to low*/
    .sortChords(d3.descending) /*which chord should be shown on top when chords cross. Now the biggest chord is at the bottom*/
	.matrix(matrix);
	

/*//////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
//////////////////////////////////////////////////////////*/

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
	
var g = svg.selectAll("g.group")
	.data(chord.groups)
	.enter().append("svg:g")
	.attr("class", function(d) {return "group " + NameProvider[d.index];});
	
g.append("svg:path")
	  .attr("class", "arc")
	  .style("stroke", function(d) { return fill(d.index); })
	  .style("fill", function(d) { return fill(d.index); })
	  .attr("d", arc)
	  .style("opacity", 0)
	  .transition().duration(1000)
	  .style("opacity", 0.4);

/*//////////////////////////////////////////////////////////
////////////////// Initiate Ticks //////////////////////////
//////////////////////////////////////////////////////////*/

var ticks = svg.selectAll("g.group").append("svg:g")
	.attr("class", function(d) {return "ticks " + NameProvider[d.index];})
	.selectAll("g.ticks")
	.attr("class", "ticks")
    .data(groupTicks)
	.enter().append("svg:g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius+40 + ",0)";
    });

/*Append the tick around the arcs*/
ticks.append("svg:line")
	.attr("x1", 1)
	.attr("y1", 0)
	.attr("x2", 5)
	.attr("y2", 0)
	.attr("class", "ticks")
	.style("stroke", "#FFF");
	
/*Add the labels for the %'s*/
ticks.append("svg:text")
	.attr("x", 8)
	.attr("dy", ".35em")
	.attr("class", "tickLabels")
	.attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
	.style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
	.text(function(d) { return d.label; })
	.attr('opacity', 0);
	
/*//////////////////////////////////////////////////////////
////////////////// Initiate Names //////////////////////////
//////////////////////////////////////////////////////////*/

g.append("svg:text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".35em")
  .attr("class", "titles")
  .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .attr("transform", function(d) {
		return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
		+ "translate(" + (innerRadius + 55) + ")"
		+ (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .attr('opacity', 0)
  .text(function(d,i) { return NameProvider[i]; });  

/*//////////////////////////////////////////////////////////
//////////////// Initiate inner chords /////////////////////
//////////////////////////////////////////////////////////*/

var chords = svg.selectAll("path.chord")
	.data(chord.chords)
	.enter().append("svg:path")
	.attr("class", "chord")
	.style("stroke", function(d) { return d3.rgb(fill(d.source.index)).darker(); })
	.style("fill", function(d) { return fill(d.source.index); })
	.attr("d", d3.svg.chord().radius(innerRadius))
	.attr('opacity', 0);

/*//////////////////////////////////////////////////////////	
///////////// Initiate Progress Bar ////////////////////////
//////////////////////////////////////////////////////////*/
/*Initiate variables for bar*/
var progressColor = ["#D1D1D1","#949494"],
	progressClass = ["prgsBehind","prgsFront"],
	prgsWidth = 0.4*650,
	prgsHeight = 3;
/*Create SVG to visualize bar in*/
var progressBar = d3.select("#progress").append("svg")
	.attr("width", prgsWidth)
	.attr("height", 3*prgsHeight);
/*Create two bars of which one has a width of zero*/
progressBar.selectAll("rect")
	.data([prgsWidth, 0])
	.enter()
	.append("rect")
	.attr("class", function(d,i) {return progressClass[i];})
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", function (d) {return d;})
	.attr("height", prgsHeight)
	.attr("fill", function(d,i) {return progressColor[i];});

/*//////////////////////////////////////////////////////////	
/////////// Initiate the Center Texts //////////////////////
//////////////////////////////////////////////////////////*/
/*Create wrapper for center text*/
var textCenter = svg.append("g")
					.attr("class", "explanationWrapper");

/*Starting text middle top*/
var middleTextTop = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", -24*10/2 + "px")
	.attr("dy", "1em")
	.attr("opacity", 1)
	.text("Ridership data provided by Bay Area Motivate, LLC, operators of Ford GoBike in the Bay Area, was used to correlate a ridership pattern.")
	.call(wrap, 350);

/*Starting text middle bottom*/
var middleTextBottom = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", 24*3/2 + "px")
	.attr("dy", "1em")
	.attr('opacity', 1)
	.text("The GoBike data provided starting and ending positions for each ride, which was used to assess the distribution flow of their bicycles between neighborhoods.")
	.call(wrap, 350);


/*//////////////////////////////////////////////////////////
//////////////// Storyboarding Steps ///////////////////////
//////////////////////////////////////////////////////////*/

var counter = 1,
	buttonTexts = ["Ok","Go on","Continue","Okay","Go on","Continue","Okay","Continue",
				   "Continue","Continue","Continue","Continue","Continue","Finish"],
	opacityValueBase = 0.8,
	opacityValue = 0.4;

/*Reload page*/
d3.select("#reset")
	.on("click", function(e) {location.reload();});

/*Skip to final visual right away*/
d3.select("#skip")
	.on("click", finalChord);
	
/*Order of steps when clicking button*/
d3.select("#clicker")      
	.on("click", function(e){
	
		if(counter == 1) Draw1();
		else if(counter == 2) Draw2();
		else if(counter == 3) Draw3();
		else if(counter == 4) Draw4();
		else if(counter == 5) Draw5();
		else if(counter == 6) Draw6();
		else if(counter == 7) Draw7();
		else if(counter == 8) Draw8();
		else if(counter == 9) Draw9();
		else if(counter == 10) Draw10();
		else if(counter == 11) Draw11();
		else if(counter == 12) Draw12();
		else if(counter == 13) Draw13();
		else if(counter == 14) Draw14();
		else if(counter == 15) finalChord();
		
		counter = counter + 1;
	});

/*//////////////////////////////////////////////////////////	
//Introduction
///////////////////////////////////////////////////////////*/
function Draw1(){

	/*First disable click event on clicker button*/
	stopClicker();
		
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);
		
	changeTopText(newText = "FordGo Bike started in 2013 with 700 bikes and 70 stations." + 
							" Now in 2018, there are over 200 stations and 7000 bikes and growing.",
	loc = 4/2, delayDisappear = 0, delayAppear = 1);

	changeTopText(newText = "In the next few steps I would like to introduce you to the flows of bikes between the neighborhoods",
	loc = 8/2, delayDisappear = 9, delayAppear = 10, finalText = true);
	
	changeBottomText(newText = "First, let's draw out the distribution of the 1,039,949 ridership data between 30 Neighborhoods in San Francisco.",
	loc = 1/2, delayDisappear = 0, delayAppear = 10);
	
	//Remove arcs again
	d3.selectAll(".arc")
		.transition().delay(9*700).duration(2100)
		.style("opacity", 0)
		.each("end", function() {d3.selectAll(".arc").remove();});
		
};/*Draw1*/

/*//////////////////////////////////////////////////////////	
//Show Arc of Apple
//////////////////////////////////////////////////////////*/
function Draw2(){ 

	/*First disable click event on clicker button*/
	stopClicker();
	
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);
				
	/*Initiate all arcs but only show the Apple arc (d.index = 0)*/
	g.append("svg:path")
	  .style("stroke", function(d) { return fill(d.index); })
	  .style("fill", function(d) { return fill(d.index); })
	  .transition().duration(700)
	  .attr("d", arc)
	  .attrTween("d", function(d) {
		if(d.index == 0) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
	  });
	  
	/*Show the tick around the Apple arc*/
	d3.selectAll("g.group").selectAll("line")
		.transition().delay(700).duration(1000)
		.style("stroke", function(d, i, j) {return j ? 0 : "#000"; });

	/*Add the labels for the %'s at Apple*/
	d3.selectAll("g.group").selectAll(".tickLabels")
		.transition().delay(700).duration(2000)
		.attr("opacity", function(d, i, j) {return j ? 0 : 1; });

	/*Show the Apple name*/
	d3.selectAll(".titles")
	  .transition().duration(2000)
	  .attr("opacity", function(d, i) {return d.index ? 0 : 1; });
	  
	/*Switch  text*/
	changeTopText(newText = "Data was accumulated between June 28, 2017 to July 1, 2018." +
							"  There were significant varience in the bike propagation.",
	loc = 1/2, delayDisappear = 0, delayAppear = 1, finalText = true);
	
	changeBottomText(newText = "",
	loc = 0/2, delayDisappear = 0, delayAppear = 1)	;
	
};/*Draw2*/

/*///////////////////////////////////////////////////////////  
//Draw the other arcs as well
//////////////////////////////////////////////////////////*/
function Draw3(){

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [0,1,2,3,4,9,16,20,24,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,47,48,49,50,51,52,55];
	/*Show and run the progressBar*/
	runProgressBar(time=700*(arcDelay[(arcDelay.length-1)]+1));	
		
   /*Fill in the other arcs*/
   svg.selectAll("g.group").select("path")
	.transition().delay(function(d, i) { return 700*arcDelay[i];}).duration(1000)
	.attrTween("d", function(d) {
		if(d.index != 0) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
    });
 
  /*Make the other strokes black as well*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("line").style("stroke", "#000");
  /*Same for the %'s*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("text").style("opacity", 1);
  /*And the Names of each Arc*/	
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("text").style("opacity", 1);

	/*Change the text of the top section inside the circle accordingly*/
	/*HTC*/
	changeTopText(newText = "Many neighborhoods had 2% or less outgoing bike traffic",
		loc = 3/2, delayDisappear = 0, delayAppear = arcDelay[2]);
	/*LG*/
	changeTopText(newText = "A popular destination, Rincon Hill only had 1.758% of outgoing bike rides",
		loc = 3/2, delayDisappear = (arcDelay[4]-1), delayAppear = arcDelay[4]);
	/*Samsung*/
	changeTopText(newText = "South of Market has the largest outgoing traffic by far, with 25.4% of GoBike users orginating from there",
		loc = 3/2, delayDisappear = (arcDelay[5]-1), delayAppear = arcDelay[5]);
	/*Sony*/
	changeTopText(newText = "Financial District 5.789%",
		loc = 2/2, delayDisappear = (arcDelay[6]-1), delayAppear = arcDelay[6]);
	/*Sony*/
	changeTopText(newText = "Mission District 8.918%",
		loc = 2/2, delayDisappear = (arcDelay[7]-1), delayAppear = (arcDelay[7]));
	/*Sony*/
	changeTopText(newText = "Embarcadero 7.028%",
		loc = 2/2, delayDisappear = (arcDelay[9]-1), delayAppear = (arcDelay[9]));
	/*100%*/
	changeTopText(newText = "Together that sums up to 100%",
		loc = 1/2, delayDisappear = (arcDelay[29]-1), delayAppear = arcDelay[29]);		
	/*Chord intro*/
	changeTopText(newText = "This circle shows the distribution of the output flow of GoBike users",
		loc = 8/2, delayDisappear = (arcDelay[30]-1), delayAppear = arcDelay[30], finalText = true);					
	
	/*Change the text of the bottom section inside the circle accordingly*/
	/*Other*/
	changeBottomText(newText = "These neighborhoods combined for...",
		loc = 1/2, delayDisappear = (arcDelay[7]), delayAppear = (arcDelay[10]-1), yloc=-20);	
	/*Chord intro*/
	changeBottomText(newText = "Now we're going to look at how these GoBike flowed from one neighborhood to another neighborhood",
		loc = 1/2, delayDisappear = (arcDelay[29]-1), delayAppear = arcDelay[30]);	

};/*Draw3*/

/*///////////////////////////////////////////////////////////
//Show the chord between SOMA and South Park
//////////////////////////////////////////////////////////*/
function Draw4(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Samsung and Nokia intro text*/
	changeTopText(newText = "First, let's only look at the GoBike riders that started from SOMA with a specific destination",
		loc = 1/2, delayDisappear = 0, delayAppear = 1, finalText = true);
		
	/*Bottom text disappear*/
	changeBottomText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);	
	
    /*Make the non Samsung & Nokia arcs less visible*/
    svg.selectAll("g.group").select("path")
		.transition().duration(1000)
		.style("opacity", function(d) {
			if(d.index != 25 && d.index != 5) {return opacityValue;}
		});		
	
	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 5 || j == 25) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 5 || j == 25) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 25 || d.index == 5) {return 1;} else {return opacityValue;}});

	/*Show only the SOMA-South Park chord*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 5 && d.target.index == 25) 
				{return opacityValueBase;}
			else {return 0;}
		});
	
};/*Draw4*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw5(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Samsung and Nokia text*/
	changeTopText(newText = "On the upper right, touching the arc of SOMA, we can see that the chord runs from 0% to almost 7%. Which is a thickness spanning 7%",
		loc = 1/2, delayDisappear = 0, delayAppear = 1, finalText = true);
	
    /*Make the non Samsung & Nokia arcs less visible*/
    svg.selectAll("g.group").select("path")
		.transition().duration(1000)
		.style("opacity", opacityValue);		

	/*Show only the Samsung Nokia part at Samsung*/
	var arcSamsung = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(0.5510082626337902)
				.endAngle(0.891977856121815);
				
	svg.append("path")
		.attr("class","SouthofMarkettoSouthPark")
		.attr("d", arcSamsung)
		.attr("fill", colors[5])
		.style('stroke', colors[5]);
		
	repeat();
	
	/*Repeatedly let an arc change colour*/
	function repeat() {
		d3.selectAll(".SouthofMarkettoSouthPark")
			.transition().duration(700)
			.attr("fill", "#ffff00")
			.style('stroke', "#ffff00")
			.transition().duration(700)
			.attr("fill", colors[5])
			.style('stroke', colors[5])
			.each("end", repeat)
			;
	};
	
};/*Draw5*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw6(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Samsung and Nokia text*/
	changeTopText(newText = "These 7% of the GoBike riders originate from South of Market and by following the chord we can see their destination, which in this case, is South Park",
		loc = 1/2, delayDisappear = 0, delayAppear = 1, finalText = true);

	/*Show only the Samsung Nokia part at Nokia*/
	var arcNokia = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(5.650816067671451)
				.endAngle(5.6574595910835127);

	svg.append("path")
		.attr("class","SouthParktoSouthofMarket")
		.attr("d", arcNokia)
		.attr("opacity", 0)
		.attr("fill", colors[25])
		.transition().duration(700)
		.attr("opacity", 1)
		.attr("stroke", colors[25]);				
		
};/*Draw6*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw7(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);	
	
	/*Samsung and Nokia text*/
	changeTopText(newText = "At the South Park side, the arc is much thinner, only spanning 0.00375% (of return distrubution flow)",
		loc = 1/2, delayDisappear = 0, delayAppear = 1);
	changeTopText(newText = "These 0.00375% riders travel back to SOMA, but by following the chord we can see the flow from SOMA is far greater",
		loc = 1/2, delayDisappear = 9, delayAppear = 10, finalText = true);
		
	/*Stop the color changing on the Samsung side*/
	d3.selectAll(".SouthofMarkettoSouthPark")
		.transition().duration(700)
		.attr("fill", colors[5])
		.style("stroke", colors[5]);

	/*Repeatedly let an arc change colour*/		
	repeat();
	function repeat() {
		d3.selectAll(".SouthParktoSouthofMarket")
			.transition().duration(700)
			.attr("fill", "#99D2E9")
			.style('stroke', "#99D2E9")
			.transition().duration(700)
			.attr("fill", colors[25])
			.style("stroke", colors[25])
			.each("end", repeat)
			;
	};
				
};/*Draw7*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw8(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);	
	
	/*Samsung and Nokia text*/
	changeTopText(newText = "Since the chord is much wider at the SOMA side, SOMA has sent a lot more bikes to South Park than South Park riders has managed to propagate back to SOMA",
		loc = 1/2, delayDisappear = 0, delayAppear = 1);
	changeTopText(newText = "Therefore, the chord is the color of SOMA orange, since SOMA has the higher net average from the exchange of bikes between South Park and SOMA",
		loc = 1/2, delayDisappear = 9, delayAppear = 10, finalText = true);
		
	/*Stop the colour changing on the Nokia side*/
	d3.selectAll(".SouthParktoSouthofMarket")
		.transition().duration(700)
		.attr("fill", colors[25])
		.style("stroke", colors[25]);
				
};/*Draw8*/

/*///////////////////////////////////////////////////////////	
//Show Loyalty hills
//////////////////////////////////////////////////////////*/
function Draw9(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*20);	
	
	/*Samsung Loyal text*/
	changeTopText(newText = "There are also GoBike users that stay within their given neighborhood",
		loc = 4/2, delayDisappear = 0, delayAppear = 1, finalText = false, xloc=50, w=300);
	changeTopText(newText = "These short distance riders are represented by the hills at each brand",
		loc = 3/2, delayDisappear = 9, delayAppear = 10, finalText = false, xloc=50, w=300);
	changeTopText(newText = "You can also envision this as a chord beginning and ending on itself",
		loc = 2/2, delayDisappear = 18, delayAppear = 19, finalText = true, xloc=50, w=300);
		
	/*Remove the arcs*/
	d3.selectAll(".SouthParktoSouthofMarket")
		.transition().duration(2000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".SouthParktoSouthofMarket").remove();});

	d3.selectAll(".SouthofMarkettoSouthPark")
		.transition().duration(2000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".SouthofMarkettoSouthPark").remove();});
		
	/*Show only the loyal chords*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 0 && d.target.index == 0) {return opacityValueBase;}
			else if(d.source.index == 1 && d.target.index == 1) {return opacityValueBase;}
			else if(d.source.index == 2 && d.target.index == 2) {return opacityValueBase;}
			else if(d.source.index == 3 && d.target.index == 3) {return opacityValueBase;}
			else if(d.source.index == 4 && d.target.index == 4) {return opacityValueBase;}
			else if(d.source.index == 5 && d.target.index == 5) {return opacityValueBase;}
			else if(d.source.index == 6 && d.target.index == 6) {return opacityValueBase;}
			else if(d.source.index == 7 && d.target.index == 7) {return opacityValueBase;}
			else if(d.source.index == 8 && d.target.index == 8) {return opacityValueBase;}
			else if(d.source.index == 9 && d.target.index == 9) {return opacityValueBase;}
			else if(d.source.index == 10 && d.target.index == 10) {return opacityValueBase;}
			else if(d.source.index == 11 && d.target.index == 11) {return opacityValueBase;}
			else if(d.source.index == 12 && d.target.index == 12) {return opacityValueBase;}
			else if(d.source.index == 13 && d.target.index == 13) {return opacityValueBase;}
			else if(d.source.index == 14 && d.target.index == 14) {return opacityValueBase;}
			else if(d.source.index == 15 && d.target.index == 15) {return opacityValueBase;}
			else if(d.source.index == 16 && d.target.index == 16) {return opacityValueBase;}
			else if(d.source.index == 17 && d.target.index == 17) {return opacityValueBase;}
			else if(d.source.index == 18 && d.target.index == 18) {return opacityValueBase;}
			else if(d.source.index == 19 && d.target.index == 19) {return opacityValueBase;}
			else if(d.source.index == 20 && d.target.index == 20) {return opacityValueBase;}
			else if(d.source.index == 21 && d.target.index == 21) {return opacityValueBase;}
			else if(d.source.index == 22 && d.target.index == 22) {return opacityValueBase;}
			else if(d.source.index == 23 && d.target.index == 23) {return opacityValueBase;}
			else if(d.source.index == 24 && d.target.index == 24) {return opacityValueBase;}
			else if(d.source.index == 25 && d.target.index == 25) {return opacityValueBase;}
			else if(d.source.index == 26 && d.target.index == 26) {return opacityValueBase;}
			else if(d.source.index == 27 && d.target.index == 27) {return opacityValueBase;}
			else if(d.source.index == 28 && d.target.index == 28) {return opacityValueBase;}
			else if(d.source.index == 29 && d.target.index == 29) {return opacityValueBase;}

			else {return 0;}
		});
	
		
	/*Show all ticks and texts again*/
	/*Ticks*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke", "#000");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity", 1);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", 1);
				
};/*Draw9*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw10(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);
	
	changeTopText(newText = "10% of respondents have a Nokia right now, but also used to own a Nokia before that",
		loc = 7/2, delayDisappear = 0, delayAppear = 1);
		changeTopText(newText = "Seeing that currently Nokia is owned by almost 16% of respondents, this means "+ 
								"that about 2/3 of current Nokia owners are people who stayed loyal",
		loc = 7/2, delayDisappear = 9, delayAppear = 10, finalText = true);
		
	/*Show only the Nokia Loyal arc*/
	var arcEmbarcadero = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(2.948671976860533)
				.endAngle(2.9994216777820063);

	svg.append("path")
		.attr("class","arcEmbarcadero")
		.attr("d", arcEmbarcadero)
		.attr("opacity", 1)
		.attr("stroke", colors[10])
		.attr("fill", colors[10]);	

	/*Repeatedly let an arc change colour*/		
	repeat();
	
	function repeat() {
		d3.selectAll(".arcEmbarcadero")
			.transition().duration(700)
			.attr("fill", "#99D2E9")
			.style('stroke', "#99D2E9")
			.transition().duration(700)
			.attr("fill", colors[10])
			.style("stroke", colors[10])
			.each("end", repeat);
	};
	
	/*Show only the Nokia loyal chord*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 10 && d.target.index == 10) {return opacityValueBase;}
			else {return 0;}
		});

	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 10) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 10) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 10) {return 1;} else {return opacityValue;}});

};/*Draw10*/

/*//////////////////////////////////////////////////////////
//Show all chords that are connected to Apple
//////////////////////////////////////////////////////////*/
function Draw11(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	changeTopText(newText = "Here are all the chords for those respondents that currently own "+ 
							"an iPhone or that used to own an iPhone",
		loc = 3/2, delayDisappear = 0, delayAppear = 1, finalText = true, xloc=-80, w=200);
		
	/*Remove the Nokia arc*/
	d3.selectAll(".NokiaLoyalArc")
		.transition().duration(1000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".NokiaLoyalArc").remove();});
			
	/*Only show the chords of Apple*/
	chords.transition().duration(2000)
    .attr("opacity", function(d, i) { 
		if(d.source.index == 0 || d.target.index == 0) {return opacityValueBase;}
		else {return 0;}
	});

	/*Highlight arc of Apple*/
	svg.selectAll("g.group").select("path")
		.transition().duration(2000)
		.style("opacity", function(d) {
			if(d.index != 0) {return opacityValue;}
		});	
		
	/*Show only the ticks and text at Apple*/
	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 0) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 0) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 0) {return 1;} else {return opacityValue;}});

};/*Draw11*/

function Draw12(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);	

	changeTopText(newText = "One thing that stands out for Apple is that all chords connected to " +
							"Apple are the color of the Apple arc: grey",
		loc = 3/2, delayDisappear = 0, delayAppear = 1, finalText = false, xloc=-80, w=210);
	changeTopText(newText = "This means that Apple has always had the net gain. " + 
							"They received more customers from other brands than they lost to them",
		loc = 3/2, delayDisappear = 9, delayAppear = 10, finalText = true, xloc=-80, w=210);

};/*Draw12*/
  
  
function Draw13(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);	

	changeTopText(newText = "Even more so, apart from the chord to Samsung, all other chords are extremely narrow at the other end from Apple",
		loc = 3/2, delayDisappear = 0, delayAppear = 1, finalText = false, xloc=-80, w=200);
	changeTopText(newText = "This means that Apple has lost virtually nobody to any other brand",
		loc = 3/2, delayDisappear = 9, delayAppear = 10, finalText = true, xloc=-80, w=200);	
	
	/*Repeatedly let specific chords change colour*/
	repeat();
	
	function repeat() {
		chords
			.transition().duration(1000)
			.style("opacity",function (d){
				if(d.source.index == 0) {
					if(d.target.index == 0 || d.target.index == 5) {return opacityValueBase;}
					else {return 0.2;}
				} else {return 0;}
			})
			.transition().duration(1000)
			.style("opacity",function (d){
				if(d.source.index == 0) {return opacityValueBase;}
				else {return 0;}
			})
			.each("end", repeat);
	};	
};/*Draw13*/


function Draw14(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	/*runProgressBar(time=700*2);*/

	changeTopText(newText = "Thank you for staying with me so far! After these examples I think you're absolutely " + 
							"ready to face the full impact of all chords simultaneously",
		loc = 8/2, delayDisappear = 0, delayAppear = 1, finalText = true);
		
	changeBottomText(newText = "I'm looking forward to hearing about the insights that you have discovered on your own",
		loc = 3/2, delayDisappear = 0, delayAppear = 1);		
	
	/*Only show the chords of Apple*/
	chords.transition().duration(1000)
		.style("opacity", 0.1);

	/*Hide all the text*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke","#DBDBDB");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",0.4);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity",0.4);	
		
};/*Draw14*/

/*///////////////////////////////////////////////////////////
//Draw the original Chord diagram
///////////////////////////////////////////////////////////*/
/*Go to the final bit*/
function finalChord() {
	
	/*Remove button*/
	d3.select("#clicker")
		.style("visibility", "hidden");
	d3.select("#skip")
		.style("visibility", "hidden");
	d3.select("#progress")
		.style("visibility", "hidden");
	
	/*Remove texts*/
	changeTopText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);
	changeBottomText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);			

	/*Create arcs or show them, depending on the point in the visual*/
	if (counter <= 4 ) {
		g.append("svg:path")
		  .style("stroke", function(d) { return fill(d.index); })
		  .style("fill", function(d) { return fill(d.index); })
		  .attr("d", arc)
		  .style("opacity", 0)
		  .transition().duration(1000)
		  .style("opacity", 1);
		  
	} else {
		 /*Make all arc visible*/
		svg.selectAll("g.group").select("path")
			.transition().duration(1000)
			.style("opacity", 1);
	};
	
	/*Make mouse over and out possible*/
	d3.selectAll(".group")
		.on("mouseover", fade(.02))
		.on("mouseout", fade(.80));
		
	/*Show all chords*/
	chords.transition().duration(1000)
		.style("opacity", opacityValueBase);

	/*Show all the text*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(100)
		.style("stroke","#000");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(100)
		.selectAll(".tickLabels").style("opacity",1);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(100)
		.selectAll(".titles").style("opacity",1);		

};/*finalChord*/

/*//////////////////////////////////////////////////////////
////////////////// Extra Functions /////////////////////////
//////////////////////////////////////////////////////////*/

/*Returns an event handler for fading a given chord group*/
function fade(opacity) {
  return function(d, i) {
    svg.selectAll("path.chord")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
		.transition()
        .style("stroke-opacity", opacity)
        .style("fill-opacity", opacity);
  };
};/*fade*/

/*Returns an array of tick angles and labels, given a group*/
function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 1).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v + "%"
    };
  });
};/*groupTicks*/

/*Taken from https://groups.google.com/forum/#!msg/d3-js/WC_7Xi6VV50/j1HK0vIWI-EJ
//Calls a function only after the total transition ends*/
function endall(transition, callback) { 
    var n = 0; 
    transition 
        .each(function() { ++n; }) 
        .each("end", function() { if (!--n) callback.apply(this, arguments); }); 
};/*endall*/ 

/*Taken from http://bl.ocks.org/mbostock/7555321
//Wraps SVG text*/
function wrap(text, width) {
    var text = d3.select(this)[0][0],
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.4, 
        y = text.attr("y"),
		x = text.attr("x"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
		
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      };
    };  
};

/*Transition the top circle text*/
function changeTopText (newText, loc, delayDisappear, delayAppear, finalText, xloc, w) {

	/*If finalText is not provided, it is not the last text of the Draw step*/
	if(typeof(finalText)==='undefined') finalText = false;
	
	if(typeof(xloc)==='undefined') xloc = 0;
	if(typeof(w)==='undefined') w = 350;
	
	middleTextTop	
		/*Current text disappear*/
		.transition().delay(700 * delayDisappear).duration(700)
		.attr('opacity', 0)	
		/*New text appear*/
		.call(endall,  function() {
			middleTextTop.text(newText)
			.attr("y", -24*loc + "px")
			.attr("x", xloc + "px")
			.call(wrap, w);	
		})
		.transition().delay(700 * delayAppear).duration(700)
		.attr('opacity', 1)
		.call(endall,  function() {
			if (finalText == true) {
				d3.select("#clicker")
					.text(buttonTexts[counter-2])
					.style("pointer-events", "auto")
					.transition().duration(400)
					.style("border-color", "#363636")
					.style("color", "#363636");
				};
		});
};/*changeTopText */

/*Transition the bottom circle text*/
function changeBottomText (newText, loc, delayDisappear, delayAppear) {
	middleTextBottom
		/*Current text disappear*/
		.transition().delay(700 * delayDisappear).duration(700)
		.attr('opacity', 0)
		/*New text appear*/
		.call(endall,  function() {
			middleTextBottom.text(newText)
			.attr("y", 24*loc + "px")
			.call(wrap, 350);	
		})
		.transition().delay(700 * delayAppear).duration(700)
		.attr('opacity', 1);
;}/*changeTopText*/

/*Stop clicker from working*/
function stopClicker() {
	d3.select("#clicker")
		.style("pointer-events", "none")
		.transition().duration(400)
		.style("border-color", "#D3D3D3")
		.style("color", "#D3D3D3");
};/*stopClicker*/

/*Run the progress bar during an animation*/
function runProgressBar(time) {	
	
	/*Make the progress div visible*/
	d3.selectAll("#progress")
		.style("visibility", "visible");
	
	/*Linearly increase the width of the bar
	//After it is done, hide div again*/
	d3.selectAll(".prgsFront")
		.transition().duration(time).ease("linear")
		.attr("width", prgsWidth)
		.call(endall,  function() {
			d3.selectAll("#progress")
				.style("visibility", "hidden");
		});
	
	/*Reset to zero width*/
	d3.selectAll(".prgsFront")
		.attr("width", 0);
		
};/*runProgressBar*/