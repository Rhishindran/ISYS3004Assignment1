Student Name: Rhishindran Ravichandar
Student ID :18360488

Final live website : https://rhishindran.github.io/ISYS3004Assignment1/
repository link : https://github.com/Rhishindran/ISYS3004Assignment1

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

		6. 6. error/warning of "Error with Permissions-Policy header: Unrecognized feature: 'interest-cohort' ", only on chrome from what I gather it is an error associated with google tag manger. And the error/warning  appear intermediately between page loads

References. 

		1. (line:78 index.html)<hr> tags taken from https://www.w3schools.com/tags/tag_hr.asp
		
		2. (line:18 index.html)Navigation bar code was adapted from https://www.w3schools.com/css/css_navbar_horizontal.asp
			Base code was taken from w3 schools, edited it to contain lot more <li> options and added in a button to the list then used CSS to cauterize the change them button to the right of the navigation bar. 
		
		3. (line:541 index.html)CSS taken from https://stackoverflow.com/questions/3239167/create-two-column-footer-using-div
			In footer section I wanted to create two sections of text divided in to tow column, used some code form this stack overflow article , but did some changes to make it fit for my website purpose 
		
		4. (Line:22 script.js)idea to change display properties of elements came from https://www.w3schools.com/cssref/pr_class_display.asp
		
		5. (Line:15 script.js)On load function code taken and adapted from https://www.w3schools.com/cssref/pr_class_display.asp
			needed to run a script on load to display homepage and clear other elements.

		6. (Line:22 script.js)Adapted code of document.getElementsByClassName()[0]. From https://stackoverflow.com/questions/28387375/javascript-cant-get-getelementsbyclassname-working
			Had issues running the document.getElementByClassName() function kept giving error of function could not be found.  Looking on stack overflow found this workaround suing the document.getElementsByClassName()[0]. Which returns a array class hence the use of [0] to get the first item in the array.

		7. (line:11 index.html)<link rel="shortcut icon" href="#"> used to fix unknown error of  failed to load favicon.ico error taken from https://stackoverflow.com/questions/31075893/im-getting-favicon-ico-error
			honestly not sure what this error is, form what I gather it has something to do with git hub generates its pages?, I found this fix via stack overflow.



Reflection. 
From this website I can gather I need to spend more time learning CSS as it was the biggest let down and lead cause to may of my issues creating this web site. I tried many different experiments to get themes and page formatting working on different <div> elements to work.  
The CSS of this web site need to be heavily improved on. If more time and guidance was giving the CSS on this web site would ideally have themes properly applied with inheritance and more page formatting applied to different aspects of the page and example of this would be in the admin info page in which I tried to split some of the paragraphs in to two sperate column, but it did not want to work. 

Aspects of the web page I am happy with are the java script. The initial coding used to get the page working had lots of repeating function with the same code, I was able to minimize the code down to three function which provides the functionality to the whole SPA.
