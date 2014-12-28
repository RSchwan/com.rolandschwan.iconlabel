# Icon Label Widget [![Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://www.appcelerator.com/titanium/) [![Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)
## Overview
This is a widget for the [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform.

The widget provides a simple [FontAwesome](http://fortawesome.github.io/Font-Awesome/) support for labels.

## Screenshot
![Loading Mask](https://raw.github.com/rolandschwan/com.rolandschwan.iconlabel/master/docs/screenshot.png)

## Features
* Full support for all [FontAwesome icons](http://fortawesome.github.io/Font-Awesome/icons/).
* Refer to icons by their [name](http://fortawesome.github.io/Font-Awesome/icons/).
* Label can be mixed with icons and normal text.
* It can be styled like a normal label.
* Script to automatically update the font file and cheatsheet.

## Quick Start [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/com.rolandschwan.iconlabel)

* Use `gittio install com.rolandschwan.iconlabel` to install via [gitTio](http://gitt.io/cli) or:

  * Download the latest [release](https://github.com/rolandschwan/com.rolandschwan.iconlabel/releases) of the widget.
  * Unzip the folder to your project under `app/widgets/com.rolandschwan.iconlabel`.
  * Add the widget as a dependency to your `app/config.json` file:

        ```javascript
        "dependencies": {
            "com.rolandschwan.iconlabel":"*"
        }
        ```

* (optional) Run the `update.py` script to update the font file and generate an updated cheatsheet file.
* Create an instance of the widget in a controller and add it to a window or view:

	```javascript
	var iconLabel = Alloy.createWidget("com.rolandschwan.iconlabel", {
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		color: "#900",
		shadowColor: "#aaa",
		shadowOffset: {
			x: 2,
			y: 2
		},
		shadowRadius: 3,
		text: "fa-star Label with FontAwesome support fa-smile-o",
		font: {
			fontSize: 40
		}
	});
	$.win.add(iconLabel.getView()
	```
or add it directly to the xml file and style it with the tss file:

	**index.xml**
	
	```xml
	<Alloy>
		<Window>
			<Widget id="widget" src="com.rolandschwan.iconlabel" />
		</Window>
	</Alloy>
	```

	**index.tss**
	
	```javascript
	"#widget": {
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		color: "#900",
		shadowColor: "#aaa",
		shadowOffset: {
			x:2,
			y:2
		},
		shadowRadius: 3,
		text: "fa-star Label with FontAwesome support fa-smile-o",
		font: {
			fontSize: 40
		}
	}
	```

## Usage
Style it like a normal label.
To generate a icon just write the [name](http://fortawesome.github.io/Font-Awesome/icons/) of the icon and it will automatically be generated.

## Changelog
* v1.0.0: Initial version

## License

<pre>
Copyright 2015 Roland Schwan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
