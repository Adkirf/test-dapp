# Frontend Development SOP

## Main Layout Component
- [x] Create MainLayout component in src/components/layout/MainLayout.tsx
- [x] Implement a basic structure with header, main content area, and footer
- [x] Add navigation menu items (if applicable)
- [x] Ensure the layout is responsive

## Home Page
- [x] Update src/app/page.tsx to serve as the home page
- [x] Add a brief explanation of the app's purpose and features
- [x] Include links or buttons to main app functionalities

## Implemement WalleConnect
- [x] Create the Wagmi configutation
- [x] Create the Wallet ConnextProvider
- [x] Add WalletConnect context to layout
- [x] Implement simple wallet connect button 

## SIWE and One-Click Auth
- [#] Review the @ImplementSIWE.md
- [#] Configure SIWE Client
- [#] Set up API route
- [#] Initialize AppKit with siweConfig.
- [#] Create route-protected profile page. 

## Final Review
- [x] Conduct a thorough code review
- [x] Refactor and optimize code where necessary
- [x] Ensure consistent coding style and naming conventions
- [x] Mark all steps in this file as completed, and update the @overview.md file with the current progress.

## Questions
- [] What is the benefit of using SIWE, instead of just fetching the wallet adress from the walletconnect modal to authenticate the user? 
- [] Is the current code relying on Cookies?
- [] Is the current code production ready? 
- [] Security concerns?

