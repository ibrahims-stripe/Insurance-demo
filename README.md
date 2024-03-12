[![](https://img.youtube.com/vi/1s7WNRh3BHI/0.jpg)](https://www.youtube.com/watch?v=1s7WNRh3BHI)
-   Clone the app
-   install dependencies
    `npm install`
-   rename `.env-sample` to `.env` and add your Stripe Secret Key to it
-   run
    `npm run dev`

Configuration
    
We recommend doing the configuration on a new Stripe account but should work on any Stripe account.
- Enable the following gate for the Stripe account
  [allow_limited_payee_onboarding_in_us](https://admin.corp.stripe.com/gates/allow_limited_payee_onboarding_in_us)
  - When enabling the gate, use the following admin [link](https://admin.corp.stripe.com/gates/allow_limited_payee_onboarding_in_us) (and not excelsior). During the gate enablement process, in the second screen, toggle the button `Test Connect Client Application` along with the `Merchant` button. This will enable the gate on the Stripe platform account and the connected accounts that will be created as part of the demo.
  - Make sure the account you are using is activated. You can do it by running the `activate account` scenario in [go/scenarios](https://go/scenarios)
- If the previous process didn't work, enable limited payees excelsior capability by following [this guide](https://confluence.corp.stripe.com/display/CONNECT/questions/410109054/how-can-i-get-my-test-platform-set-up-to-create-transfers-only-us-subaccounts)
- Enable the server-side integration for terminal in your account
  - Activate the [feature flag](https://amp.corp.stripe.com/feature-flags/flag/terminal_enable_server_driven_endpoints) to make sure you can execute the terminal transactions
  - Register your terminal in the account to use it with the demo

- Setup Connect  
  - Dashboard -> Connect and follow the prompts to setup a platform to enable transfers and payouts

- Set payouts to _manual_ for the platform account
  - https://dashboard.stripe.com/settings/payouts

- Add test funds (say $10.000) to your platform balance
  - Stripe Dashboard -> Balances -> Add to balance
# Insurance-demo
