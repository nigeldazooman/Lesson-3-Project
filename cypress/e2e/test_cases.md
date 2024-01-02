Test Cases

Title: TestValidLogin
Description: Verify that using a valid username and password allows site to transition to inventory page successfully
Steps to Execute:
    1. navigate to 'www.saucedemo.com'
    2. input username 'standard_user'
    3. input password 'secret_sauce'
    4. click 'login' button
    5. verify that inventory page is now displayed
Expected Results: Website should transition from login page to inventory page

Title: TestInvalidLogin
Description: Verify that using an invalid username and password does not allow transition to inventory page and displays 'invalid credentials' message
Steps to Execute:
    1. navigate to 'www.saucedemo.com'
    2. input username 'invalid_user'
    3. input password 'secret_sauce'
    4. click 'login' button
    5. verify that website remains on login screen and error message is displayed
Expected Results: Website should not transition from login page but should instead display error message: 'Epic Sadface: Username and password do not match any user in this service.'

Title: NavigatetoBackpackPage
Description: From the inventory page, navigate to the 'Sauce Labs Backpack' item description page using the hyperlink
Steps to Execute:
    1. run 'ValidLogin' function
    2. click 'Sauce Labs Backpack' hyperlink or product image
    3. verify that website loads the correct image and product description
Expected Results: Website should transition from main 'inventory' page to 'Sauce Labs Backpack' page and display correct image and product description on that page

Title: VerifyItemsAddedtoCart
Description: Add two items to shopping cart then navigate to the shopping cart to verify they have been added
Steps to Execute: 
    1. run 'ValidLogin' function
    2. click 'Add to Cart' button on any two items of the inventory page
    3. click 'Shopping Cart' image in the top right corner of the inventory page
    4. verify that two items added are now displayed in the shopping cart
Expected Results: shopping cart page of the website should correctly show the items added to the cart

Title: VerifySuccessfulCheckout
Description: Confirm that once items are in the shopping cart, user can input name and zip code, successfully submit the order and complete the checkout process
Steps to Execute:
    1. run 'ValidLogin' function
    2. click 'Add to Cart' on any item(s) of the inventory page
    3. click 'Shopping Cart' image in the top right corner of the inventory page
    4. click 'Checkout'
    5. input first name 'default'
    6. input last name 'user'
    7. input zip/postal code '12345'
    8. click 'Finish'
Expected Results: shopping cart page will accept user data, correctly determine tax and shipping, then receive the order and display 'Thank you for your order!' page