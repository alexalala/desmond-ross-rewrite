new IdealImageSlider.Slider('#slider');

var slider = new IdealImageSlider.Slider({
		selector: '#slider',
		height: 400,
		interval: 4000
});
slider.start();

var images = [
    {url:'assets/abbey-cinema.jpg', name:'Abbey Cinema, Wavertree', collection: 'Historic buildings', desc:'The Abbey Cinema was designed by a local architect and first opened in 1939. In 1964, the it underwent a refurbishment to "Cinerama" which proved a spectacular hit with the Wavertree locals, including adding a curved screen and an incredible sound system to the cinema. It is now a Co-op supermarket.'},
    {url:'assets/blue-coat-school.jpg', name:'The Blue Coat School', collection: 'Wavertree Parks', desc:'Shown in this picture is the Mystery Public Park blanketed in snow, looking ahead to the silhouette of the Blue Coat School and its clock tower.'},
    {url:'assets/bligh-street.jpg', name:'Bligh Street, Wavertree', collection: 'Liverpool Streets', desc:'This picture embodies the true spirit of the locals.'},
    {url:'assets/banksy-in-liverpool.jpg', name:'Banksy In Liverpool', collection: 'Famous Figures', desc:'This portrays the street artist Banksy\'s graffiti rat on the Whitehouse public house on the corner of Duke Street and Berry Street.'},
    {url:'assets/shankly.jpg', name: 'Bill Shankly', collection: 'Famous Figures', desc:'Bill Shankly was a Scottish footballing legend best known for being the manager of Liverpool. He took them over when they were in the second division and not only got them promoted to the first division, but also won 3 division championships, 2 FA cups and one UEFA cup with them - molding them into the world class team they are today.'},
    {url:'assets/cambridge-street-mission.jpg', name: 'The Cambridge Street Mission, Wavertree', collection: 'Liverpool Streets', desc:'A portrayal of the Cambridge Street Mission, on Cambridge Street, Wavertree. It is now student accomodation.'},
    {url:'assets/cameo.jpg', name:'The Cameo Cinema', collection: 'Historic Buildings', desc:'The Cameo Cinema in Wavertree became infamous for a double murder of the cinema manager and his assistant for the day\'s box office takings in 1949. George Kelly was arrested, found guilty and subsequently (and controversially) was hung for the crime.'},
    {url:'assets/carlisle-street-wavertree.jpg', name:'Carlisle Street, Wavertree', collection: 'Liverpool Streets', desc:'This image shows Carlisle Street in the depths of winter, with the Gasometers in the background. All of the houses in this image have since been demolished in an attempt to modernise the streets.'},
    {url:'assets/falling-star.jpg', name:'Falling Star', collection: 'Wavertree Parks', desc:'A shooting star above the Wavertree skyline, showing St. Bridgets Church in shadow.'},
    {url:'assets/gas-works-spofforth-road.jpg', name:'The Spofforth Road Gas Works', collection: 'Liverpool Streets', desc:'The background of this image shows the (now derelict) gasometers in Wavertree, built in the 1840\'s.'},
    {url:'assets/grand-cinema.jpg', name:'The Grand Cinema', collection: 'Historic Buildings', desc:'This picture depicts the Grand Cinema on Smithdown Road in all its glory. It no longer exists.'},
    {url:'assets/hairdresser.jpg', name:'The Hairdresser', collection: 'Liverpool Streets', desc:'A Wavertree Hairdressers, belonging to Bob Cochran (Bunty). At the time he only charged 20p for a haircut'},
    {url:'assets/high-street-wavertree.jpg', name:'Wavertree High Street', collection: 'Liverpool Streets', desc:'This painting shows the High Street of Wavertree covered in a blanket of snow. In the background you can see the Picton Clock Tower. Reference to Wavertree can be found in the Doomsday Book, where it was referred to as "Wartree", "Vauretea" and "Wavre".'},
    {url:'assets/holy-trinity.jpg', name:'The Holy Trinity Church', collection: 'Liverpool Streets', desc:'Built in 1794, the Holy Trinity Church is an active Anglican Parish Church in the deanery of Toxteth and Wavertree. More information on the church can be found on <a href="http://www.holytrinitywavertree.org.uk">this website</a>. This picture shows the church at Christmas time.'},
    {url:'assets/magnet-cinema.jpg', name:'The Magnet Cinema', collection: 'Historic Buildings', desc:'The Magnet Cinema was opened in 1914 on Picton Road and only had one screen, yet could seat up to 1038 people. The building has now lost its roof and has ironically been replaced with a roofing company.'},
    {url:'assets/picton-clock-tower.jpg', name:'The Picton Clock Tower', collection: 'Liverpool Monuments', desc:'Created in 1884 by James Picton as a memorial to his wife, this tower has a clock face on each of its 4 sides.'},
    {url:'assets/pye-street.jpg', name:'Pye Street', collection: 'Liverpool Streets', desc:'Pye Street is a small, narrow lane that is round the back of the old ESSO petrol station. It still has some remarkable features that have remained, such as the victorian streetlights depicted in the painting.'},
    {url:'assets/railway-sidings-wavertree.jpg', name:'Railway Sidings, Wavertree', collection: 'Liverpool Streets', desc:'This painting is a night scene, illustrating railway workers loading the trains up with coal.. well before the days of health and safety! These are the Down Hill sidings on Edge Hill.'},
    {url:'assets/the-lovers-fir-lane.jpg', name:'The Lovers, Fir Lane', collection: 'Wavertree Parks', desc:'A black and white painting, showing a lady and gentleman strolling through Fir Lane in the winter. In the background you can see the Blue Coat School, St. John\'s beacon (Radio City Tower) and both Liverpool Cathedrals.'},
    {url:'assets/the-street-singer.jpg', name:'The Street Singer', collection: 'Liverpool Streets', desc:'A street singer that travelled around the district quite regularly, earning his living.'},
    {url:'assets/the-wellington.jpg', name:'The Wellington', collection: 'Liverpool Streets', desc:'The Wellington Public House on Picton Road, with its vibrant red exterior. It is locally known as \'The Wellie\''},
    {url:'assets/victorian-drinking-fountain.jpg', name:'Victorian Drinking Fountain', collection: 'Liverpool Streets', desc:'After epidemics like Cholera, public drinking fountains became popular in the Victorian Age as they were a rare clean water supply for the masses. In northern cities like Liverpool and Hull, they were supplied by civic authorities. This particular one stands on Picton Road and remains as decoration.'},
    {url:'assets/victorian-letterbox.jpg', name:'Victorian Letterbox', collection: 'Liverpool Streets', desc:'This painting shows a little bit of history among today\'s 21st Century Life. The old Victorian Letterbox shown in this image has remained functional until relatively recently, when it was destroyed by vandals lighting a firework inside of it.'},
    {url:'assets/wavertree-train-station.jpg', name:'Wavertree Train Station', collection: 'Liverpool Streets', desc:'Wavertree Station was opened in 1891 and was on the main southern line from Liverpool Lime Street. As can be seen in the picture, the station was accessed from between the bridges that supported the lines. The station closed in 1958 and nothing now remains at that part of the track.'},
    {url:'assets/wellington-avenue-wavertree.jpg', name:'Wellington Avenue, Wavertree', collection: 'Liverpool Streets', desc:'This painting portrays Wellington Avenue in Wavertree, which has now since been modernised.'}
];

// Obj of collections, short and long names
var collections = {
		newIn: "New In",
		liverpoolMonuments: "Liverpool Monuments",
		historicBuildings: "Historic Buildings",
		wavertreeParks: "Wavertree Parks",
		liverpoolStreets: "Liverpool Streets",
		famousFigures: "Famous Figures"
};

var currentCollection;

// Appends collection to hash and change window
var chooseCollection = function(x) {
		var collection = x.getAttribute('data-collection');
		window.location = '/collection' + '#' + collection;
};

// Appends each image with collection in to the page without title
var collectionImages = function(images, currentCollection) {
		var newImageArray = [];
		// Loop through images and push all urls of image in collection to newImagesArray
		for (var i = 0, l = images.length; i < l; i++) {
				var img = images[i];
				if (currentCollection === img['collection']) {
						var source = img['url'];
						newImageArray.push(source);
				};
		};

		// For each image, append to collection page
		for (var i = 0, l = newImageArray.length; i < l; i++) {
				var imgUrl = newImageArray[i];
				var imgDiv = "<div class='img-sml' onclick='chooseImage(this)' style='background-image: url(\"../../" + imgUrl + "\");'></div>";
				document.getElementsByClassName("collection")[0].innerHTML += imgDiv;
		}
};

// Appends title to h2 tags
if (window.location.pathname == "/collection") {
		var chosenCollection = window.location.hash.substr(1);
		currentCollection = collections[chosenCollection];
		document.getElementsByTagName("h2")[0].innerHTML=(currentCollection);
		collectionImages(images, currentCollection);
};

// Function to add image alt value to the hash and change window
var chooseImage = function(x) {
		console.log(x);
}
