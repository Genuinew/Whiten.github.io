const fs = require('fs')
const path = require('path');

module.exports = {
	head:[
		['link',{rel:'icon',href:'dog.jpg'}]
	],
	title:"Whiten's log",
	description:"All packages are up to date",
	base:'/WhitenWhiten.github.io/',
	markdown: {
		    lineNumbers: true
		  },
	themeConfig:{
		lastUpdated: 'Last update: '	//Note that this is based on gits
	}

}
