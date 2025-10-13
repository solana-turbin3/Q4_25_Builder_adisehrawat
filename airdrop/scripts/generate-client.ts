// import { createFromRoot } from 'codama';
// import { rootNodeFromAnchor, type AnchorIdl } from '@codama/nodes-from-anchor';
// import { renderVisitor as renderJavaScriptVisitor } from "@codama/renderers-js";
// import anchorIdl from '../programs/Turbin3_prereq.json';
// import path from 'path';

// const codama = createFromRoot(rootNodeFromAnchor(anchorIdl as AnchorIdl));

// const jsClient = path.join(import.meta.dirname, "..", "clients", "js");
// const renderClient = renderJavaScriptVisitor(path.join(jsClient, "src", "generated"));
// codama.accept(renderClient)

// script to fetch the IDL
import { Connection, PublicKey } from "@solana/web3.js";
import anchor from "@project-serum/anchor";
const fs = require("fs");
const path = require("path");


const connection = new Connection("https://api.devnet.solana.com");
const provider = new anchor.AnchorProvider(connection, wallet, anchor.AnchorProvider.defaultOptions());

const programId = new PublicKey("3mFFRU2CVQoT6DTZjTCtLJciEsyPyAkTeaYqyQuAJvLZ");

async function fetchIdl() {
  const idl = await anchor.Program.fetchIdl(programId, provider);

  if (!idl) {
    throw new Error("Failed to fetch IDL. The program may not be using Anchor.");
  }

  console.log("idl");

  return idl;
}

fetchIdl();
