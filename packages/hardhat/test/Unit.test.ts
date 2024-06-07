import { expect } from "chai";
import { deployments, ethers } from "hardhat";
import { Shirts, EurocupLegends, UPMock } from "../typechain-types";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("Contracts", () => {
    let owner: HardhatEthersSigner
    let creator1: HardhatEthersSigner
    let creator2: HardhatEthersSigner
    let creator3: HardhatEthersSigner
    let user: string
    let creators: any

    let shirts: Shirts
    let eurocupLegends: EurocupLegends

    const TICKET_PRICE = 15

    beforeEach(async () => {
        const signers: any[] = await ethers.getSigners()

        owner = signers[0]
        creator1 = signers[1]
        creator2 = signers[2]
        creator3 = signers[3]

        // deploy mock universal profile
        const upMock = await ethers.getContractFactory("UPMock")
        user = await (await upMock.deploy()).getAddress()

        creators = [{creator: creator1.address, share: 60}, {creator: creator2.address, share: 20}, {creator: creator3.address, share: 20}]

        const eurocupLegendsFactory = await ethers.getContractFactory("EurocupLegends")

        eurocupLegends = (await eurocupLegendsFactory.deploy(creators, owner))
        
        const shirtsFactory = await ethers.getContractFactory("Shirts")
        shirts = (await shirtsFactory.deploy(
            "England Shirts", 
            "ENG", 
            owner,
            await eurocupLegends.getAddress(), 
            ethers.parseEther(TICKET_PRICE.toString()))
        )
    })

    describe("Shirts.mint()", () => {
        it("mints 3 shirts to the recipient and 5 max", async () => {
            // mint 3
            await shirts.mint(user, 3, {value: ethers.parseEther((TICKET_PRICE * 3).toString())})

            expect(await shirts.balanceOf(user)).to.eq(3)

            // mint 2 more
            await shirts.mint(user, 2, {value: ethers.parseEther((TICKET_PRICE * 2).toString())})
            expect(await shirts.balanceOf(user)).to.eq(5)

            // try to mint 1 more
            await expect(shirts.mint(user, 1, {value: ethers.parseEther(TICKET_PRICE.toString())})).to.be.revertedWithCustomError(shirts, "MintLimitExceeded")
        })
        it("sends cost to the prize pool and splits fee among creators", async () => {
            const shirtsCost = TICKET_PRICE * 3
            const prize = 0.75 * shirtsCost
            const fee = 0.25 * shirtsCost

            let creator1PrevBal = await ethers.provider.getBalance(creator1.address)
            let creator2PrevBal = await ethers.provider.getBalance(creator2.address)
            let creator3PrevBal = await ethers.provider.getBalance(creator3.address)
            let creatorsPrevBals = [creator1PrevBal, creator2PrevBal, creator3PrevBal]

            await shirts.mint(user, 3, {value: ethers.parseEther((shirtsCost).toString())})

            // prize pool keeps 75%
            const prizePoolBalance = await ethers.provider.getBalance(eurocupLegends)
            expect(prizePoolBalance.toString()).to.eq(ethers.parseEther((prize).toString()))

            // creators split 25%
            for(let i = 0; i < creators.length; i++) {
                const share = (fee * creators[i].share) / 100
                const creatorPrevBal = creatorsPrevBals[i]
                const creatorCurrentBal = await ethers.provider.getBalance(creators[i].creator)
                expect(creatorCurrentBal).to.eq(creatorPrevBal + ethers.parseEther(share.toString()))
            }
        })
        it("reverts if mint is closed", async () => {
            await eurocupLegends.setMintStatus(false)

            await expect(shirts.mint(user, 1, {value: ethers.parseEther((TICKET_PRICE).toString())})).to.be.revertedWithCustomError(eurocupLegends, "TransferFailed")
        })
    })
})