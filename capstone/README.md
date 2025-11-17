# Solify - Automated Test Generation for Solana Anchor Programs

![Solify](solify/documents/solify_program_diagram.png)

## Overview

**Solify** is a comprehensive capstone project that revolutionizes the testing workflow for Solana Anchor programs. It is an intelligent CLI tool that automatically generates comprehensive test suites by analyzing program IDL (Interface Definition Language) files. Solify combines off-chain analysis with on-chain execution capabilities to create production-ready test cases.

## Problem Statement

Testing Solana programs is complex and time-consuming. Developers must:
- Manually write test cases for each instruction
- Understand complex account dependencies and ordering
- Handle PDA (Program Derived Address) initialization
- Create both positive and negative test scenarios
- Manage account setup and signers correctly

Solify solves these challenges by automating the entire test generation process through intelligent program analysis.

## Key Features

### 🚀 Automated Test Generation
- Generates complete TypeScript test suites from IDL files
- Creates both positive and negative test cases automatically
- Handles account setup, PDA initialization, and signer management

### 🧠 Intelligent Program Analysis
- **Dependency Analysis**: Analyzes instruction dependencies using graph algorithms
- **Account Ordering**: Determines correct account creation and initialization order
- **PDA Detection**: Automatically detects and initializes Program Derived Addresses
- **Setup Generation**: Creates comprehensive setup requirements for test execution

### 🎨 Interactive User Experience
- Beautiful Terminal User Interface (TUI) built with Ratatui
- Interactive instruction ordering selection
- Real-time progress indicators and status updates
- Transaction inspector with detailed breakdown

### ⛓️ On-Chain Processing
- Executes instructions on-chain to gather real transaction data
- Stores IDL data and test metadata on Solana blockchain
- Supports both on-chain and off-chain computation modes

### 🔍 Transaction Inspection
- Inspect and analyze Solana transactions with detailed breakdown
- View instruction data, account information, and execution logs
- Analyze compute units, fees, and return data

## Architecture

Solify is built as a modular Rust workspace with the following components:

### Core Components

```
solify/
├── cli/              # CLI application with interactive TUI
├── parser/           # IDL parsing and JSON deserialization
├── analyzer/         # Program analysis (dependencies, PDAs, account ordering)
├── generator/        # Test file generation using Handlebars templates
├── client/           # Solana RPC client for on-chain operations
├── common/           # Shared types, errors, and utilities
└── solana-program/   # On-chain Solana program for metadata storage
```

### Component Details

#### 1. **CLI (`cli/`)**
- Command-line interface with `clap` for argument parsing
- Interactive TUI built with `ratatui` and `crossterm`
- Commands:
  - `gen-test`: Generate test suites for Anchor programs
  - `inspect`: Inspect Solana transactions

#### 2. **Parser (`parser/`)**
- Parses Anchor IDL JSON files
- Extracts program structure, instructions, accounts, and types
- Validates IDL format and structure

#### 3. **Analyzer (`analyzer/`)**
- **Dependency Analyzer**: Builds dependency graphs using `petgraph`
- **Account Order**: Determines correct account creation sequence
- **PDA Detector**: Identifies and sequences PDA initialization
- **Setup Generator**: Creates setup requirements for test execution
- **Test Case Generator**: Generates positive and negative test scenarios

#### 4. **Generator (`generator/`)**
- Uses Handlebars template engine for test file generation
- Generates TypeScript/Anchor-compatible test files
- Includes proper imports, setup code, and test cases

#### 5. **Client (`client/`)**
- Solana RPC client wrapper using `solana-client`
- Handles on-chain instruction execution
- Manages keypair generation, airdrops, and transaction submission

#### 6. **On-Chain Program (`solana-program/`)**
- Anchor program deployed on Solana
- Stores IDL data on-chain for program analysis
- Generates and stores test metadata
- Program ID: `7tvJ6jxJF81pozUSa2o8yPo6zsQCxG4GyF2b6JgaHqaa`

## How It Works

### 1. IDL Parsing
Solify reads and parses your Anchor program's IDL file, extracting:
- Program instructions and their parameters
- Account structures and constraints
- Type definitions and enums
- Error definitions

### 2. Dependency Analysis
Using graph algorithms, Solify analyzes:
- Instruction dependencies (which instructions must run before others)
- Account dependencies (which accounts must be created/initialized first)
- Data flow between instructions

### 3. Account Analysis
- Detects PDAs and their seed requirements
- Determines account creation order
- Identifies required signers and writable accounts
- Validates account flow consistency

### 4. Setup Generation
Creates comprehensive setup requirements:
- Keypair generation for test accounts
- SOL airdrops for transaction fees
- PDA initialization sequences
- Account creation and initialization

### 5. Test Case Generation
Generates test cases for each instruction:
- **Positive cases**: Valid inputs and expected successful outcomes
- **Negative cases**: Invalid inputs, error conditions, and edge cases
- Proper error handling and assertions

### 6. On-Chain Execution 
- Executes instructions on-chain to gather real transaction data
- Stores IDL and metadata on Solana blockchain
- Validates generated test cases against actual program behavior

### 7. Test File Generation
- Renders TypeScript test files using Handlebars templates
- Integrates with Anchor test framework
- Includes all necessary imports and setup code

## Project Structure

```
capstone/
├── README.md                    # This file
└── solify/
    ├── README.md                # Detailed Solify documentation
    ├── Cargo.toml               # Workspace configuration
    ├── cli/                     # CLI application
    │   ├── src/
    │   │   ├── main.rs         # Entry point
    │   │   ├── commands/       # Command implementations
    │   │   └── tui/            # Terminal UI components
    ├── parser/                  # IDL parser
    │   ├── src/
    │   └── idls/               # Example IDL files
    ├── analyzer/                # Program analyzer
    │   └── src/
    │       ├── dependency_analyzer.rs
    │       ├── account_order.rs
    │       ├── pda_detector.rs
    │       ├── setup_generator.rs
    │       └── test_case_generator.rs
    ├── generator/               # Test generator
    ├── client/                  # Solana RPC client
    ├── common/                  # Shared utilities
    ├── solana-program/          # On-chain Solana program
    │   └── solify/
    │       ├── programs/
    │       │   └── solify/
    │       │       └── src/
    │       │           ├── lib.rs
    │       │           ├── instructions/
    │       │           ├── state/
    │       │           └── analyzer/
    │       └── tests/
    └── documents/               # Project documentation
        ├── solify_program_diagram.png
        └── tests_passed.png
```

## Technical Stack

### Rust Workspace
- **Language**: Rust 1.70+
- **Workspace**: Cargo workspace with 6 crates
- **Async Runtime**: Tokio
- **Graph Algorithms**: Petgraph
- **Template Engine**: Handlebars

### Solana Integration
- **Anchor**: 0.32.1
- **Solana SDK**: 3.0.0
- **Solana Client**: 3.0.10
- **Network**: Devnet/Mainnet support

### CLI & UI
- **Argument Parsing**: Clap 4.4
- **TUI Framework**: Ratatui 0.29.0
- **Terminal Control**: Crossterm 0.29.0
- **Progress Indicators**: Indicatif 0.18.2

### Serialization
- **JSON**: Serde + Serde JSON
- **Binary**: Borsh

## Usage Examples

### Generate Tests for an Anchor Program

```bash
# Navigate to your Anchor project
cd your-anchor-project

# Build your program to generate IDL
anchor build

# Generate tests using Solify
solify gen-test

# Or with custom paths
solify gen-test --idl target/idl/my_program.json --output tests

# Use off-chain computation
solify gen-test --off
```

### Inspect a Transaction

```bash
solify inspect <transaction-signature>
```

## Test Results

![Tests Passed](solify/documents/tests_passed.png)

Solify has been tested with multiple Anchor programs including:
- Counter programs
- Greeting programs
- Journal applications
- Escrow contracts
- Token vaults
- Voting dApps

All generated tests pass successfully with comprehensive coverage.

## Key Algorithms

### Dependency Graph Analysis
- Uses directed acyclic graphs (DAGs) to model instruction dependencies
- Topological sorting to determine execution order
- Cycle detection to prevent circular dependencies

### Account Ordering
- Analyzes account constraints and relationships
- Determines minimal account creation sequence
- Validates account flow consistency

### PDA Detection
- Pattern matching for PDA seed definitions
- Generates PDA derivation sequences
- Handles complex seed combinations


## Future Enhancements

- [ ] Support for more complex account relationships
- [ ] Web-based UI for test generation
- [ ] Support for cross-program invocations
- [ ] Advanced error case generation
- [ ] Performance optimization for large programs

## Challenges Overcome

1. **Complex Dependency Analysis**: Implemented graph-based algorithms to handle intricate instruction dependencies
2. **PDA Detection**: Developed pattern matching to identify and sequence PDA initialization
3. **Account Ordering**: Created algorithms to determine minimal account creation sequences
4. **On-Chain Integration**: Built Solana program to store and process metadata on-chain
5. **Test Generation**: Designed template system for flexible test file generation

## Author

**Aditya Sehrawat**
- Email: sehrawataditya22@gmail.com
- GitHub: [@adisehrawat](https://github.com/adisehrawat)


**Made with pure Rustling mind for the Solana community** 🦀

