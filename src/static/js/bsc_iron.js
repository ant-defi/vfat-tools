
$(function() {
  consoleInit()
  start(main)
})

async function main() {
  const STEEL_STAKING_ABI = [{"inputs":[{"internalType":"address","name":"_controller","type":"address"},{"internalType":"uint256","name":"_version","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"AddRewardPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":true,"internalType":"address","name":"rewardToken","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"pendingReward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rebaseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paidReward","type":"uint256"}],"name":"PayRewardPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"address","name":"rewardMultiplier","type":"address"}],"name":"UpdateRewardMultiplier","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endRewardBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"UpdateRewardPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"address","name":"rewardRebaser","type":"address"}],"name":"UpdateRewardRebaser","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BLOCKS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_rewardRebaser","type":"address"},{"internalType":"address","name":"_rewardMultiplier","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endRewardBlock","type":"uint256"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_lockRewardPercent","type":"uint256"},{"internalType":"uint256","name":"_startVestingBlock","type":"uint256"},{"internalType":"uint256","name":"_endVestingBlock","type":"uint256"}],"name":"addRewardPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"allowRecoverRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getAllRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_account","type":"address"}],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"getRewardMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"pid","type":"uint8"}],"name":"getRewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_pendingReward","type":"uint256"}],"name":"getRewardRebase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_account","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"accumulatedEarned","type":"uint256"},{"internalType":"uint256","name":"lockReward","type":"uint256"},{"internalType":"uint256","name":"lockRewardReleased","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeToken","type":"address"},{"internalType":"uint256","name":"_unstakingFrozenTime","type":"uint256"},{"internalType":"address","name":"_rewardFund","type":"address"},{"internalType":"address","name":"_timelock","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_account","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardPoolInfo","outputs":[{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"address","name":"rewardRebaser","type":"address"},{"internalType":"address","name":"rewardMultiplier","type":"address"},{"internalType":"uint256","name":"startRewardBlock","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"endRewardBlock","type":"uint256"},{"internalType":"uint256","name":"rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"},{"internalType":"uint256","name":"lockRewardPercent","type":"uint256"},{"internalType":"uint256","name":"startVestingBlock","type":"uint256"},{"internalType":"uint256","name":"endVestingBlock","type":"uint256"},{"internalType":"uint256","name":"numOfVestingBlocks","type":"uint256"},{"internalType":"uint256","name":"totalPaidRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPoolInfoLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"stakeFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timelock","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"unfrozenStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unstakingFrozenTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"updateReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_rewardMultiplier","type":"address"}],"name":"updateRewardMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"uint256","name":"_endRewardBlock","type":"uint256"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateRewardPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_rewardRebaser","type":"address"}],"name":"updateRewardRebaser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"lastStakeTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

  const App = await init_ethers()
  _print(`Initialized ${App.YOUR_ADDRESS}\n`)
  _print('Reading smart contracts...\n')

  const SteelPoolAddresses = [
    "0x8a82b731a33657211387058B55ccB23eb69De693",
    "0x9c0B31833B7B67Ad751e4B8Fd307fc65C5304eE9",
    "0x1985cf4892fE99A0595570b54ED3aB6A88fEd4CF"
  ];

  const tokens = {};
  const prices = await getBscPrices();

  const rewardTokenTicker = "STEEL";

  let totalStaked = 0;

  for(const a of SteelPoolAddresses){
    let STEEL_CHEF = new ethers.Contract(a, STEEL_STAKING_ABI, App.provider);
    let p = 
      await loadSteelChefContract(App, tokens, prices, STEEL_CHEF, a, STEEL_STAKING_ABI, rewardTokenTicker, "pendingReward");
    totalStaked += p.totalStaked;
  }
  _print_bold(`Total Staked: $${formatMoney(totalStaked)}`);
  
  hideLoading()
}

async function loadSteelChefContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker, pendingRewardsFunction,
  deathPoolIndices) {
  const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

  const poolCount = 1;
    
  _print(`<a href='https://bscscan.com/address/${chefAddress}' target='_blank'>Staking Contract</a>`);

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getBscSteelPoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction)));

  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
      tokens[address] = await getBscToken(App, address, chefAddress);
  }));

  if (deathPoolIndices) {   //load prices for the deathpool assets
    deathPoolIndices.map(i => poolInfos[i])
                     .map(poolInfo => 
      poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "bsc") : undefined);
  }

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "bsc") : undefined);

  let aprs = []
  for (i = 0; i < poolCount; i++) {
    if (poolPrices[i]) {
      const apr = printSteelChefPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
        poolInfos[i].rewardsPerWeek, rewardTokenTicker, poolInfos[i].rewardTokenAddress,
        pendingRewardsFunction, null, null, "bsc")
      aprs.push(apr);
    }
  }
  let totalUserStaked=0, totalStaked=0, averageApr=0;
  for (const a of aprs) {
    if (!isNaN(a.totalStakedUsd)) {
      totalStaked += a.totalStakedUsd;
    }
    if (a.userStakedUsd > 0) {
      totalUserStaked += a.userStakedUsd;
      averageApr += a.userStakedUsd * a.yearlyAPR / 100;
    }
  }
  averageApr = averageApr / totalUserStaked;
  return { prices, totalUserStaked, totalStaked, averageApr }

}

async function getBscSteelPoolInfo(App, chefContract, chefAddress, poolIndex, pendingRewardsFunction) {  
  const poolInfo = await chefContract.rewardPoolInfo(poolIndex);
  const rewardTokenAddress = poolInfo.rewardToken;
  const stakedTokenAddress = await chefContract.stakeToken();
  const rewardToken = await getBscToken(App, rewardTokenAddress, chefAddress);
  const rewardsPerWeek = poolInfo.rewardPerBlock / 10 ** rewardToken.decimals * 604800 / 3
  const poolToken = await getBscToken(App, stakedTokenAddress, chefAddress);
  const userInfo = await chefContract.userInfo(App.YOUR_ADDRESS);
  const pendingRewardTokens = await chefContract.callStatic[pendingRewardsFunction](poolIndex, App.YOUR_ADDRESS);
  const staked = userInfo.amount / 10 ** poolToken.decimals;
  return {
      address: stakedTokenAddress,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: poolToken,
      userStaked : staked,
      pendingRewardTokens : pendingRewardTokens / 10 ** 18,
      lastRewardBlock : poolInfo.lastRewardBlock,
      rewardTokenAddress : rewardTokenAddress,
      rewardsPerWeek : rewardsPerWeek
  };
}

function printSteelChefPool(App, chefAbi, chefAddr, prices, tokens, poolInfo, poolIndex, poolPrices, 
                       rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
                       pendingRewardsFunction, fixedDecimals, claimFunction, chain="eth") {  
  fixedDecimals = fixedDecimals ?? 2;
  const sp = (poolInfo.stakedToken == null) ? null : getPoolPrices(tokens, prices, poolInfo.stakedToken);
  var poolRewardsPerWeek = rewardsPerWeek;
  if (poolRewardsPerWeek == 0) return;
  const userStaked = poolInfo.userLPStaked ?? poolInfo.userStaked;
  const rewardPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
  const staked_tvl = sp?.staked_tvl ?? poolPrices.staked_tvl;
  poolPrices.print_price();
  sp?.print_price();
  const apr = printAPR(rewardTokenTicker, rewardPrice, poolRewardsPerWeek, poolPrices.stakeTokenTicker, 
    staked_tvl, userStaked, poolPrices.price, fixedDecimals);
  if (poolInfo.userLPStaked > 0) sp?.print_contained_price(userStaked);
  if (poolInfo.userStaked > 0) poolPrices.print_contained_price(userStaked);
  printChefContractLinks(App, chefAbi, chefAddr, poolIndex, poolInfo.address, pendingRewardsFunction,
    rewardTokenTicker, poolPrices.stakeTokenTicker, poolInfo.poolToken.unstaked, 
    poolInfo.userStaked, poolInfo.pendingRewardTokens, fixedDecimals, claimFunction, rewardPrice, chain);
  return apr;
}