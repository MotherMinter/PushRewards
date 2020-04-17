<img src="https://github.com/MotherMinter/Push/blob/master/www/static/push_logo.svg" alt="Push.">

# Mother Minter Reward's system
Send, receive and spend Minter coins with ease. Powered by <a href="https://github.com/MinterTeam" target="_blank">Minter blockchain</a>.

## Description

5S.GIFT is a light web-app wallet accessed by a unique URL address. Just by clicking a link a user obtains the ability to spend wallet's balance with no sign-up, no login, no registration, no password or whatever. Although the link-wallet app has advanced options for users that wish to create multiple wallets and run commercial campaigns. The app offers users different modes and scenarios that could be applied to a big variety of private and commercial cases with excellent customization abilities and API methods.

## Modes and usage scenarios

### One wallet mode

<b>`Simple.`</b> The app creates a unique URL-wallet for a user. Anyone who knows the URL gets access to a balance. The user is able to attach a message or set a password to the link-wallet if they want. In this case, a recipient will need to know the URL and the password. Also, a user may customize the wallet by picking an envelope for it from the preset skins. All modes contain easy and wide sharing options.

<b>`Feedback.`</b> The scenario in which the wallet user, before gaining access to it, must leave some kind of feedback: review, opinion, suggestion, recommendation, consultation or other valuable information. After filling out the form and submitting it, the user gets access to the balance. The user's feedback is sent to the creator email 
address.

<b>`Action.`</b> In this scenario, the user must complete a task and fill out a form with proof of its completion before accessing the link-wallet. The task to be performed is described by the creator in the step of wallet generation. For example repost, like, comment, or other action. The result of the user’s action is sent to the creator's email address.

* In One wallet mode, a link-wallet is sent from one user to another (one-to-one), which most likely implies the presence of acquaintance between the participants in the process, or the presence of a basic level of trust. Obviously, these cases do not require an advanced level of validation of actions, a useful action will be performed efficiently due to the mutual interest of the parties.

<b>One wallet mode functionality</b>

* Balance auto check & load
* Deeplink transaction functionality 
* Link-wallet password protection
* Customization skins
* Localization (languages, currencies)
* Extensive share options: native, QRs, copy buffer, direct target spending links, shares & QRs
* Balance spend: top-up mobile (<a href="https://biptophone.ru/apiuser.php" target="_blank">api options</a>), Time Loop game, charity fund
* Balance transfer (other addresses)
* Balance forwarding (new wallet-link generation) 


### Multiple wallet mode

A user has to sign-up and login to an account to be able to create multiple wallet campaigns. 
They will be offered to specify:

* A number of wallets to generate (fixed or unlimited)
* Wallets working scenario (simple or feedback)
* Indicate one wallet balance 
* Indicate target spending (completely flexible)
* Attach feedback request (in feedback mode)
* Pick up skins (in simple mode)
* Import email database to generate wallets for it
* Send wallets to imported email database
* Export or copy a generated list of link-wallets
* Track statistics

<b>Unlimited wallets:</b> 
This option allows a user to create an unlimited number of wallets through an API method:

`/api/company/uid/get_wallet?count=N` 

API request generates N number of wallets and returns them in JSON format. Please note, newly created wallets will have zero balances by default and will be credited only after a recipient's first visit.

<b>There are two scenarios to create multiple wallet campaigns:</b> 

<b>`Simple.`</b> Unique URL-wallets with easy access to them, just by clicking the link.

<b>`Feedback.`</b> Before accessing, users must leave feedback. For validation purposes, our solution has a developed api method, please check point <a href="https://github.com/MotherMinter/Push#5-beforeafter-activation">5 of an API documentation section</a>

* Please note the mechanics of creating an array of wallets that have been implemented.
The funds sent to deposit a campaign are initially credited to an intermediate address. The activation of individual wallets  (meaning depositing funds to the wallets) occurs only after a user visits a wallet link. This provides an ability to return unused funds to the campaign creator.

### Branded link-wallet

The branded URL feature has been implemented. 

<b>Examples</b>

`https://<your_host>/coffeyshop`

`https://<your_host>/barbershop`

Any other URL address from 6 to 64 characters will work fine. To generate a link-wallet a user needs to go by a branded link and input a password they want. After the password entrance, a URL-wallet is created in which the address for replenishing the balance is indicated. To access the balance the URL and the password needed.

## Security

The wallet app is implemented using light client technology, this approach ensures that a private key (and seed phrase) never leaves the user's end-device. The process of transaction creation and signing takes place in the application, after which the formed transactions are sent to the network through the server. A password that the user inputs during wallet creation is involved in private key generation, and not transmitted outside the application in an open way.

## UX & UI

For developing the app a clear and light design approach was adopted. 

* Clean modern design
* No visual barriers or distractions
* All app interface scenarios are decorated with meta-data, modal windows with prompts, place holders with examples to facilitate user navigation and interaction with the application
* Short link-wallets (6 characters, apart from a domain name)
* <a href="https://github.com/MotherMinter/Push/blob/master/www/static/Block_diagram_full.jpg" target="_blank">Full UI-design</a>

## Customization

There are two main directions for app customization, both of them are implemented in the project.

<b>`Branded stile.`</b> There is the ability to attach full-screen custom animation and a message to a wallet.

<b>`Target spending.`</b> A campaign creator is able to indicate target spending in a completely flexible way.

<b>Adding new skins</b>

<b>1.</b> Add skin stiles to `/www/pages/skin.js`
```
{
    id: 'starwars',
    label: 'STAR WARS',
    image: '',
    path: './skins/star-wars-day.html'
},
``` 

<b>2.</b> Create skin html. Template - `/www/static/skins/_skin-template.html`
Skin have to consist from - html, css, js.

## Backend part
Deploy your copy on a server or use our public api - `https://p.motherminter.org/api/`<br>
Backend - is'a <a href=https://nestjs.com/>NestJS</a> app starting on **3048** port <br>

### Installation and running
```bash
git clone https://github.com/MotherMinter/Push.git
cd Push
yarn install && yarn build

# copy .env and ormconfig to dist forlder and fill them
cp .env.example ./dist/.env
cp ormconfig.json.example ./dist/ormconfig.json

# run DB migrations
yarn typeorm migration:run

# run backend API
cd dist
node ./src/main.js

# or use pm2
pm2 start ./src/main.js
```

## Frontend part
Frontend - is a simple <a href="https://nuxtjs.org/">NuxtJS</a> application by light wallet technology starting on **30480** port<br>

### Installation and running

```bash
# build app 
cd www
yarn install && yarn build 

# run 
yarn start

# or use pm2
pm2 start npm --name "nuxt" -- start
```

## API Documentation
You can find the project Swagger API doc on `https://<your_host>:3048/docs/` . 
You may use it for test of your backend.

#### 1. Create a campaign
```
POST /api/company

Params - json object (may be empty or contain parameters)
{
    "type": "complex|complex_feedback|complex_action|simple_feedback|simple_action|simple",
    "email": "any@email.mn",
    "password": "any_company_password",
    "protected": 0/1,
    "params": {
        "count": 3,
        "amount": "3.0",
        "symbol": "BIP",
        "title": "hello_msg in wallet interface",
        "notice": "activation task message",
        "callback_link": "https://you_backend_for_reply.mn/",
    }
}

type - company type
email|password - use'it to auth in company stat's
count - count of wallet any Number or 0 if you create unlim company
protected - flag - True if wallet have a password
callback_link - used for feedback|action company
``` 
##### Callback request to validate reply
IF company have callback_link, our server send all reply to this callback
```
request - json
{
    "waller_uid": "wallet_uid",
    "company_uid": "company_uid",
    "reply": "user reply text"
}


response must return json
{
    "status": "ok|error",
}
```


#### 2. "One more wallet" link for an Unlimited campaign
```
GET /api/company/{company_uid}/get_wallet?count=N

N - count of new wallet you need
```

#### 3. Get wallet information
Check if wallet exists and returns info and status (need activation, need password)
```
GET /api/{wallet_uid}
```

#### 4. Try to login or activate a wallet
Wallet interface calculates an address from (uid and password if exists) and sends it back, server checks it and returns: success or fail.

```
POST /api/{wallet_uid}

Params
{
    "mxaddress": "Mx000...",
    "custom": 1/0, 
}

custom - flag if it address is custom type 
``` 

#### 5. Before/After activation
This request's used for feedback/action wallet type
```
POST /api/{wallet_uid}/complex

Params
{
    "mxaddress": "Mx000...",
}

Return wallet initial balance and task for activation
```

```
POST /api/{wallet_uid}/after

Params 
{
    "mxaddress": "Mx000...",
}

Return message to user
```

#### 6. Send reply for complex type
Store user reply to DB and activate wallet if needed

```
POST /api/{wallet_uid}/reply

Params
{
    "mxaddress": "Mx000...",
    "reply": "user reply message or review or action",
}
``` 

#### 7. Send signed raw transaction to the network
All transaction created and signed in a wallet interface (on a client side)

```
POST /api/{wallet_uid}/send

Params
{
    "mxaddress": "Mx000...",
    "rawTx": "0x.....",
}

mxaddress - used for auth request
rawTx - hex of signed transaction
```
