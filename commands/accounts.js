module.exports = async (params)=>{
  const DEBUG = params.config.DEBUG;
  if(DEBUG) console.log(" >>> ACCOUNTS")
  if(DEBUG) console.log("Reading Accounts...")
  let accounts = await params.web3.eth.getAccounts()
  params.fs.writeFileSync("accounts.json",JSON.stringify(accounts))
  return accounts
}
