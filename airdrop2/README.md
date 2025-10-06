# Solana Airdrop & Wallet Manager 🚀

Hey there! This is a simple Rust toolkit I built to help with Solana development. It's basically a collection of utilities that make working with Solana wallets and airdrops a breeze - especially when you're just getting started or need to test things quickly.

## What can this do for you?

- **Create wallets easily**: Generate new Solana keypairs without the hassle
- **Get free devnet SOL**: Claim test tokens from the faucet automatically  
- **Send SOL around**: Transfer tokens with smart fee handling
- **Work with Turbin3**: Interact with specific programs and NFT collections
- **Convert wallet formats**: Switch between Base58 and JSON formats when needed


1. First, grab the code:
```bash
git clone <https://github.com/adisehrawat/Turbin3Q4RustPrereq.git>
cd airdrop2
```

2. Build it (this might take a minute the first time):
```bash
cargo build
```

And that's it! You're ready to go.

## What's inside this project?

Here's what you'll find when you open this up:

```
airdrop2/
├── Cargo.toml      
├── src/
│   └── lib.rs  
├── dev-wallet.json    
├── Turbin3-wallet.json 
└── README.md      
```

## The libraries we're using

- `bs58`: Helps convert wallet formats (Base58 ↔ JSON)
- `solana-client`: Talks to the Solana network
- `solana-sdk`: Core Solana tools
- `solana-program`: Program interaction helpers
- `solana-system-interface`: System-level operations

## What can you actually do with this? 

Here are all the cool functions you can run:

### 1. Create a brand new wallet (`keygen`)
It will create a fresh wallet using Keypair::new()

```bash
cargo test keygen -- --show-output
```
### 2. Convert base58 to Wallet (`base58_to_wallet`)
Wallet file use JSON of numbers format for secret key of wallet.Here we use base58 decoding to decode base58 to JSON format

```bash
cargo test base58_to_wallet -- --nocapture
```
### 3. Convert wallet to base58 (`wallet_to_base58`)
As phantom wallet use base58 encoding for private keys. So to convert JSON array of numbers we use base58 encoding here

```bash
cargo test wallet_to_base58 -- --nocapture
```

### 4. Get free devnet SOL (`claim_airdrop`)
Using turbine rpc getting 2SOL airdropped in the wallet created.

**You'll need:**
- A `dev-wallet.json` file 

```bash
cargo test claim_airdrop -- --show-output
```

### 5. Send SOL to someone (`transfer_sol`)
Transfering 0.1 SOL to Turbin3 wallet

**You'll need:**
- A `dev-wallet.json` file
- Some SOL in your wallet (use the airdrop function above!)

```bash
cargo test transfer_sol -- --show-output
```

### 6. Empty your Wallet (`empty_wallet`)
Completely transfering all the SOL of a wallet to different one (transfering all SOL to turbin3_wallet_address)

**You'll need:**
- A `dev-wallet.json` file
- Some SOL in your wallet (use the airdrop function above!)

```bash
cargo test empty_wallet -- --show-output
```

### 7. Work with Turbin3 programs (`enroll`)
This one's a bit more specialized - it interacts with the Turbin3 prereq program. If you're working with Turbin3, this is your go-to function. Creation of Instruction using the Turbin3 prereq program, Using data vector of submit_rs instructionof turbin3 program and creating Instruction -
```
let instruction = Instruction {
    program_id: turbin3_prereq_program,
        accounts,
        data,
};
```

**You'll need:**
- A `Turbin3-wallet.json` file

```bash
cargo test run_submit_rs
```

## Setting up your wallet (super important!)

### Making your first wallet

1. Run this to create a new wallet:
```bash
cargo test keygen
```

2. You'll see a bunch of numbers in brackets - copy that whole thing and save it as a file called `dev-wallet.json`:
```json
[123, 45, 67, 89, 12, ...]
```

That's it! You now have a wallet file that the other functions can use.


## Network stuff (the boring but important part)

Everything runs on Solana's devnet (the test network):
- **Where it connects**: `https://api.devnet.solana.com` or `https://turbine-solanad-4cde.devnet.rpcpool.com/9a9da9cf-6db1-47dc-839a-55aca5c9c80a`
- **See your transactions**: [Solana Explorer](https://explorer.solana.com/?cluster=devnet) (just paste your transaction ID)

## Program addresses (for the curious)

If you're wondering what specific Solana programs this talks to:

- **Turbin3 Prereq Program**: `TRBZyQHB3m68FGeVsqTK39Wm4xejadjVhP5MAZaKWDM`
- **Collection Address**: `5ebsp5RChCGK7ssRZMVMufgVZhd2kFbNaotcZ5UvytN2`
- **MPL Core Program**: `CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d`
