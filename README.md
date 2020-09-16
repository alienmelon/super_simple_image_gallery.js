# super_simple_image_gallery.js
 A very simple, very vanilla, easily customizable, javascript image gallery for showcasing animated gifs or other image formats...
---

This is a very simple vanilla javascript image gallery for showcasing you animated gifs, photos, or any art in any image format.

It displays thumbnails. You click on a thumbnail and the full size image displays. You close the full size image by clicking on it.
Optional image captions are supported. These display over the thumbnail and at the bottom of the full size image area.
The CSS is easy to change, and it includes some basic transitions.

![Demo](http://unicornycopia.com/artdump/demo.png)

---

### CUSTOMIZING

Images are easy to add or remove. Just edit the EDIT_ME.js file in the "source" folder.
Images are in an array. Mind the formatting...

```
arr_images = [

		["IMAGE_NAME.gif", "OPTIONAL IMAGE CAPTION"], 
		["PNG_TITLE.png", ""], 
		["ANOTHER_IMAGE.jpg", ""], 
		["IMAGE.gif", "ANOTHER IMAGE CAPTION"]
		
]
```

Captions are optional. If you do not want a caption, just leave an empty string.

In the EDIT_ME file you will see two variables for the header and footer (strings). Edit these with your desired text for either header or footer. If you do not wish to have a header or footer, then set the variables to an empty string.

---

### TO USE

After placing your thumbnails & full-size images in the images folder, and editing EDIT_ME.js, upload all files to your server. Use index.html to access your gallery.

---

### FURTHER INSTALL

To run it on your page see the index.html as an example OR do the following...

Link to the stylesheet by copy/pasting the following in your html's head tag:

```
<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Press+Start+2P&display=swap" rel="stylesheet">
<link rel="stylesheet" href="source/styles.css">
```

Then link to the scripts by copy/pasting the following after the css reference:

```
<script type="text/javascript" src="source/EDIT_ME.js"></script>
<script src="source/code.js"></script>
```

Then add an onload call in your body tag:

```
<body onload="init();">
```

The gallery is generated automatically.

---

### Copyright: Images and art in this commit are subject to copyright. Everything else is not.
