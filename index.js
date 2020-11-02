const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { URLSearchParams } = require('url');
var random = require('random-name')
var randomize = require('randomatic')
const delay = require('delay')
const readlineSync = require('readline-sync');

const functionRegist = (email) => new Promise((resolve, reject) => {
    const bodys = {
        email: email,
        password:"Kmaway87aaa@"
    }

    fetch(`https://backendapi.realresearcher.com/register`, { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; G011A Build/N2G48H)',
            'Host': 'backendapi.realresearcher.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'Content-Length': '85'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionVerifOtpEmail = (user, otp) => new Promise((resolve, reject) => {
    const bodys = {
        id: user,
        token: otp,
        type: "email"
    }

    fetch(`https://backendapi.realresearcher.com/verifyOTP`, { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; G011A Build/N2G48H)',
            'Host': 'backendapi.realresearcher.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'Content-Length': '85'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionKyc2 = (user2) => new Promise((resolve, reject) => {
    const bodys = {
        annualRevenue: "4",
        employementStatus: "0",
        id: user2,
        investIn: ["4"],
        netWorth: "3",
        ownProperties: "4"
    }

    fetch(`https://backendapi.realresearcher.com/user/updateKYC`, { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; G011A Build/N2G48H)',
            'Host': 'backendapi.realresearcher.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'Content-Length': '85'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionKyc1 = (user2) => new Promise((resolve, reject) => {
    const bodys = {
        "age":"2016-11-02T07:54:14.931Z","city":"Swains Island","country":"American Samoa","countryCode":"AS","gender":"1","id":user2,"languages":["rm"],"nationality":"Anguilla","nationalityCode":"AI","relationStatus":"2"
    }

    fetch(`https://backendapi.realresearcher.com/user/SendKYC`, { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; G011A Build/N2G48H)',
            'Host': 'backendapi.realresearcher.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'Content-Length': '85'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionCreateWallet = (email) => new Promise((resolve, reject) => {
    const params = new URLSearchParams;
    params.append('creator', 'realresearch');
    params.append('creator_wif', '5Hrn3UPTedWAtyZZsUUdoA1FqRTzozAuydVB7mVFQwXXdqPiquB');
    params.append('email', email);
    params.append('password', '838141')

    fetch(`https://mainnet.realresearchnet.com/api/tnc_rr_create_wallet`, { 
        method: 'POST', 
        body: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; G011A Build/N2G48H)',
            'Host': 'mainnet.realresearchnet.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'Content-Length': '85'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionTransfer = (email, memo) => new Promise((resolve, reject) => {
    const params = new URLSearchParams;
    params.append('email', email);
    params.append('password', '838141');
    params.append('to', 'tncdeposit01');
    params.append('amount', '10')
    params.append('memo', memo)

    fetch(`https://mainnet.realresearchnet.com/api/tnc_rr_transfer`, { 
        method: 'POST', 
        body: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; G011A Build/N2G48H)',
            'Host': 'mainnet.realresearchnet.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'Content-Length': '85'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionKey = (email) => new Promise((resolve, reject) => {
    const params = new URLSearchParams;
    params.append('email', email);

    fetch(`https://mainnet.realresearchnet.com/api/tnc_rr_get_wallet_info`, { 
        method: 'POST', 
        body: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; G011A Build/N2G48H)',
            'Host': 'mainnet.realresearchnet.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'Content-Length': '85'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionSetWallet = (key, user2) => new Promise((resolve, reject) => {
    const bodys = {
        wallet: key,
        id: user2
    }

    fetch(`https://backendapi.realresearcher.com/setUserWallet`, { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; G011A Build/N2G48H)',
            'Host': 'backendapi.realresearcher.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'Content-Length': '85'
        }
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

const functionGetLink = (nickname) =>
   new Promise((resolve, reject) => {
       fetch(`https://generator.email/`, {
           method: "get",
           headers: {
               'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
               'accept-encoding': 'gzip, deflate, br',
               'accept-language': 'en-US,en;q=0.9',
               'cookie': `_ga=GA1.2.1434039633.1579610017; _gid=GA1.2.374838364.1579610017; _gat=1; surl=mixalo.com%2F${nickname}`,
               'sec-fetch-mode': 'navigate',
               'sec-fetch-site': 'same-origin',
               'upgrade-insecure-requests': 1,
               'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36'
           }
       })
       .then(res => res.text())
           .then(text => {
               const $ = cheerio.load(text);
               const src = $("b").text()
               resolve(src);
           })
           .catch(err => reject(err));
   });

(async () => {
    const memo = readlineSync.question("[?] Memo: ")
    const jumlah = readlineSync.question('[?] Jumlah reff: ')
    console.log("")
    for (var i = 0; i < jumlah; i++){
    try {
        const name = random.first()
        const rand = randomize('0', 5)
        const email = `${name}${rand}@mixalo.com`
        console.log(`[+] Email: ${email}`)
        const regist = await functionRegist(email)
        if (regist.auth == true){
            console.log('[+] Berhasil send OTP email.')
            const user = regist.user
            await delay(10000)
            const getOtp = await functionGetLink(`${name}${rand}`)
            const otp = getOtp.split('com')[1]
            console.log(`[+] OTP: ${otp}`)
            const verifEmail = await functionVerifOtpEmail(user, otp)
            var user2 = verifEmail.user
            if (verifEmail.auth == true){
                const wallet = await functionCreateWallet(email)
                if (wallet.status == 'success'){
                    console.log('[+] Berhasil membuat wallet')
                    const getKey = await functionKey(email)
                    const key = getKey.result[0].name
                    const set = await functionSetWallet(key, user2)
                    if (set.auth == true){
                        console.log('[+] Setting Wallet Sukses !')
                        const kyc1 = await functionKyc1(user2)
                        const kyc2 = await functionKyc2(user2)
                        if (kyc1.auth == true && kyc2.auth == true){
                            console.log('[+] SUKSES KYC !')
                            const transfer = await functionTransfer(email, memo)
                            if (transfer.status == 'success'){
                                console.log('[+] Transfer Berhasil !\n')
                            } else {
                                console.log('[!] Transfer Gagal !\n')
                            }
                        } else {
                            console.log("[!] GAGAL KYC !\n")
                        }
                    } else {
                        console.log('[!] Setting Wallet Gagal !\n')
                    }
                } else {
                    console.log('[!] Gagal membuat wallet\n')
                }
            } else {
                console.log('[!] OTP email salah !\n')
            }
        } else {
            console.log("[!] Gagal send OTP email\n")
        }
    } catch (e) {
        console.log(e);
}
    }
})()
