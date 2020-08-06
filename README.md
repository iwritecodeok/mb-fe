## mb-fe

Front-End for sezzle code assesment (MathBook)
Started (08/04/2020)

# Objective:

Create a web app (using any programming languages) which logs calculations as they happen and shares those calculations with everyone connected to the website.

For example, user A and user B go to your site at the same time. User A calculates "5 + 5", which equals "10". This is logged below the calculator as "5 + 5 = 10". User B is updated about this calculation right after user A posts it. Now, user B calculates "3 x 4".This calculates to “12” and displays "3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.
Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest.

# Solution:

# Part (1) Back-End

https://github.com/jnichols93/mb-be

# Part (2) Front-End

- Calculator
  - [x] Build functional Calculator.
  - [x] Receive data from back-end.
  - [x] Send Input and output to back-end.

* History

  - [x] Add a list of the last 10 calculations.
  - [x] Sort most recent first. (fixed on back-end)
  - [x] List should only display the last 10 (fixed on back-end).
  - [ ] changes should be shown instantly.

* Notification System

  - [ ] Users should be updated whenever a new calculation is performed.

* Sign-in/Sign-up
  - [ ] sign-in.
  - [ ] sign-up.

# Tech-Stack:

- react
