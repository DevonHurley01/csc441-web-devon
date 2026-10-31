## Week 8 FRI
On the phone the header was not stacking when it should have been. I added fex-warp: warp; it seemed to fix that problem.
## Week 9, Wednesday
1. What are your three pages, and why those three?
    My three pages are index, projects, and contacts. I chose these pages to show off my project and assemble a home page
    and lastly I wanted to learn how to make a good contact page.
2. You changed one thing in styles.css and all three pages changed. What would you have had to do if each page carried its own copy?
    I would have had to write the code three different times instead of once. 
4. What is one thing on your page you don't know how to change yet?
    I don't know hot to get a portfolio of images that can be swiped through and creating a banner for the page.

## Week 9, Friday
1. What width did you pick for your breakpoint, and how did you choose it?
    I left my width to 40 rem because it was what was given on the Lab and it looked the most pleasing to me. 
2. The two things you found and fixed at phone width.
    The image could have caused problems on smaller screens so I made a class in styles to avoid that. I also fixed some formatting issues that I noticed when changing the screen to mobile size.
3. In your own words: what is the difference between justify-content and align-items?
    Justify-content seemed to move items in the same direction they are facing. While align-items moved these items perpendicular to the way they are facing. If cards are in a row the justify moves left and right while align moves up and down.
4. Why does the plain rule hold the narrow layout and the media query hold the wide one, instead of the other way round?
    The plain rule seems to work on smaller screens while the media query seems to work on bigger screens like computers.

## Week 10, Wednesday
1. In your own words: what is the difference between HTML, CSS and JavaScript? One sentence each.
    HTML is what structures your page with information. CSS styles the look of your page, while JavaScript makes your page funtional with the user.
2. What does `defer` do on the script tag, and what breaks without it?
    Defer allows the page to run first before gathering elements, so the JavaScript doesn't run to early.
3. Dark mode changed your whole site with five lines of CSS. Why did that work? What would you have had to do without variables?
    CSS variables let me change the all the colors in one spot. If we didn't have variables we would have to go through all the colors manually.
4. Something went wrong this week and the Console said nothing at all. What was it, and how did you eventually find it?
    This week we were trying to make the theme button and I forgot to add the .toggle in the JavaScript. I didn't notice the error in the console, but it was eventually found by the teacher.
5. What is one thing on your page you don't know how to change yet?
    I wish the change from ligh mode to dark mode was smoother like fade or smooth transition.

## Week 10, Friday
1. What does event.preventDefault() do, and what happens without it?
    It stops the form from refreshing and clearing the information.
2. You got "Cannot read properties of null" in class. In your own words, why did it happen, and why did if fix it?
    JavaScript is trying to find something in the HTML and it wasn't there. The if statement checks if the element is available before using it.
3. What rule did you write for your form, and why that rule?
    I wrote all three rules. I made it so it checks the name, email, and message before allowing the user to send the message.
4. The two things you found and fixed at phone width.
    <!--Lab 16: Task 3: 2 fixes-->
    I added a min-height to form button to make it more iphone friendly. I also added a max width to form input, form textarea so it would go out of the text fields.
5. Your form does not actually send anything anywhere yet. What do you think is missing?
    It is missing a mailto:bob@email.com right from the page. This allows the users message to go straight through to your email without leaving the site.