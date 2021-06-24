# Profile the company
- Seek.com.au/Companies
- This website is aimed at potential and current employees who can read and submit reviews about employers. 
- Users can view average salaries and various ratings given by other employees. 
- Users can view job postings at companies and see recommendations for other similar companies.  
# Define your test strategy
- UI Functional testing
   Selenium
- Backend integration API testing
   Supertest
# What to test
>Browser Tests

>Search Bar

>Popular Employers

>Company Page
>- Overview
>>- Ratings
>>- Employee Reviews
>>- Company Overview
>>- Jobs in McDonalds
>>- Similar Companies
>- Reviews
>>- Filtering & Sorting
>>- View Reviews
>>>- Hover Rating
>>>- Like Button
>>>- Flag Form
>>- Pagination
>- Jobs
>>- Search Bar
>>- Job Cards
>>- Job Listing

>Write a Review
>- Authorisation
>- Company List
>- Review Ratings

>Authentication - Not doing, since it is in production.
>- Menu Bar Status
# Design test cases
- As a User, I want a search feature that takes Company name and on pressing enter, it should take me to Company overview page.
- As a User, I want to click on company from most popular companies, it should take me company overview page
- As a User, I want to see the over all rating for company consistent within Company page and Company overview page
- As a User, when I am on the Company overview page,  I want to click on reviews tab, it should then display reviews sorted by most recent by default.
- As a User, when I am on the Company Reviews page, I should see the total number of reviews displayed on the Reviews tab(number) and in the Showing(number) search result should be the same.
- As a User, When I am on Company Reviews Page, I should see a maximum of 10 records per page under search reviews.
- As a User, When I am on Company Reviews Page, I should be able to filter my Ratings
- As a User, When I am on Company Reviews Page, I should be able to clear the filter if any filters were applied
- As a  User, When I am on Reviews Page, I should be able to search by specific Review Title. Content of the review displayed should be consistent with the content displayed in reviews on the Overview page.
- As a User, When I am not logged in, I want to click on the Helpful (upvote) button, It should take me to the Login page.
- As a User, when I am on Companies Page, I decrease the browser size, all the menu items (Job Search, Profile, career advice and Company Reviews) should be displayed under user dropdown
# Framework
- Selenium in JavaScript
- Mocha in JavaScript
- ReactJS Tools
# Plan, how you're going to split up the work
- Made a trello board and split components in cards. Cards - can be picked from the To-Do pool.
# TODO
- Cover API Testing User stories
