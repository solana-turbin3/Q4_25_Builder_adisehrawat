use anchor_lang::prelude::*;

pub mod state;
pub mod instructions;

pub use instructions::*;
pub use state::*;

declare_id!("6g9XRw3KJfgN56kFezVCzq5o7MBYQrpFLjDG2L1w2BK");

#[program]
pub mod escrow {
    use super::*;

    pub fn make(ctx: Context<Make>, seed: u64, offer_from_a: u64, receive: u64) -> Result<()> {
        ctx.accounts.deposit(offer_from_a)?;
        ctx.accounts.init_escrow(seed, receive, &ctx.bumps)
    }

    pub fn refund(ctx: Context<Refund>) -> Result<()> {
        ctx.accounts.refund_and_close_vault()
    }

    pub fn take(ctx: Context<Take>) -> Result<()> {
        ctx.accounts.deposit()?;
        ctx.accounts.withdraw_and_close_vault()
    }
}



