

This is a SPA website of the ISYS3004 Unit Outline. 
There are no Errors on the SPA. 

There are a couple of known issues which break separation of concerns and things that could be improved on. 

And references to where some non-original code was used.

Know Issues 
		1.The biggest break of separation of concerns is the use of a script function to implement changing of the web site Them. The way I had originally intended to od it was to have multiple CSS files having a common file and a default and dark theme CSS file in which the common CSS file inherits the color elements to implement the theme and allow for interactive changing of the DOM of the website theme. 
		
		When I tried to implement this the website would load them and the CSS correctly and I double cheeked this through the inspect elements page, the inspect elements page was showing that the correct colors were being inherited into the common CSS file, but the web site did not load the colors and remained white. I looked on the internet to find a solution and was not successful, but I suspect the issues lies in how I have done my CSS styling in the common file for the <Body>. 

		2. Images used in website are not saved local images folder, had issues implementing the saved images into GitHub, so just made a work around by hosting the images privately on a website and set the privacy to people with only the link. But I know the correct way is to save the images locally and link them. 
		
		3.The web sites overall function is based off using java script to change the display properties of each <div> element. Another way I experimented on was by changing the visibility properties , this did not work well as it created very big amounts of white space across the website when I hid the <div> elements
		
		4. used <hr> tags to create line elements I the HTML this was taken from W3 schools. Style elements should normally be used in CSS, but <hr> tags were not specified in style guide to be in CSS and unsure how to create multiple lines in to HTML via CSS.

		5. <hr> lines footer come out clean on chrome and Microsoft edge but are not aligned properly in Firefox.

		6. Footer erro/warning  

References. 

		1. <hr> tags taken from https://www.w3schools.com/tags/tag_hr.asp
		
		2. Navigation bar code was adapted from https://www.w3schools.com/css/css_navbar_horizontal.asp
			Base code was taken from w3 schools, edited it to contain lot more <li> options and added in a button to the list then used CSS to cauterize the change them button to the right of the navigation bar. 
		
		3. CSS taken from https://stackoverflow.com/questions/3239167/create-two-column-footer-using-div
			In footer section I wanted to create two sections of text divided in to tow column, used some code form this stack overflow article , but did some changes to make it work for my website 
		
		4. idea to change display properties of elements came from https://www.w3schools.com/cssref/pr_class_display.asp
		
		5. On load function code taken and adapted from https://www.w3schools.com/cssref/pr_class_display.asp
			needed to run a script on load to display homepage and clear other elements.

		6. Adapted code of document.getElementsByClassName()[0]. From https://stackoverflow.com/questions/28387375/javascript-cant-get-getelementsbyclassname-working
			Had issues running the document.getElementByClassName() function kept giving error of function could not be found.  Looking on stack overflow found this workaround suing the document.getElementsByClassName()[0]. Which returns a array class hence the use of [0] to get the first item in the array.

Reflection. 
From this website I can gather I need to spend more time learning CSS as it was the biggest let down and lead cause to may of my issues creating this web site. I tried many different experiments to get themes and page formatting working on different <div> elements to work.  
The CSS of this web site need to be heavily improved on. If more time and guidance was giving the CSS on this web site would ideally have themes properly applied with inheritance and more page formatting applied to different aspects of the page and example of this would be in the admin info page in which I tried to split some of the paragraphs in to two sperate column, but it did not want to work. 

Aspects of the web page I am happy with are the java script. The initial coding used to get the page working had lots of repeating function with the same code, I was able to minimize the code down to three function which provides the functionality to the whole SPA.
