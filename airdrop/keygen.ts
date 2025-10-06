import { createKeyPairSignerFromBytes } from "@solana/kit";
import bs58 from "bs58";
import promptSync from "prompt-sync";
const prompt = promptSync();

// async function keygen() {
//   const keypair = await crypto.subtle.generateKey({ name: "Ed25519" }, true, [
//     "sign",
//     "verify",
//   ]);
//   const privateKeyJwk = await crypto.subtle.exportKey(
//     "jwk",
//     keypair.privateKey
//   );
//   const privateKeyBase64 = privateKeyJwk.d;
//   if (!privateKeyBase64) throw new Error("Failed to get private key bytes");
//   const privateKeyBytes = new Uint8Array(
//     Buffer.from(privateKeyBase64, "base64")
//   );
//   const publicKeyBytes = new Uint8Array(
//     await crypto.subtle.exportKey("raw", keypair.publicKey)
//   );
//   const keypairBytes = new Uint8Array([...privateKeyBytes, ...publicKeyBytes]);
//   const signer = await createKeyPairSignerFromBytes(keypairBytes);
//   console.log(`You have generated a new Solana wallet:${signer.address}`);
//   console.log(
//     `To save your wallet, copy and paste the following into a JSON file: [${keypairBytes}]`
//   );
// }

// keygen()

function walletToBase58() {
  const walletBytes = ['1'];
  const base58 = bs58.encode(Uint8Array.from(walletBytes));
  console.log(`Base58 : ${base58}`);
}

walletToBase58();

// function base58ToWallet() {
//   const base58 = prompt("Enter base58 private key: ");
//   const walletBytes = bs58.decode(base58);
//   console.log("Wallet bytes:", walletBytes);
// }

// base58ToWallet()
