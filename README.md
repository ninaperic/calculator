# Calculator

Vintage Clocks Shop is a website that represents our shop where we sell vintage clocks. It is created so the people can find information about Vintage Clocks Shop, what we sell and also to be able to find us and contact us.

Here you can explore our <a href="https://ninaperic.github.io/vintage-clocks/" alt="vintage-clocks-shop" target="_blank">Vintage Clocks Shop</a>.

## Edge cases 

* Don't allow two operation signs next to each other
* Don't allow two dots next to each other
* Don't allow more then one dot in a number 
* Don't start numbers with zero


## Contents

* [**User experience UX**](#user-experience-ux)
  * [User Stories](#user-stories)
  * [User Stories](#user-stories)
  * [Site structure](#site-structure)
  * [Design choises](#design-choises)
* [**Features**](#features)
  * [Existing Features (Functions and structure)](#existing-features-functions-and-structure)
  * [Future Features](#future-features)
* [**Technologies Used**](#technologies-used)
* [**Testing**](#testing)
    * [Validator Testing](#validator-testing)
    * [Responsivness Test](#responsivness-test)
    * [Responsivness Test](#responsivness-test)
    * [Browser Compatibility](#browser-compatibility)
    * [Testing User Stories](#testing-user-stories)
    * [Known Bugs](#known-bugs)
* [**Deployment**](#deployment)
* [**Credits**](#credits)
    * [Content](#content)
    * [Credits](#credits)
* [**Acknowledgements**](#acknowledgements)

![Screenshot of the website](https://github.com/ninaperic/vintage-clocks/blob/main/assets/readme_images/devices.png)

## User Experience (UX)

## User stories 

- As a user I want to understand what Vintage Clocks Shop is about.
- As a user I want to see pictures of the clocks the shop sells.
- As a user I want to navigate trough the pages od the web site.
- As a user I want to be able to contact the shop.
- As a user I want to see where the shop is located.
- As a user I want to see who made the website.

## Site Structure

Vintage Clocks Shop has three pages About, Gallery and Contact. On the About page the user can read the story about our shop. Gallery and Contact pages provide a collection of images with our latest clocks and information about how to find us and contact us.

## Design Choices

- Typography

  - The font used for the text was 'Dancing Script' which is cursive and gives the web site a vintage look.

- Colour Scheme

  - The color scheme is also based on vintage looking colors, that give impression of warmth and cozy feeling. 

![Color palette](assets/readme_images/color_palette.jpg)

## Features

### Existing Features (Functions and structure)

- __Navigation Bar__

  - Featured on all three pages, the full responsive navigation bar includes links to the About page, Gallery and Contact page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Nav Bar](https://github.com/ninaperic/vintage-clocks/blob/main/assets/readme_images/nav-bar.png)

- __About Page__

  - About page provides information to the user about the store, the reason why it was open, when it was open and it's opening hours.

![About Page](https://github.com/ninaperic/vintage-clocks/blob/main/assets/readme_images/about.png)

- __Gallery Page__

  - Gallery page will provide the user with collection of pictures to see some of the newest clocks we have in our shop.

![Gallery](https://github.com/ninaperic/vintage-clocks/blob/main/assets/readme_images/gallery.png)

- __Contact Page__

  - This page allows the user to find us and contact us. It also provides our e-mail adress and phone number.
  - The user will be able to send us a message but for that the user will be asked first to write their name and e-mail adress. 

![Contact](https://github.com/ninaperic/vintage-clocks/blob/main/assets/readme_images/contact.png)

 - __The Footer__ 

  - The footer section includes links to the relevant social media sites. The links will open in a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media.

![Footer](https://github.com/ninaperic/vintage-clocks/blob/main/assets/readme_images/footer.png)

### Future Features

- Gallery becomes a shop page where user can select and add clocks to the shoping cart. 
- Add shopping cart page where the user can finish shopping.
- Add shopping cart icon to header.
- Add shopping functionality.

## Technologies Used

- HTML5: Used for the web site content.
- CSS: Used to style the web site.
- VS Code: The editor used for coding.
- Github: Used as version control system.
- Github Pages: Used to deploy web site online.

## Testing 

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fninaperic.github.io%2Fvintage-clocks%2F%3Ffbclid%3DIwAR0xLERJXKN7cHw1VtFblWWuqU_R_KGFj89za0jHKwLtPgH1z2NwtI8ex1o)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fninaperic.github.io%2Fvintage-clocks%2F%3Ffbclid%3DIwAR0xLERJXKN7cHw1VtFblWWuqU_R_KGFj89za0jHKwLtPgH1z2NwtI8ex1o&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)


### Responsivness Test

- Responsivness test was done using Chrome Dev tools.

|        | iPhone 6/7/8 Plus | Pixel 2 XL| iPhone 5 | iPad | iPad Pro | Display <1200px | Display >1200px |
|--------|-------------------|-----------|----------|------|----------|-----------------|-----------------|
| Render | pass              | pass      | pass     | pass | pass     | pass            | pass            |
| Images | pass              | pass      | pass     | pass | pass     | pass            | pass            |
| Links  | pass              | pass      | pass     | pass | pass     | pass            | pass            |


### Browser Compatibility

Vintage Clocks Shop is functional and properly displayed in the following web browsers: Google Chrome, Mozilla Firefox and Safari. 

### Testing User Stories

-  As a user I want to understand what Vintage Clocks Shop is about.

   - About page provides information about the idea which led to open Vintage Clocks shop and the whole story about it.

- As a user I want to see pictures of the clocks the shop sells.

   - Gallery page is filled with images of our latest vintage clocks.

- As a user I want to navigate trough the pages od the web site.
 
   - At the top of every page there is the navigation menu.

- As a user I want to be able to contact the shop.
 
   - Contact page has all the information the user needs to contact us, including a form to send us a message, e-mail adress and phone number.

- As a user I want to see where is the shop located.

   - Contact page provides a google map as well so the user can see our location.

- As a user I want to see who made the website.

   - To the bottom of the page the user can see the copyright listed.

### Known Bugs

- Resolved 
  - `alt` attribute was missing on some images.
  - Textarea head `type` attribute which was not valid.
  - Some images used `.webp` format which was not supported in Safari.

- Unresolved
  - One of the images fails to load in Safari.

 ![Deploying Steps](assets/readme_images/safari_image_issue.png)

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 

1. In the GitHub repository, navigate to the Settings tab 
2. From the source section drop-down menu, select the Master Branch
3. Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

![Deploying Steps](assets/readme_images/deploying2.png)

The live link can be found here - https://ninaperic.github.io/vintage-clocks/

- Cloning project locally 

1. On the repository, click on the code tab.
2. Click on the code button the right.
3. In the Clone with HTTPS section, click on the clipboard icon to copy the given URL.
4. In your IDE of choice, open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL copied from GitHub.
7. Press enter and the local clone will be created.

![Cloning Steps](assets/readme_images/cloning.png)

## Credits  

### Content 


### Media


## Acknowledgements

This web site was created as a second project of five for the Full Stack Software Developer (e-Commerce) Diploma at the Code Institute. I wish to express my deepest gratitude to my mentor Precious Ijege for all the help trough the process of making this project.

Nina Perić 2021.




