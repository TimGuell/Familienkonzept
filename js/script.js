"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
"scene1": "scene1.jpg",
"scene2": "scene2.jpg",
"scene3": "bar.jpg"
};

// Define the Characters
const characters = {
	"a": {
		"Name": "Aylin",
		"Color": "#5bcaff",
		"Face": "aylin_erzählend.png"
	}
	,
	"s": {
		"Name": "Sophie",
		"Color": "#5bcaff"
	}
	,
	"k1": {
		"Name": "Erzieherin",
		"Color": "#5bcaff"
	}
	,
	"f": {
		"Name": "Finn",
		"Color": "#5bcaff",
		"Face": "finn_erzählend.png"
	}
	,
	"m": {
		"Name": "Melina",
		"Color": "#5bcaff",
		"Face": "melina_erzählend.png"
	}
	,
	"e": {
		"Name": "Erzähler",
		"Color": "#5bcaff"
	}
};

let script = {
	// The game starts here.
	"Start": [
	
	"scene scene1 with fadeIn"
	, "wait 2000"
	, "e Du erzählst deinen Freunden von dieser schockierenden Nachricht. Dabei kommt ihr auch darauf, wie die Freunde und Religionen Familie und Ehe verstehen."
	, "scene scene1 with fadeOut"
	, "wait 100"
	, "scene scene3 with fadeIn"
	, "wait 50"
	, "f Scheidung ist immer doof. Meine Eltern sind auch geschieden. Besonders hart ist das für meine Mutter, weil sie sehr religiös ist."
	, "m Warum denn das?"
	, "f Naja, sie ist katholisch und versucht sich an das zu halten, was die Kirche ihr empfiehlt. Da heißt, dass sie keinen neuen Mann haben darf. Die Idee dahinter ist, dass die Ehe ein Leben lang hält und erst mit dem Tod endet. Das sagt Jesus auch in der Bibel: „Was Gott verbunden hat, das darf der Mensch nicht trennen“"
	, "a Und warum macht sie das immer noch so?"
	, "f In der Liebe in der Ehe soll sich die Liebe Gottes zu den Menschen spiegeln und die ist ja auch ewig."
	, "m Das kenn ich auch so ähnlich. Wenn wir heiraten, dann sehen wir darin auch die Liebe Gottes zu uns, seinem Volk. Im Alltag kann man sich in einer guten Ehe gegenseitig unterstützen und die Beziehung zu Gott gemeinsam gestalten. Aber wenn das nicht klappt, dann ist es möglich, sich scheiden zu lassen und neu zu heiraten. Denn wenn die Ehe nur noch aus Streit besteht, dann kann man nicht mehr gemeinsam Gott suchen. Und das hat dann auch nichts mehr mit der Liebe Gottes zu uns zu tun."
	, "f Ja, es gibt auch christliche Konfessionen, bei denen es die Scheidung gibt. Evangelische Christinnen und Christen lassen die Regelungen eher den Staat machen. Ihnen ist auch die Liebe der Ehepartner sehr wichtig, die auch füreinander verantwortlich sind. Wenn das erloschen ist, kann man sich scheiden lassen."
	, "a Islamisches Eheverständnis, theologischer Kerngedanke: Auch Ehe ein Spiegel der göttlichen Liebe, wie wird die Beziehung gedeutet? Theol. Hintergrund zur Trennungsmöglichkeit."
	, "m Bei uns gehört es auch zur Ehe, Kinder zu haben. Denn in der Ehe wird unser Leben weitergegeben, damit unsre Glaubensgemeinschaft erhalten bleibt. Deshalb sollte jeder Jude und jede Jüdin in einer Ehe leben."
	 
	, "scene scene2 with fadeIn"
	, "m Boah, jetzt haben wir so viel geredet. Was antwortest du Sophie eigentlich jetzt?"
	, 
	
	
	,"end"
	]
};