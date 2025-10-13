import { Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import wallet from "../turbin3-wallet.json"
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("7u1DUyzuQ1Qt2iaRcQBvbwAwzvLiw9jtoJntyfP46mPW");

// Recipient address
const to = new PublicKey("E7xuUu76d3aza4PKAw1t6RnMJho4HFoRAKeUAjJhPbUt");

(async () => {
    try {
        // Get the token account of the fromWallet address, and if it does not exist, create it
        const sender_ata = await getOrCreateAssociatedTokenAccount(connection,keypair,mint,keypair.publicKey);
        const to_ata = await getOrCreateAssociatedTokenAccount(connection,keypair, mint, to);
        const tx = await transfer(connection, keypair, sender_ata.address, to_ata.address, keypair, 1e6);
        console.log(`tx is: `,tx);

        // Get the token account of the toWallet address, and if it does not exist, create it

        // Transfer the new token to the "toTokenAccount" we just created
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();